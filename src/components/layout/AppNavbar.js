import React from 'react';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success mb-3 py--0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Stock Portfolio Tracker
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-chart-line" /> Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
