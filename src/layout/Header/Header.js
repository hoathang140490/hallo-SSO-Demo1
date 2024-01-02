import React from 'react';
import './styles.scss';
import {Row, Col} from 'reactstrap';

import HalloLogo from 'assets/images/hallo_logo.svg';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="top-header">
        <Row>
          <Col sm={6}></Col>
          <Col sm={6}>
            <div className="hallo-info">
              <span className="hallo-role">hallo, cusomer service </span>{' '}
              <span className="numberphone">088-2550100</span>
              <span className="web-name">
                <span>to</span> <span>hallo.eu</span>
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="header-logo">
        <div className="header-content">
          <div className="logo">
            <h1>mijn </h1>
            <img src={HalloLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
