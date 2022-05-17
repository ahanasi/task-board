import moment from "moment";
import uuid from "react-uuid";
import User from "./User";

const Task = (task) => {
  return (
    <div className="w-full justify-self-center max-w-sm bg-white my-3 rounded overflow-auto shadow-lg">
      <div class="text-xs text-gray-300 px-2 pt-2 flex">
        <div className="flex w-full justify-end items-center">{moment(task.dateCreated).format("MMM Do YY")}</div>
      </div>
      <div className="px-3 pt-4 pb-2 max-w-full">
        <p className="text-base break-all pb-4">{task.title}</p>
        <div className="text-xs text-gray-300 pt-2 flex justify-end">
          <div className="flex -space-x-2 overflow-hidden">
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
