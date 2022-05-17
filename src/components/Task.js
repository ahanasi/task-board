import moment from "moment";
import uuid from "react-uuid";
import User from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Task = (task) => {
  const showUserList = (taskID) => {
    debugger;
    const formEl = document.getElementById(taskID);
    formEl.classList.toggle("-translate-x-28");
  };

  return (
    <div className="w-full justify-self-center max-w-sm bg-white my-3 rounded overflow-auto shadow-lg">
      <div className="text-xs text-gray-300 px-2 pt-2 flex">
        <div className="flex w-full justify-end items-center">{moment(task.dateCreated).format("MMM Do YY")}</div>
      </div>
      <div className="px-3 pt-4 pb-2 max-w-full">
        <p className="text-base break-all pb-4">{task.title}</p>
        <div className="text-xs text-gray-300 pt-2 flex justify-start">
          <form id={task.taskID} className="addUserform w-full max-w-sm transition duration-500 ease-in-out -translate-x-28">
            <div className="flex items-center border-b border-teal-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Jane Doe"
                aria-label="Full name"
              />
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
