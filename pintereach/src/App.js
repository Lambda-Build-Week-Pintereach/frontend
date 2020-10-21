import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AddArticleForm from "./components/AddArticleForm";
import Boards from "./components/Boards";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/utils/PrivateRoute";
import Signup from "./components/Register";
import UserHome from "./components/UserHome";
import UserProfile from "./components/UserProfile";
import BoardFeed from "./components/BoardFeed.jsx"

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="nav">
          <NavBar />
        </div>
        <div className="body">
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={UserHome} />
          <Route exact path="/add-pin" component={AddArticleForm} />
          <Route exact path="/add-board" component={Boards} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/board-feed" component={BoardFeed} />
        </div>
      </div>
    </Router>
  );
}
