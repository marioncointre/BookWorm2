import React from "react";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer";
import axios from "axios";
import { CircularProgressbar } from "react-circular-progressbar";

import { Link } from "react-router-dom";

class Mylibrary extends React.Component {
  state = {
    libraryBooks: [],
    wishList: []
  };

  componentDidMount() {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=subject:thriller&maxResults=5"
      )
      .then(response => {
        const libraryBooks = response.data.items.map(volume => {
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
          libraryBooks: libraryBooks
        });
      });
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=subject:murder&maxResults=5"
      )
      .then(response => {
        const wishList = response.data.items.map(volume => {
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
          wishList: wishList
        });
      });
  }

  render() {
    const libraryList = this.state.libraryBooks.map((bookData, index) => {
      const { volumeInfo, imageLinks, industryIdentifiers } = bookData;

      return (
        <>
          <div className="subcategory__book">
            <p>
              {/* <Link to={fictionbookPath}> */}
              <img src={imageLinks.thumbnail} alt={volumeInfo.title} />
              {/* </Link> */}
            </p>
            <p className="title">{volumeInfo.title}</p>
            <p className="author">{volumeInfo.authors}</p>
            <br />
            <CircularProgressbar value={30} text={`${30}%`} />
          </div>
        </>
      );
    });

    const wishList = this.state.wishList.map((bookData, index) => {
      const { volumeInfo, imageLinks, industryIdentifiers } = bookData;

      return (
        <>
          <div className="subcategory__book">
            <p>
              {/* <Link to={fictionbookPath}> */}
              <img src={imageLinks.thumbnail} alt={volumeInfo.title} />
              {/* </Link> */}
            </p>
            <p className="title">{volumeInfo.title}</p>
            <p className="author">{volumeInfo.authors}</p>
            <p className="published">{volumeInfo.publishedDate}</p>
          </div>
        </>
      );
    });

    return (
      <>
        <Header />
        <div className="library">
          <div className="layer" />
        </div>
        <div className="static__pages">
          <h1 className="static__title">My Library</h1>
          <h2 className="library__progress">Read in progress...</h2>
          <div className="subcategory">{libraryList}</div>
          <hr />
          <h2 className="library__progress">Wish list</h2>
          <div className="subcategory">{wishList}</div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Mylibrary;
