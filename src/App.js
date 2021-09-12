import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import User from "./components/User";
import { useEffect, useState } from "react";
import { getUser } from "./api";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("jessjelly");
  const [filters, setFilters] = useState({
    topic: null,
    sort_by: null,
    order: null,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    getUser(username).then((userObj) => {
      setUser(userObj);
    });
  }, [username]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header username={username} user={user} />
        {isLoggedIn ? (
          <>
            <Nav setFilters={setFilters} />
            <Switch>
              <Route exact path="/user/:username">
                <User
                  user={user}
                  setUsername={setUsername}
                  setIsLoggedIn={setIsLoggedIn}
                />
              </Route>
              <Route exact path="/">
                <ArticlesList filters={filters} setFilters={setFilters} />
              </Route>
              <Route exact path="/articles/:topic">
                <ArticlesList filters={filters} setFilters={setFilters} />
              </Route>
              <Route exact path="/article/:article_id">
                <Article username={username} />
              </Route>
              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </>
        ) : (
          <Route exact path="/login">
            <Login
              setUser={setUser}
              setUsername={setUsername}
              setIsLoggedIn={setIsLoggedIn}
            />
          </Route>
        )}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
