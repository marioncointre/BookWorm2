import React from "react";
import axios from "axios";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer";
import Return from "../Elements/Return";

import { Link } from "react-router-dom";

class Cat extends React.Component {
  state = {
    volumesData: []
  };

  componentDidMount() {
    console.log(this.props);
    const CatURL =
      "https://www.googleapis.com/books/v1/volumes?q=subject:" +
      this.props.match.params.cat +
      "&maxResults=40";
    axios.get(CatURL).then(response => {
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
    const Category = this.props.match.params.cat;
    const volumesList = this.state.volumesData.map((volumeData, index) => {
      const { volumeInfo, imageLinks, industryIdentifiers } = volumeData;

      const bookPath = "/categories/" + industryIdentifiers[0].identifier;

      return (
        <>
          <div className="subcategory__book">
            <p>
              <Link to={bookPath}>
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
        <div className="slider">
          <div className="layer" />
          <h1 className="slider__title">{Category}</h1>
        </div>
        <div className="categories__page">
          <div className="subcategory">
            <div className="subcategory--wrap">
              {volumesList}
              <br />
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </>
    );
  }
}

export default Cat;
