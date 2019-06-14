import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BusinessURL =
  "https://www.googleapis.com/books/v1/volumes?q=search+Business&maxResults=40";

class Business extends React.Component {
  state = {
    volumesData: []
  };

  componentDidMount() {
    axios.get(BusinessURL).then(response => {
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
      const { volumeInfo, imageLinks } = volumeData;

      return (
        <>
          <div className="subcategory__book">
            <p>
              <img src={imageLinks.thumbnail} alt={volumeInfo.title} />
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
          <Link to="/categories/business">
            <h3>Business</h3>
          </Link>
          <Link to="/categories/business">
            <h4> See all Business ></h4>
          </Link>
        </div>
        <div className="subcategory">
          {volumesList}
          <div />
        </div>
      </>
    );
  }
}

export default Business;
