import moment from "moment";

const List = (list) => {
  return (
    <div key={list.id} className="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4">
      <p className="text-gray-700 font-semibold font-sans tracking-wide text-sm">{list.title}</p>
      {list.tasks.map((task) => {
        return (
          <div key={task.id} className="max-w-sm bg-white my-3 rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <p className="text-base">{task.title}</p>
              <p className="text-base">{moment(task.dateCreated).format("MMM Do YY")}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
