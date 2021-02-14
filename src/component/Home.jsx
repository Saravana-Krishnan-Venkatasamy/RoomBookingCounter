import React, { Component } from "react";
import Buttons from "./Buttons";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Buttons
          value={{
            firstButton: "completedTask",
            secondButton: "In-Completed Task",
          }}
        />
      </div>
    );
  }
}
