import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/open-book.svg";

function Header() {
  const submitHandler = event => {
    event.preventDefault();
    if (event.target.searchBox.value === "") {
      alert("Searchbox is empty, please enter a search term");
    } else {
      return (window.location.href =
        "http://localhost:3000/search/" + event.target.searchBox.value);
    }
  };

  return (
    <header>
      <Link className="link" to="/">
        <img
          className="header__logo"
          src={logo}
          alt="Bookworm"
        />
      </Link>
      <ul>
        <Link className="link" to="/categories">
          <li>Categories</li>
        </Link>
        <Link className="link" to="/recommendations">
          <li>Recommendations</li>
        </Link>
        <Link className="link" to="/mylibrary">
          <li>My library</li>
        </Link>
        <li>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="searchBox"
              placeholder="Search"
              id="form__input"
            />
            <button type="submit" id="form__button" />
          </form>
        </li>
        <Link className="link" to="/">
          <li id="login">Login</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
