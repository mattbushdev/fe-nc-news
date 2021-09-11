import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user, username }) => {
  return (
    <header>
      <div className="login">
        {username ? (
          <>
            <p>{`${username}`}</p>
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
          </>
        ) : (
          <Link to="/login">
            <button className="button__login">Login</button>
          </Link>
        )}
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
