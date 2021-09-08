import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ isLoggedIn, setIsLoggedIn, username, setUsername }) => {
  const [changedUsername, setChangedUsername] = useState("");
  const handleEnter = () => {
    setIsLoggedIn(true);
  };
  const handleUsername = ({ target: { value } }) => {
    setChangedUsername(value);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    setUsername(changedUsername);
    setIsLoggedIn(true);
  };
  return (
    <section className="login__page">
      <h2>Welcome back {username} </h2>
      <Link to="/">
        <button className="button__enter" onClick={handleEnter}>
          Enter
        </button>
      </Link>
      <h3>Not you? Enter your username below</h3>
      <form>
        <label>
          <input onChange={handleUsername} placeholder="enter username"></input>
        </label>
        <button value="login" className="button__login" onClick={handleLogin}>
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
