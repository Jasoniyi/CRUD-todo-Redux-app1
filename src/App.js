import React, { Component } from "react";
import { MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import CreateTodo from "./components/CreateTodo";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MDBContainer style={{ marginTop: "80px" }}>
          <MDBRow>
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <CreateTodo />
            </div>
            <Table />
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
