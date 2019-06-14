import React from "react";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer";
import logo from "../../assets/images/open-book.svg";
import logo_y from "../../assets/images/open-book_y.svg";
import logo_r from "../../assets/images/open-book_r.svg";
import check from "../../assets/images/checked.svg";

class Subscriptions extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="subscriptions">
          <h1>Subscription Plans</h1>
          <div className="subscriptions__container">
            <div className="subscriptions__basic">
              <img src={logo_y} alt="basic subscription" width="80px" />
              <h2>Basic</h2>
              <ul>
                <li>
                  <img src={check} alt="check" className="checked" />
                  Free access to our catalog
                </li>
                <li className="opacity"> Read online</li>
                <li className="opacity"> No advertising</li>
                <li className="opacity"> Read offline</li>
                <li className="opacity"> Access all premium books</li>
                <li className="opacity"> Access all press</li>
                <li className="price"> Price: FREE</li>
              </ul>
              <button>Subscribe </button>
            </div>
            <div className="subscriptions__standard">
              <img src={logo} alt="basic subscription" width="80px" />
              <h2>Standard</h2>
              <ul>
                <li>
                  <img src={check} alt="check" className="checked" />
                  Free access to our catalog
                </li>
                <li>
                  <img src={check} alt="check" className="checked" />
                  Read online
                </li>
                <li>
                  <img src={check} alt="check" className="checked" />
                  No advertising
                </li>
                <li>
                  <img src={check} alt="check" className="checked" />
                  Read offline
                </li>
                <li>
                  <img src={check} alt="check" className="checked" />
                  Access all premium books
                </li>
                <li className="opacity"> Access all press</li>
                <li className="price"> Price: 9,99€ / month</li>
              </ul>
              <button>Subscribe </button>
            </div>
            <div className="subscriptions__premium">
              <img src={logo_r} alt="basic subscription" width="80px" />
              <h2>Premium</h2>
              <ul>
                <li>
                  <img src={check} alt="check" className="checked" />
                  Free access to our catalog
                </li>
                <li>
                  <img src={check} alt="check" className="checked" />
                  Read online
                </li>
                <li>
                  <img src={check} alt="check" className="checked" />
                  No advertising
                </li>
                <li>
                  <img src={check} alt="check" className="checked" />
                  Read offline
                </li>
                <li>
                  <img src={check} alt="check" className="checked" />
                  Access all premium books
                </li>
                <li>
                  <img src={check} alt="check" className="checked" />
                  Access all press
                </li>
                <li className="price"> Price: 11,99€ / month</li>
              </ul>
              <button>Subscribe </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Subscriptions;
