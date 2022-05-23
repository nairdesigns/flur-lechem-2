import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import ContactPage from "./pages/contact";
import PostsPage from "./pages/posts";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/posts" component={PostsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
