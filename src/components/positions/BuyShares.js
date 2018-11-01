import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { firestoreConnect } from 'react-redux-firebase';

class BuyShares extends Component {
  state = {
    ticker: '',
    shares: '',
    date: '',
    companyName: '',
    quotedPricePerShare: '',
    totalAmountDue: ''
  };

  static getDerivedStateFromProps(props, state) {
    let { account, uid, positions } = props;

    if (account && uid && positions) {
      account = account.filter(account => account.userId === uid)[0];
      positions = positions.filter(position => position.userId === uid);
      return { account, positions };
    }

    return null;
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onClick = async (e, ticker, shares) => {
    e.preventDefault();
    const res = await axios
      .get(`https://api.iextrading.com/1.0/stock/${ticker.toUpperCase()}/quote`)
      .catch(err => alert('Invalid Ticker', err.response));
    console.log(res.data);
    if (res && res.data) {
      const { companyName, latestPrice } = res.data;
      const { account } = this.state;
      const totalAmountDue = shares * +latestPrice.toFixed(0);

      if (totalAmountDue < +account.balance) {
        this.setState({
          companyName,
          totalAmountDue,
          quotedPricePerShare: +latestPrice.toFixed(0).toString()
        });
      } else {
        alert('You Do Not Have a Sufficient Balance to Execute This Trade');
      }
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { firestore, history, uid } = this.props;
    const {
      ticker,
      companyName,
      totalAmountDue,
      shares,
      quotedPricePerShare,
      account,
      positions
    } = this.state;

    //Reduce Account Balance
    const balanceUpdate = {
      balance: (+account.balance - +totalAmountDue.toFixed(0)).toString()
    };
    firestore.update({ collection: 'account', doc: account.id }, balanceUpdate);

    //Create A Trade Record
    const date = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, '/');
    const newTrade = {
      accountId: account.id,
      companyName,
      ticker,
      sharesPurchased: shares,
      date,
      priceAtPurchase: (+quotedPricePerShare.toFixed(0)).toString(),
      userId: uid
    };
    firestore.add({ collection: 'trades' }, newTrade);

    //Update Current Position if You Already Own Shares, Create a New Position if Not
    const positionToUpdate = positions.find(
      position => ticker.toUpperCase() === position.ticker.toUpperCase()
    );
    if (positionToUpdate) {
      const updatedPosition = {
        sharesOwned: +shares + positionToUpdate.sharesOwned,
        totalValAtPurchase: (
          +positionToUpdate.totalValAtPurchase + +totalAmountDue.toFixed(0)
        ).toString()
      };
      firestore
        .update(
          {
            collection: 'positions',
            doc: positionToUpdate.id
          },
          updatedPosition
        )
        .then(() => history.push('/'));
    } else {
      const newPosition = {
        userId: uid,
        accountId: account.id,
        companyName,
        ticker,
        totalValAtPurchase: +totalAmountDue.toFixed(0).toString(),
        sharesOwned: shares
      };
      firestore
        .add({ collection: 'positions' }, newPosition)
        .then(() => history.push('/'));
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashboard
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Buy Shares</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="ticker">Ticker</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Valid Ticker"
                  name="ticker"
                  minLength="1"
                  required
                  onChange={this.onChange}
                  value={this.state.ticker}
                />
              </div>
              <div className="form-group">
                <label htmlFor="shares">Shares</label>
                <input
                  type="text"
                  className="form-control"
                  name="shares"
                  minLength="1"
                  required
                  onChange={this.onChange}
                  value={this.state.shares}
                />
              </div>
              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="companyName"
                  minLength="1"
                  required
                  value={this.state.companyName}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="quotedPricePerShare">
                  Quoted Price Per Share
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="quotedPricePerShare"
                  minLength="1"
                  required
                  value={this.state.quotedPricePerShare}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="totalAmountDue">Total Amount Due</label>
                <input
                  type="text"
                  className="form-control"
                  name="totalAmountDue"
                  value={this.state.totalAmountDue}
                  readOnly
                />
              </div>
              {!this.state.totalAmountDue ? (
                <button
                  onClick={e =>
                    this.onClick(e, this.state.ticker, this.state.shares)
                  }
                  className="btn btn-secondary btn-block"
                >
                  Get Quote
                </button>
              ) : (
                <input
                  type="submit"
                  value="Execute Trade"
                  className="btn btn-success btn-block"
                />
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

BuyShares.proptypes = {
  firestore: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect([{ collection: 'account' }, { collection: 'positions' }]),
  connect((state, props) => ({
    account: state.firestore.ordered.account,
    positions: state.firestore.ordered.positions,
    uid: state.firebase.auth.uid
  }))
)(BuyShares);
