import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './LoginForm.module.scss';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameValue: '',
      isNameValid: false,
      surnameValue: '',
      isSurnameValid: false,
      emailValue: '',
      isEmailValid: false,
      passwordValue: '',
      isPasswordValid: false,
    };
  }

  handleNameChange = ({ target: { value } }) => {
    this.setState({
      nameValue: value,
      isNameValid: /^[A-Z][a-z]{0,20}(\s{1})?(-?[A-Z][a-z]{0,20})?$/.test(
        value
      ),
    });
  };

  handleSurnameChange = ({ target: { value } }) => {
    this.setState({
      surnameValue: value,
      isSurnameValid: /^[A-Z][a-z]{0,20}(\s{1})?(-?[A-Z][a-z]{0,20})?$/.test(
        value
      ),
    });
  };

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      emailValue: value,
      isEmailValid: /^[a-zA-Z0-9.+]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      passwordValue: value,
      isPasswordValid: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)\w{0,16}$/.test(
        value
      ),
    });
  };

  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    const {
      nameValue,
      isNameValid,
      surnameValue,
      isSurnameValid,
      emailValue,
      isEmailValid,
      passwordValue,
      isPasswordValid,
    } = this.state;

    const inputNameClass = classNames(styles.input, {
      [isNameValid ? styles.valid : styles.invalid]: nameValue,
    });

    const inputSurnameClass = classNames(styles.input, {
      [isSurnameValid ? styles.valid : styles.invalid]: surnameValue,
    });

    const inputEmailClass = classNames(styles.input, {
      [isEmailValid ? styles.valid : styles.invalid]: emailValue,
    });

    const inputPasswordClass = classNames(styles.input, {
      [isPasswordValid ? styles.valid : styles.invalid]: passwordValue,
    });

    return (
      <>
        <div className={styles.container}>
          <h1 className={styles.header}>LOGIN</h1>
          <p className={styles.loginInfo}>Please enter your information</p>
          <form className={styles.formContainer} onSubmit={this.submitHandler}>
            <input
              className={inputNameClass}
              type="text"
              placeholder="Name"
              name="nameValue"
              value={nameValue}
              onChange={this.handleNameChange}
            />
            <input
              className={inputSurnameClass}
              type="text"
              placeholder="Surname"
              name="surnameValue"
              value={surnameValue}
              onChange={this.handleSurnameChange}
            />
            <input
              className={inputEmailClass}
              type="email"
              placeholder="Email Address"
              name="emailValue"
              value={emailValue}
              onChange={this.handleEmailChange}
            />
            <input
              className={inputPasswordClass}
              type="password"
              placeholder="Password"
              name="passwordValue"
              value={passwordValue}
              onChange={this.handlePasswordChange}
            />
            <a
              className={styles.forgotPassword}
              href="mailto:nowhere@mozilla.org"
            >
              Forgot password?
            </a>
            <div className={styles.buttonContainer}>
              <button className={styles.button} type="submit">
                Sign In
              </button>
              <button className={styles.button} type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default LoginForm;
