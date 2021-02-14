import React, { Component } from "react";
import TaskList from "./TaskList";
import apiFetch from "../utlis/fetchApi";

export default class IncompletedTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskValue: [],
      loading: true,
    };
  }
  componentDidMount = async () => {
    let apivalue = await apiFetch();
    this.setState({ loading: false, taskValue: apivalue.data });
  };
  render() {
    const taskValue = this.state.taskValue;
    let inCompletedTask = [];
    taskValue.filter((task) =>
      task.completed === true ? "" : inCompletedTask.push(task)
    );
    return (
      <div>
        <TaskList
          value={{
            loading: this.state.loading,
            completedTask: inCompletedTask,
          }}
        ></TaskList>
      </div>
    );
  }
}
