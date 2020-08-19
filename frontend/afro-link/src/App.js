import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import NewBusiness from "./components/NewBusiness";
import MainPage from "./components/MainPage";
import Results from "./components/Results";
import Business from "./components/Business";
import SignUp from "./components/Users/SignUp";
import Login from "./components/Users/Login";
import ProfilePage from "./components/Users/ProfilePage";
import AuthProvider from "./providers/AuthContext";
import { AuthRoute, ProtectedRoute } from "./util/routesUtil";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Header />
     
      <Switch>
        <AuthRoute exact path="/signup">
          <SignUp />
        </AuthRoute>
        <AuthRoute path="/login">
          <Login />
        </AuthRoute>
        <ProtectedRoute path="/newBusiness">
          <NewBusiness />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/:userId">
          <ProfilePage />
        </ProtectedRoute>
        <Route exact path="/" component={MainPage} />
        <Route path="/categories/:id" component={Results} />
        <Route path="/businesses/:id" component={Business} />
      </Switch>
    </AuthProvider>
    </div>
  );
}

export default App;
