import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AddArticleForm from "./components/AddArticleForm";
import Boards from "./components/Boards";
import FormHome from "./components/FormHome";
// import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/utils/PrivateRoute";
// import Signup from "./components/Register";
import UserHome from "./components/UserHome";
import UserProfile from "./components/UserProfile";

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="nav">
          <NavBar />
        </div>
        <div className="body">
          {/* <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} /> */}
          <Route exact path ="" component={FormHome}/>
          <PrivateRoute exact path="/home" component={UserHome} />
          <PrivateRoute exact path="/add-pin" component={AddArticleForm} />
          <PrivateRoute exact path="/add-board" component={Boards} />
          <PrivateRoute exact path="/profile" component={UserProfile} />
        </div>
      </div>
    </Router>
  );
}
