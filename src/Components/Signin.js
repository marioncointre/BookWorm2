import React from "react";

class Signin extends React.Component {
  render() {
    if (this.props.Display2 === false) {
      return (
        <>
          <p
            className="Enter"
            onClick={event => {
              this.props.Popup2();
            }}
          >
            Sign up
          </p>
        </>
      );
    } else {
      return (
        <>
          <p />
        </>
      );
    }
  }
}
export default Signin;
