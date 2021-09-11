import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setIsLoggedIn, setUsername, setUser }) => {
  const handleJessLogin = () => {
    setUsername("jessjelly");
    setUser({
      username: "jessjelly",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
      name: "Jess Jelly",
    });
    setIsLoggedIn(true);
  };

  const handleGrumpyLogin = () => {
    setUsername("grumpy19");
    setUser({
      username: "grumpy19",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013",
      name: "Paul Grump",
    });
    setIsLoggedIn(true);
  };

  return (
    <section className="login__page">
      <h3>Choose User</h3>
      <Link to="/">
        <img
          src="https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
          alt="login as jessjelly"
          width="200"
          height="200"
          onClick={handleJessLogin}
        />
        <button
          value="login"
          className="button__choose-user"
          onClick={handleJessLogin}
        >
          jessjelly
        </button>
      </Link>
      <Link to="/">
        <img
          src="https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
          alt="login as grumpy19"
          width="200"
          height="200"
          onClick={handleGrumpyLogin}
        />
        <button
          value="login"
          className="button__choose-user"
          onClick={handleGrumpyLogin}
        >
          grumpy19
        </button>
      </Link>
    </section>
  );
};

export default Login;
