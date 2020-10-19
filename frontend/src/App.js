import React from "react";
import "./App.css";
import ButtonPage from "./components/button_page";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import Loading from "./components/Loading";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/button" component={ButtonPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/loading" component={Loading} />
      </BrowserRouter>
    </div>
  );
}

export default App;
