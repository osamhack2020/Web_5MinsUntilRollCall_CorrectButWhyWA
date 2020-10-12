import React from "react";
import "./App.css";
import ButtonPage from "./button_page";
import LoginPage from "./login_page";
import MainPage from "./main_page";
import Loading from "./Component/Loading.js";
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
