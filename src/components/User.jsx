import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Error from "./Error";
const User = ({ user, setUsername, setIsLoggedIn }) => {
  const handleLogout = () => {
    setUsername("");
    setIsLoggedIn(false);
  };

  const { username } = useParams();

  if (!["jessjelly", "grumpy19"].includes(username)) {
    return <Error />;
  }

  return (
    <section className="user__page">
      <h2>Hey, {user.username}</h2>
      <div className="user__avatar">
        <img
          src={user.avatar_url}
          width="200"
          height="200"
          alt="user profile"
        ></img>
      </div>
      <div className="user__logout">
        <Link to="/login">
          <button className="user__button-logout" onClick={handleLogout}>
            Logout
          </button>
        </Link>
      </div>
    </section>
  );
};

export default User;
