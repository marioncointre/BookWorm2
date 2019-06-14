import React from "react";

class Button extends React.Component {
  render() {
    if (this.props.Display === false) {
      return (
        <>
          <div class="home">
            <h1>Read anytime, anywhere</h1>
            <br />
            <p className="home__title">
              <span>BookWorm</span> offers online streaming of a library of
              books, magazines and overall literature genres. This means you
              have the possibility to chose from a wide variety of books,
              magazines and newspapers, wherever you are in the world, right at
              your fingers tips.
            </p>
            <button
              className="home__enter"
              onClick={event => {
                this.props.Popup();
              }}
            >
              Enjoy
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <p> </p>
        </>
      );
    }
  }
}
export default Button;
