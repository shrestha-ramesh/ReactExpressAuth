import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/loginpage.page.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <LoginPage/>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
