import moment from "moment";
const Task = (task) => {
  return (
    <div key={task.taskID} className="max-w-sm bg-white my-3 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <p className="text-base">{task.title}</p>
        <p className="text-base">{moment(task.dateCreated).format("MMM Do YY")}</p>
      </div>
    </div>
  );
};

export default Task;
