import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EntrepreneurshipURL =
  "https://www.googleapis.com/books/v1/volumes?q=entrepreneurship+subject:entrepreneurship&maxResults=40";

class Entrepreneurship extends React.Component {
  state = {
    volumesData: []
  };

  componentDidMount() {
    axios.get(EntrepreneurshipURL).then(response => {
      const volumesData = response.data.items.map(volume => {
        return {
          id: volume.id,
          etag: volume.etag,
          volumeInfo: volume.volumeInfo,
          imageLinks: volume.volumeInfo.imageLinks
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
          <div className="subcategory__book" key={index}>
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
          <Link to="/categories/entrepreneurship">
            <h3>Entrepreneurship</h3>
          </Link>
          <Link to="/categories/entrepreneurship">
            <h4> See all Entrepreneurship ></h4>
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

export default Entrepreneurship;
