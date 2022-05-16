import { useState } from "react";
import Task from "./Task";
import PropTypes from "prop-types";

const List = (propList) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(propList);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      title: input,
      taskID: list.length,
      listNum: list.id,
      dateCreated: new Date(),
    };
    addTask(task);
    setInput("");
  };

  const addTask = (task) => {
    setList((prevState) => ({ ...prevState, tasks: [...prevState.tasks, task] }));
  };

  return (
    <div key={list.id} className="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4">
      <p className="text-gray-700 font-semibold font-sans tracking-wide text-sm">{list.title}</p>
      {console.log(addTask)}
      {list.tasks.map((task) => {
        return <Task {...task} key={task.taskID} />;
      })}
      <form onSubmit={handleSubmit}>
        <label htmlFor="titke">Title</label>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

List.propTypes = {
  addTask: PropTypes.func,
};

export default List;
