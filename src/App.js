import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import User from "./components/User";
import { useEffect, useState } from "react";
import { getUser } from "./api";

function App() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("grumpy19");
  const [filters, setFilters] = useState({
    topic: null,
    sort_by: null,
    order: null,
  });

  useEffect(() => {
    getUser(username).then((user) => {
      setUser(user);
    });
  }, [username]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header username={username} />
        <Nav filters={filters} setFilters={setFilters} />
        <Switch>
          <Route exact path="/user/:username">
            <User user={user} />
          </Route>
          <Route exact path="/">
            <ArticlesList
              user={user}
              filters={filters}
              setFilters={setFilters}
            />
          </Route>
          <Route exact path="/articles/:topic">
            <ArticlesList
              user={user}
              filters={filters}
              setFilters={setFilters}
            />
          </Route>
          <Route exact path="/article/:article_id">
            <Article />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
