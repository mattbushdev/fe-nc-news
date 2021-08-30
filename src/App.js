import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/ArticlesList";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/">
            <ArticlesList />
          </Route>
          <Route exact path="/articles/:topic">
            <ArticlesList />
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
