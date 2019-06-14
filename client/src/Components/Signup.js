import React from "react";
import { Link } from "react-router-dom";
import Signin from "./Signin";

class Signup extends React.Component {
  state = {
    display: false
  };

  toggleForm = () => {
    if (!this.state.display) {
      this.setState({
        display: true
      });
    } else {
      this.setState({
        display: false
      });
    }
  };

  render() {
    let form2;

    if (this.state.display) {
      form2 = (
        <div id="form-login">
          <form method="post">
            <h2>To access all books, sign up:</h2>
            <input
              name="name"
              type="text"
              className="full-input"
              placeholder="Your Name"
            />
            <input
              name="surname"
              type="text"
              className="full-input"
              placeholder="Your Surname"
            />
            <input
              name="email"
              type="text"
              className="full-input"
              placeholder="marion.cointre@gmail.com"
            />
            <input
              name="password"
              type="text"
              className="full-input"
              placeholder="Your password"
            />
            <input
              name="password_confirm"
              type="text"
              className="full-input"
              placeholder="Confirm your password"
            />
            <Link to="/categories">
              <button type="submit">Sign up </button>
            </Link>
          </form>
        </div>
      );
    }
    return (
      <>
        {form2}
        <Signin Popup2={this.toggleForm} Display2={this.state.display} />
      </>
    );
  }
}
export default Signup;
