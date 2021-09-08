import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user, username }) => {
  return (
    <header>
      <div className="login">
        <Link to={`/user/${username}`}>
          <button className="button__user">
            <img
              src={user.avatar_url}
              alt={`${user.username} avatar`}
              width="30"
              height="30"
            />
          </button>
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
