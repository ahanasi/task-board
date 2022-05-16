import moment from "moment";

const Task = (task) => {
  return (
    <div className="w-full justify-self-center max-w-sm bg-white my-3 rounded overflow-auto shadow-lg">
      <div className="px-6 pt-4 pb-2 max-w-full">
        <p className="text-base break-all pb-4">{task.title}</p>
        <div className="text-xs text-gray-300 px-6 border-t border-gray-300 text-gray-600">{moment(task.dateCreated).format("MMM Do YY")}</div>
      </div>
    </div>
  );
};

export default Task;
