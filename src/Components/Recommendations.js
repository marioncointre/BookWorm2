import React from "react";
import axios from "axios";
import Header from "./Elements/Header";
import Footer from "./Elements/Footer";
import { Link } from "react-router-dom";

const RecommendationURL =
  "https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=Vta5rBnMDdArngBoep2LYhXVB6tphiS7";

const bookURL = "https://books.google.ca/books?q=9780735219090";

class Recommendations extends React.Component {
  state = {
    recommendedBooks: [],
    isbnNumber: [],
    bookImage: []
  };

  componentDidMount() {
    axios.get(RecommendationURL).then(response => {
      const recommendedBooks = response.data.results.map(book => {
        return {
          rank: book.rank,
          book_details: book.book_details,
          isbns: book.book_details[0].primary_isbn13
        };
      });
      this.setState({
        recommendedBooks: recommendedBooks
      });
    });
  }

  render() {
    const bookList = this.state.recommendedBooks.map((bookData, index) => {
      const { book_details } = bookData;
      const bookPath =
        "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
        book_details[0].primary_isbn13;
      return (
        <>
          <div className="recommended" key={index}>
            <h4 className="numberCircle" id="rank">
              {bookData.rank}
            </h4>
            <div>{/* <img src="" alt="book image" /> */}</div>
            <h2>{bookData.book_details[0].title}</h2>
            <div className="book__published">
              <h3>{bookData.book_details[0].contributor}</h3>
            </div>
            <div className="book__published">
              <span>Description : </span>
              {bookData.book_details[0].description}
            </div>
            <div className="book__published">
              <span>Publisher : </span>
              {bookData.book_details[0].publisher}
            </div>
            <div className="book__published">
              <span>ISBN : </span>
              {bookData.book_details[0].primary_isbn13}
            </div>

            {/* <a href={bookPath}> */}
            <button id="read">Read</button>
            {/* </a> */}
          </div>
        </>
      );
    });
    return (
      <>
        <Header />
        <div className="recommended__slider" />
        <div className="recommended__title">
          <h1>15 ranking books of the week</h1>
          <h2>by The New York Times</h2>
        </div>
        <br />
        <div className="recommended__booklist">{bookList}</div>
        <Footer />
      </>
    );
  }
}

export default Recommendations;
