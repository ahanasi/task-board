import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import moment from "moment";
import List from "./List";

const Board = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const testCols = [
      {
        title: "To-Do",
        id: 0,
        tasks: [
          {
            title: faker.lorem.words(),
            taskID: 0,
            listNum: 0,
            dateCreated: faker.date.soon(),
          },
          {
            title: faker.lorem.words(),
            taskID: 1,
            listNum: 0,
            dateCreated: faker.date.soon(),
          },
        ],
      },
      {
        title: "Doing",
        id: 1,
        tasks: [
          {
            title: faker.lorem.words(),
            taskID: 0,
            listNum: 1,
            dateCreated: faker.date.soon(),
          },
          {
            title: faker.lorem.words(),
            taskID: 1,
            listNum: 1,
            dateCreated: faker.date.soon(),
          },
        ],
      },
      {
        title: "Done",
        id: 2,
        tasks: [
          {
            title: faker.lorem.words(),
            taskID: 0,
            listNum: 2,
            dateCreated: faker.date.soon(),
          },
          {
            title: faker.lorem.words(),
            taskID: 1,
            listNum: 2,
            dateCreated: faker.date.soon(),
          },
        ],
      },
    ];
    setLists(testCols);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex justify-center">
        <div className="min-h-screen flex overflow-x-scroll py-12">
          {lists.map((list) => {
            return (
              <List {...list} />
              //   <div key={list.id} className="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4">
              //     <p className="text-gray-700 font-semibold font-sans tracking-wide text-sm">{list.title}</p>
              //     {list.tasks.map((task) => {
              //       return (
              //         <div key={task.id} className="max-w-sm bg-white my-3 rounded overflow-hidden shadow-lg">
              //           <div className="px-6 py-4">
              //             <p className="text-base">{task.title}</p>
              //             <p className="text-base">{moment(task.dateCreated).format("MMM Do YY")}</p>
              //           </div>
              //         </div>
              //       );
              //     })}
              //   </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
