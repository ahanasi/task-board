import moment from "moment";
import uuid from "react-uuid";
import User from "./User";
import { useDrag } from "react-dnd";
import { Hint } from "react-autocomplete-hint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Task = ({ title, taskID, listNum, dateCreated, assignedTo, users, updateList }) => {
  const [hintData, setHintData] = useState([]);
  const [text, setText] = useState("");
  const [task, setTask] = useState({ title: title, taskID: taskID, listNum: listNum, dateCreated: dateCreated, assignedTo: assignedTo });

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: task,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const showUserList = (taskID) => {
    const formEl = document.getElementById(taskID);
    formEl.classList.toggle("-translate-x-28");
  };

  useEffect(() => {
    const getData = () => {
      const strOptions = users.map((user) => {
        return {
          id: user.id,
          label: user.name,
        };
      });
      setHintData(strOptions);
    };
    getData();
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userToAdd = users.filter((user) => {
      return user.name.toLowerCase() === text.toLowerCase();
    });
    const userAssignedTask = task.assignedTo.some((user) => user.name.toLowerCase() === text.toLowerCase());
    if (userToAdd.length === 1 && !userAssignedTask) {
      const updatedTask = {
        ...task,
        assignedTo: [...task.assignedTo, userToAdd[0]],
      };
      setTask(updatedTask);
      updateList(updatedTask);
    }
    setText("");
  };

  return (
    <div className="w-full justify-self-center max-w-sm bg-white my-3 rounded overflow-auto shadow-lg">
      <div className="text-xs text-gray-300 px-2 pt-2 flex">
        <div className="flex w-full justify-end items-center">{moment(task.dateCreated).format("MMM Do YY")}</div>
      </div>
      <div className="max-w-full">
        <div
          ref={drag}
          style={{
            opacity: isDragging ? 0.5 : 1,
            cursor: "move",
          }}
          className="p-2"
        >
          {" "}
          <p className="text-base break-all pb-4">{task.title}</p>
        </div>
        <div className="p-2 text-xs text-gray-300 pt-2 flex justify-start">
          <form id={task.taskID} onSubmit={(e) => handleSubmit(e)} className="addUserform w-full max-w-sm transition duration-500 ease-in-out -translate-x-28">
            <div className="flex items-center border-b border-teal-500 py-2">
              <Hint options={hintData} allowTabFill>
                <input
                  className="input-with-hint appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  aria-label="Full name"
                />
              </Hint>
              <button type="submit" className="sr-only mx-2 flex-shrink-0 border-transparent text-sm bg-transparent text-gray-400 hover:text-gray-500">
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button
                type="button"
                className="mx-2 flex-shrink-0 border-transparent text-sm bg-transparent text-gray-400 hover:text-gray-500"
                onClick={() => showUserList(task.taskID)}
              >
                <FontAwesomeIcon icon={faUserPlus} />
              </button>
            </div>
          </form>
          <div className="flex w-full -space-x-2 overflow-hidden justify-end">
            {task.assignedTo.map((user) => (
              <User {...user} key={uuid()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
