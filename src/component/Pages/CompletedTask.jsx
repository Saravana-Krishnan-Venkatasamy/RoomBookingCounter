import React, { Component } from "react";
import TaskList from "./TaskList";
import ApiFetch from "../utlis/fetchApi";

export default class CompletedTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskValue: [],
      loading: true,
    };
  }
  componentDidMount = async () => {
    let apiValue = await ApiFetch();
    this.setState({ loading: false, taskValue: apiValue.data });
  };
  render() {
    const taskValue = this.state.taskValue;
    let completedTask = [];

    taskValue.filter((task) =>
      task.completed === true ? completedTask.push(task) : ""
    );
    console.log(completedTask);
    return (
      <div>
        <TaskList
          value={{ loading: this.state.loading, completedTask: completedTask }}
        />
      </div>
    );
  }
}
