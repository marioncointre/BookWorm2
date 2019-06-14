import React from "react";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer";
import mail from "../../assets/images/mail_w.svg";
import contact from "../../assets/images/contact_w.svg";
import conversation from "../../assets/images/conversation_w.svg";
import support from "../../assets/images/support_w.svg";

class Contact extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="contact">
          <div className="static__pages">
            <h1 className="static__title--relative">Contact Us</h1>
            <div className="icons">
              <ul>
                <li>
                  <img src={mail} width="60px" />
                </li>
                <li>
                  <img src={contact} width="60px" />
                </li>
                <li>
                  <img src={conversation} width="60px" />
                </li>
                <li>
                  <img src={support} width="60px" />
                </li>
              </ul>
            </div>
            <div className="contact__form">
              <form>
                <input type="text" name="name" placeholder="First name" />
                <input type="text" name="surname" placeholder="Last name" />
                <input type="email" name="name" placeholder="email address" />
                <input type="phone" name="name" placeholder="Phone number" />
                <textarea
                  type="message"
                  name="message"
                  placeholder="Write your message"
                  rows="10"
                />
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Contact;
