import React from "react";
import axios from "axios";
import Header from "./Elements/Header";
import Footer from "./Elements/Footer";
import Return from "./Elements/Return";

import { Link } from "react-router-dom";

class Search extends React.Component {
  state = {
    volumesData: []
  };

  componentDidMount() {
    const SearchURL =
      "https://www.googleapis.com/books/v1/volumes?q=search+terms" +
      this.props.match.params.keyword +
      "&maxResults=40";
    axios.get(SearchURL).then(response => {
      const volumesData = response.data.items.map(volume => {
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
        volumesData: volumesData
      });
    });
  }

  render() {
    const searchTerm = this.props.match.params.keyword;
    const volumesList = this.state.volumesData.map((volumeData, index) => {
      const { volumeInfo, imageLinks, industryIdentifiers } = volumeData;

      return (
        <>
          <div className="subcategory__book">
            <p>
              <Link to={industryIdentifiers[0].identifier}>
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
        <Link to="/categories">
          <Return />
        </Link>

        <div className="slider" />
        <h1 className="search__slider">Search</h1>
        <div className="categories__page">
          <div className="section">
            <h2 id="search__title">Search result for : "{searchTerm}"</h2>
          </div>
          <div className="subcategory">
            <div className="subcategory--wrap">
              {volumesList}
              <br />
            </div>
          </div>
          <hr />
          <div className="search__notfound">
            <div className="static__link">
              <p>Didn't find what you were looking for?</p>
              <Link to="/categories">
                <p>Go back to all categories >></p>
              </Link>
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </>
    );
  }
}

export default Search;
