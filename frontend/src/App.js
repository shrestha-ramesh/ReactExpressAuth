import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/loginpage.page.jsx";
import FirstPage from "./pages/firstpage.page.jsx";
import SecondPage from "./pages/secondpage.page.jsx";
import Header from "./components/header/header.component";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Header/><FirstPage/></Route>
        <Route exact path="/second"><Header/><SecondPage/></Route>
        <Route exact path="/login"><LoginPage/></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
