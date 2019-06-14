import React from "react";
import axios from "axios";
import Header from "./Elements/Header";
import Footer from "./Elements/Footer";
import Ratings from "./StaticPages/Ratings";
import Return from "./Elements/Return";
import { Link } from "react-router-dom";

class Book extends React.Component {
  state = {
    Book: []
  };

  componentDidMount() {
    const bookURL =
      "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
      this.props.match.params.book;
    axios.get(bookURL).then(response => {
      const Book = response.data.items.map(volume => {
        return {
          id: volume.id,
          etag: volume.etag,
          volumeInfo: volume.volumeInfo,
          imageLinks: volume.volumeInfo.imageLinks,
          industryIdentifiers: volume.volumeInfo.industryIdentifiers,
          previewLink: volume.volumeInfo.previewLink
        };
      });

      this.setState({
        Book: Book
      });
    });
  }

  render() {
    const volumesList = this.state.Book.map((volumeData, index) => {
      const {
        volumeInfo,
        imageLinks,
        industryIdentifiers,
        previewLink
      } = volumeData;

      return (
        <>
          <div className="book">
            <div className="book__introduction">
              <div className="book__information">
                <p>
                  <img src={imageLinks.thumbnail} alt={volumeInfo.title} />
                </p>
                <div className="book__title">
                  <h1>{volumeInfo.title}</h1>
                  <h2 className="book__author">{volumeInfo.authors}</h2>
                  <Ratings />

                  <a href={previewLink}>
                    <button>Read</button>
                  </a>
                </div>
              </div>
              <br />
              <div className="book__details">
                <p className="book__published">
                  <span>Publication date:</span> {volumeInfo.publishedDate}
                </p>
                <p className="book__description">
                  <span>Description: </span>
                  {volumeInfo.description}
                </p>
                <p className="book__categories">
                  <span>Categories: </span>
                  {volumeInfo.categories}
                </p>

                <p className="book__isbn">
                  <span>ISBN : </span>
                  {industryIdentifiers[0].identifier}
                </p>
              </div>
            </div>
          </div>
        </>
      );
    });

    return (
      <>
        <Header />
        <Link to="/categories">
          <Return />
        </Link>
        {volumesList}
        <Footer />
      </>
    );
  }
}

export default Book;
