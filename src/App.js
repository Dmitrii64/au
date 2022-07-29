import React, { Component } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Header></Header>
        <Form></Form>
      </div>
    );
  }
}

export default App;
