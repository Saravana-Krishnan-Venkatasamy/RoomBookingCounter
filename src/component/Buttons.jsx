import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Buttons extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <br />
        <Link to="/completedTask">
          <button>{this.props.value.firstButton}</button>
        </Link>
        <br />
        <br />
        <Link to="/inCompletedTask">
          <button>{this.props.value.secondButton}</button>
        </Link>
      </div>
    );
  }
}
