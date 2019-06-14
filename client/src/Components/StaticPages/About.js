import React from "react";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="static__slider" />
        <div className="static__pages">
          <h1 className="about">About Us</h1>
          <br />
          <p>
            At BookWorm, we want to make reading a joyful and enriching moment
            by offering you the opportunity to read at any time of the day,
            while traveling, in transport, at home: discover reading in complete
            freedom!
          </p>

          <p>
            To offer you a free reading of all constraints A free reading of the
            material, temporal and cultural constraints. Have the ability to
            read and flip through the books of your choice, whatever you want,
            whenever you want!
          </p>

          <p>
            Enrich your reading experience with BookWorm discover titles in all
            genres, authors or books for all occasions and all moods: traveling,
            between two appointments, in the waiting room, evening family ...
          </p>

          <p>
            Access a light, enthusiastic and lively reading experience to share
            with others. Let yourself go to the liberated reading!
          </p>
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

export default About;
