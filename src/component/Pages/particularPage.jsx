import React, { Component } from "react";

export default class particularPage extends Component {
  render() {
    console.log(this.props)
    let title = this.props.match.params.title;
    return (
      <div>
        <h1
          style={{
            border: "2px solid black",
            width: "50%",
            borderRadius: "15px",
            margin: "15%",
            backgroundColor: "rgb(34 202 255 / 35%)",
            textAlign: "center",
            padding: "30px",
          }}
        >
          {title}
        </h1>
      </div>
    );
  }
}
