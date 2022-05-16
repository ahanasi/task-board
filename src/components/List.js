import { useEffect, useState } from "react";
import Task from "./Task";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPlus } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";

const List = ({ title, id, tasks, deleteList }) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState({ title: title, id: id, tasks: tasks });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input && input.trim() !== "") {
      const task = {
        title: input,
        taskID: list.length,
        listNum: list.id,
        dateCreated: new Date(),
      };
      addTask(task);
    }
    setInput("");
  };

  const addTask = (task) => {
    setList((prevState) => ({ ...prevState, tasks: [...prevState.tasks, task] }));
  };

  return (
    <div className="flex flex-col flex-shrink-0 w-1/4 bg-gray-100 rounded-lg px-3 py-3 rounded">
      <div className="list-header flex justify-between	">
        <p className="text-gray-700 font-semibold font-sans tracking-wide text-lg my-3">{list.title}</p>
        <div className="dropdown inline-block relative">
          <button type="button" className="mx-2 bg-transparent text-gray-400 hover:text-gray-500">
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li className="">
              <a className="text-sm rounded-t bg-white hover:bg-gray-400 hover:text-white py-2 px-4 block whitespace-no-wrap" href="#">
                Rename List
              </a>
            </li>
            <li className="">
              <a className="text-sm bg-white hover:bg-gray-400 hover:text-white py-2 px-4 block whitespace-no-wrap" onClick={() => deleteList(list.id)}>
                Delete List
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="task-wrapper flex flex-col items-center">
        {list.tasks.map((task) => {
          return <Task {...task} key={uuid()} />;
        })}
      </div>

      <form onSubmit={handleSubmit} className="flex w-full">
        <label htmlFor="title" className="sr-only">
          Task Title
        </label>
        <input
          name="title"
          type="text"
          className="rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="mx-2 bg-transparent text-gray-400 hover:text-gray-500">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </div>
  );
};

List.propTypes = {
  addTask: PropTypes.func,
};

export default List;
