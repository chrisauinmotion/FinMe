import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

class Positions extends Component {
  state = {
    total: null
  };

  static getDerivedStateFromProps(props, state) {
    let { account, uid, positions } = props;
    if (account && uid && positions) {
      return { account, positions, uid };
    }

    return null;
  }

  onClick = e => {
    e.preventDefault();
    const { firestore, uid } = this.props;
    const newAccount = {
      balance: '5000',
      userId: uid
    };
    firestore.add({ collection: 'account' }, newAccount);
  };

  render() {
    let { positions, account, uid } = this.props;

    if (positions && account && uid) {
      account = account.filter(account => account.userId === uid)[0];
      positions = positions.filter(position => position.userId === uid);

      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-money-check-alt" /> Portfolio
              </h2>
            </div>
            <div className="col-md-6">
              {console.log(account)}
              {account ? (
                <h5 className="text-right text-secondary">
                  Acc Balance:{' '}
                  <span className="text-primary">
                    ${parseFloat(account.balance).toFixed(2)}
                  </span>
                </h5>
              ) : (
                <button
                  onClick={e =>
                    this.onClick(e, this.state.ticker, this.state.shares)
                  }
                  className="btn btn-secondary btn-block"
                >
                  Open Account
                </button>
              )}
            </div>
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Company Name</th>
                <th>Ticker</th>
                <th>Val At Purchase</th>
              </tr>
            </thead>
            <tbody>
              {positions &&
                positions.map(position => (
                  <tr key={position.id}>
                    <td>{position.companyName}</td>
                    <td>{position.ticker}</td>
                    <td>
                      ${parseFloat(position.totalValAtPurchase).toFixed(2)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Positions.propTypes = {
  firebase: PropTypes.object.isRequired,
  positions: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'account' }, { collection: 'positions' }]),
  connect((state, props) => ({
    account: state.firestore.ordered.account,
    positions: state.firestore.ordered.positions,
    uid: state.firebase.auth.uid
  }))
)(Positions);
