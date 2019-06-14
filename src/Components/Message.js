import React from "react";
import Header from "../Components/Elements/Header";
import Footer from "../Components/Elements/Footer";
import { Link } from "react-router-dom";

class Message extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="static__slider" />
        <div className="static__pages">
          <h1 className="about">Success</h1>
          <br />
          <p>
            Your message has been successfully sent. We will get back to you
            shortly.
          </p>
          <p>In the meantime, you can browse our categories.</p>
          <div className="static__link">
            <Link to="categories/">Discover all our categories ></Link>
          </div>
          <br />
        </div>

        <Footer />
      </>
    );
  }
}

export default Message;
