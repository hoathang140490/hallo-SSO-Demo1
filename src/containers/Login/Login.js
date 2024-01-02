import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Header from 'layout/Header/Header';
import React from 'react';
import {Row, Col} from 'reactstrap';
import './styles.scss';

import LoginFace from 'assets/images/hallo-login-face_purple.png';
import MicrosoftIcon from 'assets/images/Microsoft_icon.png';

const Login = () => {
  return (
    <>
      <Header />
      <Row className="login-content">
        <Col sm={4} className="login-face">
          <img src={LoginFace} alt="" />
        </Col>
        <Col sm={4} className="confirm-text">
          <h1>Wij zorgen dat ICT voor jou werkt</h1>
        </Col>
        <Col sm={4} className="login-wrapper">
          <div className="login-form">
            <h2>Login mijn hallo</h2>
            <form>
              <div className="input-item">
                <p className="label">E-mail addres</p>
                <Input type="text" placeholder="Username/E-mail" />
              </div>
              <div className="input-item">
                <p className="label">Password</p>
                <Input type="password" placeholder="Password" />
              </div>
              <div className="forgot-pw">
                <Button label="Forgot password"></Button>
              </div>
              <div className="or">Or</div>
              <div className="sign-in-microsoft">
                <button>
                  <img src={MicrosoftIcon} alt="" />
                  <span>Sign in with Microsoft</span>
                </button>
              </div>
              <div className="login-btn">
                <Button type="submit" label="Login" />
              </div>
            </form>
          </div>
        </Col>
        {/* <h1>Please Log In</h1>
         */}
      </Row>
    </>
  );
};

export default Login;
