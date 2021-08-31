import React from "react";
import { Link } from "react-router-dom";

const Header = ({ username }) => {
  return (
    <header>
      <div className="login">
        <Link to={`/user/${username}`}>
          <button className="button__user">grumpy19</button>
        </Link>
      </div>
      <div className="title">
        <Link className="title" to="/">
          <h1>NC-News</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
