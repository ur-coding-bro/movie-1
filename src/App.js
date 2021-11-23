import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Default from "./pages/Default";
import SingleMovie from "./pages/SingleMovie";
import Context from "./context";
import Register from "./pages/register";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Dashboard} />
          <Route path="/Movie/:id" component={SingleMovie} />
          <Route component={Default} />
        </Switch>
      </BrowserRouter>
    </Context>
  );
}

export default App;
