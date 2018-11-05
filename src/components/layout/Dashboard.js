import React, { Component } from 'react';
import Positions from '../positions/Positions';
import Sidebar from '../layout/Sidebar';

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-10">
          <Positions />
        </div>
        <div className="col-md-2">
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Dashboard;
