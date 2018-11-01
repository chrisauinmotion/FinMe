import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Spinner from '../layout/Spinner';

class Trades extends Component {
  render() {
    let { trades } = this.props;

    if (trades) {
      // trades = trades.filter(
      //   trade => trade.userId === this.props.firestore.data.account[0].userId
      // );

      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-file-invoice-dollar" /> Trades
              </h2>
            </div>
          </div>

          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Company Name</th>
                <th>Ticker</th>
                <th>Shares</th>
                <th>Purchase Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {trades.map(trade => (
                <tr key={trade.id}>
                  <td>{trade.companyName}</td>
                  <td>{trade.ticker}</td>
                  <td>{trade.sharesPurchased}</td>
                  <td>${parseFloat(trade.priceAtPurchase).toFixed(2)}</td>
                  <td>{trade.date}</td>
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

Trades.propTypes = {
  firebase: PropTypes.object.isRequired,
  trades: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: 'trades' }]),
  connect((state, props) => ({
    trades: state.firestore.ordered.trades
  }))
)(Trades);
