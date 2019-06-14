import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FictionURL =
  "https://www.googleapis.com/books/v1/volumes?q=Fiction+subject:fiction&maxResults=40";

class Fiction extends React.Component {
  state = {
    volumesData: []
  };

  componentDidMount() {
    axios.get(FictionURL).then(response => {
      const volumesData = response.data.items.map(volume => {
        return {
          id: volume.id,
          etag: volume.etag,
          volumeInfo: volume.volumeInfo,
          imageLinks: volume.volumeInfo.imageLinks,
          industryIdentifiers: volume.volumeInfo.industryIdentifiers
        };
      });

      this.setState({
        volumesData: volumesData
      });
    });
  }

  render() {
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
        <div className="section">
          <Link to="/categories/fiction">
            <h3>Fiction</h3>
          </Link>
          <Link to="/categories/fiction">
            <h4> See all Fiction ></h4>
          </Link>
        </div>
        <div className="subcategory">
          {volumesList}
          <br />
        </div>
        <Link to="categories/fiction" />
      </>
    );
  }
}

export default Fiction;
