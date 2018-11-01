import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    //const { positions, account } = props;
    // if (positions) {

    //   // return { total };
    // }

    return null;
  }

  render() {
    const { positions, account } = this.props;
    //const { total } = this.state;

    if (positions && account) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i className="fas fa-money-check-alt" /> Portfolio
              </h2>
            </div>
            <div className="col-md-6">
              <h5 className="text-right text-secondary">
                Acc Balance:{' '}
                <span className="text-primary">
                  ${parseFloat(account[0].balance).toFixed(2)}
                </span>
              </h5>
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
              {positions.map(position => (
                <tr key={position.id}>
                  <td>{position.companyName}</td>
                  <td>{position.ticker}</td>
                  <td>${parseFloat(position.totalValAtPurchase).toFixed(2)}</td>
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
  firestoreConnect([{ collection: 'positions' }, { collection: 'account' }]),
  connect((state, props) => ({
    positions: state.firestore.ordered.positions,
    account: state.firestore.ordered.account
  }))
)(Positions);
