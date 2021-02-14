import React, { Component } from "react";
import { connect } from "react-redux";
class CounterDisplaypage extends Component {
  render() {
    return (
      <div
        style={{
          border: "2px solid black",
          width: "230px",
          margin: "10px",
          backgroundColor: "#ffca22",
          color: "red",
        }}
      >
        <ul>
          <li>RoomCount -- {this.props.roomCount}</li>
          <li>AdultCount -- {this.props.adultCount}</li>
          <li>ChildCount-- {this.props.childCount}</li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    roomCount: state.roomCount,
    adultCount: state.adultCount,
    childCount: state.childCount,
  };
};
export default connect(mapStateToProps)(CounterDisplaypage);
