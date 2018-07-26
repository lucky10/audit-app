import React, { Component } from "react";
import "./App.css";

import UserForm from "./Components/UserForm/UserForm";

class App extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          backgroundColor: "#F7F7F7",
        }}
      >
        <UserForm />
      </div>
    );
  }
}

export default App;
