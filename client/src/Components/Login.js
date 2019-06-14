import React from "react";
import { Link } from "react-router-dom";
import Enter from "./Elements/Enter";
import Signup from "./Signup";

class Login extends React.Component {
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
    let form;

    if (this.state.display) {
      form = (
        <div id="form-login">
          <form method="post">
            <h2>To access all books, sign in:</h2>
            <h3>First visit? </h3>
            <Signup displayLogin={this.state.display} />
            <input
              name="email"
              type="email"
              className="full-input"
              placeholder="marion.cointre@gmail.com"
            />
            <input
              name="password"
              type="password"
              className="full-input"
              placeholder="••••••••••"
            />
            <p className="mentions">
              <a href="_lostpassword.html">Forgotten password?</a>
            </p>
            <Link to="/categories">
              <button type="submit">Sign in </button>
            </Link>
          </form>
        </div>
      );
    }
    return (
      <>
        {form}
        <Enter Popup={this.toggleForm} Display={this.state.display} />
      </>
    );
  }
}

export default Login;
