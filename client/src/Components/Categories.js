import React from "react";
import Header from "./Elements/Header";
import Footer from "./Elements/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

class Categories extends React.Component {
  state = {
    thrillerBooks: [],
    sportsBooks: [],
    businessBooks: [],
    fashionBooks: []
  };

  componentDidMount() {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=subject:thriller")
      .then(response => {
        const thrillerBooks = response.data.items.map(volume => {
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
          thrillerBooks: thrillerBooks
        });
      });

    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=subject:sports")
      .then(response => {
        const sportsBooks = response.data.items.map(volume => {
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
          sportsBooks: sportsBooks
        });
      });

    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=subject:business")
      .then(response => {
        const businessBooks = response.data.items.map(volume => {
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
          businessBooks: businessBooks
        });
      });

    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=subject:fashion")
      .then(response => {
        const fashionBooks = response.data.items.map(volume => {
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
          fashionBooks: fashionBooks
        });
      });
  }
  render() {
    const thrillerPath = "/category/thriller";
    const thrillerList = this.state.thrillerBooks.map((bookData, index) => {
      const { volumeInfo, imageLinks, industryIdentifiers } = bookData;
      const bookThriller = "/categories/" + industryIdentifiers[0].identifier;
      return (
        <>
          <div className="subcategory__book">
            <p>
              <Link to={bookThriller}>
                <img src={imageLinks.thumbnail} alt={volumeInfo.title} />
              </Link>
            </p>
            <p className="title">{volumeInfo.title}</p>
            <p className="author">{volumeInfo.authors}</p>
            <p className="published">{volumeInfo.publishedDate}</p>
          </div>
        </>
      );
    });

    const businessPath = "/category/business";
    const businessList = this.state.businessBooks.map((bookData, index) => {
      const { volumeInfo, imageLinks, industryIdentifiers } = bookData;
      const bookBusiness = "/categories/" + industryIdentifiers[0].identifier;
      return (
        <>
          <div className="subcategory__book">
            <p>
              <Link to={bookBusiness}>
                <img src={imageLinks.thumbnail} alt={volumeInfo.title} />
              </Link>
            </p>
            <p className="title">{volumeInfo.title}</p>
            <p className="author">{volumeInfo.authors}</p>
            <p className="published">{volumeInfo.publishedDate}</p>
          </div>
        </>
      );
    });

    const sportsPath = "/category/sports";
    const sportsList = this.state.sportsBooks.map((bookData, index) => {
      const { volumeInfo, imageLinks, industryIdentifiers } = bookData;
      const bookSports = "/categories/" + industryIdentifiers[0].identifier;
      return (
        <>
          <div className="subcategory__book">
            <p>
              <Link to={bookSports}>
                <img src={imageLinks.thumbnail} alt={volumeInfo.title} />
              </Link>
            </p>
            <p className="title">{volumeInfo.title}</p>
            <p className="author">{volumeInfo.authors}</p>
            <p className="published">{volumeInfo.publishedDate}</p>
          </div>
        </>
      );
    });

    const fashionPath = "/category/fashion";
    const fashionList = this.state.fashionBooks.map((bookData, index) => {
      const { volumeInfo, imageLinks, industryIdentifiers } = bookData;
      const bookFashion = "/categories/" + industryIdentifiers[0].identifier;
      return (
        <>
          <div className="subcategory__book">
            <p>
              <Link to={bookFashion}>
                <img src={imageLinks.thumbnail} alt={volumeInfo.title} />
              </Link>
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
        <div className="slider">
          <div className="layer"/>
          <h1 className="slider__title">categories</h1>
        </div>
        <div className="categories">
          <div className="section">
            <Link to={thrillerPath}>
              <h3>Thrillers</h3>
            </Link>
            <Link to={thrillerPath}>
              <h4> See all thrillers ></h4>
            </Link>
          </div>
          <div className="subcategory">
            {thrillerList}
            <br />
          </div>
          <div className="subcategory__scroll">
            <div className="mousey">
              <div class="scroller" />
            </div>
          </div>
          <hr />
          <div className="section">
            <Link to={sportsPath}>
              <h3>Sports</h3>
            </Link>
            <Link to={sportsPath}>
              <h4> See all Sports ></h4>
            </Link>
          </div>
          <div className="subcategory">
            {sportsList}
            <br />
          </div>
          <div className="subcategory__scroll">
            <div className="mousey">
              <div class="scroller" />
            </div>
          </div>
          <hr />

          <div className="section">
            <Link to={businessPath}>
              <h3>Business</h3>
            </Link>
            <Link to={businessPath}>
              <h4> See all Business ></h4>
            </Link>
          </div>
          <div className="subcategory">
            {businessList}
            <br />
          </div>
          <div className="subcategory__scroll">
            <div className="mousey">
              <div class="scroller" />
            </div>
          </div>
          <hr />

          <div className="section">
            <Link to={fashionPath}>
              <h3>Fashion</h3>
            </Link>
            <Link to={fashionPath}>
              <h4> See all Fashion ></h4>
            </Link>
          </div>
          <div className="subcategory">
            {fashionList}
            <br />
          </div>
          <div className="subcategory__scroll">
            <div className="mousey">
              <div class="scroller" />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Categories;
