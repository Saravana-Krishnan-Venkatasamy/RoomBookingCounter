import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./TaskList.css";
export default class Task extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.value.loading ? (
            "Loading... Please wait"
          ) : (
            <ul>
              {this.props.value.completedTask.map((value) => (
                <li key={value.id} id="list">
                  <Link to={"/particularTask/" + value.title}>
                    <button className="taskbutton">
                      {value.title} {"----><-----"} {value.id}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
