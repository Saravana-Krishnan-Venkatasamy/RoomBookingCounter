import React from "react";
import { connect } from "react-redux";
import {
  roomIncrement,
  roomDecrement,
  adultIncrement,
  adultDecrement,
  childIncrement,
  childDecrement,
} from "../../redux/action";
import CounterDisplaypage from "./CounterDisplaypage";
function CounterPage({
  roomCount,
  adultCount,
  childCount,
  adultIncrement,
  adultDecrement,
  childIncrement,
  childDecrement,
  roomIncrement,
  roomDecrement,
}) {
  return (
    <div>
      <button onClick={() => roomIncrement(roomCount, adultCount, childCount)}>
        Room Increment
      </button>
      <br />
      <br />
      <button onClick={() => roomDecrement(roomCount, adultCount, childCount)}>
        Romm Decrement
      </button>
      <br />
      <br />
      <button onClick={() => adultIncrement(roomCount, adultCount, childCount)}>
        Adult Increment
      </button>
      <br />
      <br />
      <button onClick={() => adultDecrement(roomCount, adultCount, childCount)}>
        Adult Decrement
      </button>
      <br />
      <br />
      <button onClick={() => childIncrement(roomCount, adultCount, childCount)}>
        Child Increment
      </button>
      <br />
      <br />
      <button onClick={() => childDecrement(roomCount, adultCount, childCount)}>
        Child Decrement
      </button>
      <CounterDisplaypage />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    roomCount: state.roomCount,
    adultCount: state.adultCount,
    childCount: state.childCount,
  };
};
const mapDispatchToProps = {
  roomIncrement,
  roomDecrement,
  adultIncrement,
  adultDecrement,
  childIncrement,
  childDecrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
