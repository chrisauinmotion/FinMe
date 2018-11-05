import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';
import classnames from 'classnames';

class Positions extends Component {
  state = {
    total: null,
    isHovered: false
  };

  onClick = e => {
    e.preventDefault();
    const { firestore, uid } = this.props;
    const newAccount = {
      balance: '5000',
      userId: uid
    };
    firestore.add({ collection: 'account' }, newAccount);
  };

  onMouseEnter = async e => {
    let { positions } = this.props;

    const tickers = [];
    // positions = positions.filter(position => position.userId === uid);
    positions.forEach(position => tickers.push(position.ticker));
    let latestMktInfo = [];

    while (tickers.length) {
      const res = await axios.get(
        `https://api.iextrading.com/1.0/stock/${tickers.shift()}/quote`
      );

      const { symbol, latestPrice, open } = res.data;

      latestMktInfo.push({ symbol, latestPrice, open });
    }

    for (let position in positions) {
      for (let mktInfo in latestMktInfo) {
        let obj1 = positions[position];
        let obj2 = latestMktInfo[mktInfo];
        if (obj1.ticker === obj2.symbol) {
          positions[position] = {
            ...obj1,
            latestPrice: obj2['latestPrice'],
            open: obj2['open']
          };
        }
      }
    }

    this.setState({ isHovered: true });
  };

  onMouseLeave = e => this.setState({ isHovered: false });

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
              {this.state.isHovered ? (
                <tr>
                  <th>Ticker</th>
                  <th>Shares Held</th>
                  <th>Opening PX</th>
                  <th>Current PX</th>
                  <th>Today's P/L</th>
                  <th>Val @Purchase</th>
                  <th>Cur Ttl Val</th>
                  <th>Lifetime P/L</th>
                </tr>
              ) : (
                <tr>
                  <th>Company</th>
                  <th>Ticker</th>
                  <th>Val @Purchase</th>
                  <th>Shares Held</th>
                </tr>
              )}
            </thead>
            <tbody>
              {this.state.isHovered
                ? positions.map(position => (
                    <tr
                      key={position.id}
                      onMouseEnter={this.onMouseEnter}
                      onMouseLeave={this.onMouseLeave}
                    >
                      <td>{position.ticker}</td>
                      <td>{position.sharesOwned}</td>
                      <td>${parseFloat(position.open).toFixed(2)}</td>
                      <td>${parseFloat(position.latestPrice).toFixed(2)}</td>
                      <td>
                        <span
                          className={classnames({
                            'text-danger':
                              parseFloat(
                                position.latestPrice * position.sharesOwned -
                                  position.open * position.sharesOwned
                              ).toFixed(2) < 0,
                            'text-success':
                              parseFloat(
                                position.latestPrice * position.sharesOwned -
                                  position.open * position.sharesOwned
                              ).toFixed(2) > 0,
                            'text-secondary':
                              parseFloat(
                                position.latestPrice * position.sharesOwned -
                                  position.open * position.sharesOwned
                              ).toFixed(2) === 0
                          })}
                        >
                          $
                          {parseFloat(
                            position.latestPrice * position.sharesOwned -
                              position.open * position.sharesOwned
                          ).toFixed(2)}
                        </span>
                      </td>
                      <td>
                        ${parseFloat(position.totalValAtPurchase).toFixed(2)}
                      </td>
                      <td>
                        $
                        {parseFloat(
                          position.latestPrice * position.sharesOwned
                        ).toFixed(2)}
                      </td>
                      <td>
                        <span
                          className={classnames({
                            'text-danger':
                              parseFloat(
                                position.latestPrice * position.sharesOwned -
                                  position.totalValAtPurchase
                              ).toFixed(2) < 0,
                            'text-success':
                              parseFloat(
                                position.latestPrice * position.sharesOwned -
                                  position.totalValAtPurchase
                              ).toFixed(2) > 0,
                            'text-secondary':
                              parseFloat(
                                position.latestPrice * position.sharesOwned -
                                  position.totalValAtPurchase
                              ).toFixed(2) === 0
                          })}
                        >
                          $
                          {parseFloat(
                            position.latestPrice * position.sharesOwned -
                              position.totalValAtPurchase
                          ).toFixed(2)}{' '}
                        </span>
                      </td>
                    </tr>
                  ))
                : positions.map(position => (
                    <tr
                      key={position.id}
                      onMouseEnter={this.onMouseEnter}
                      onMouseLeave={this.onMouseLeave}
                    >
                      <td>{position.companyName}</td>
                      <td>{position.ticker}</td>
                      <td>
                        ${parseFloat(position.totalValAtPurchase).toFixed(2)}
                      </td>
                      <td>{position.sharesOwned}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
          <hr />
          <h6>
            <i className="fas fa-info-circle" /> Hover over rows to get latest
            performance stats
          </h6>
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
