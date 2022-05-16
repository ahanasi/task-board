import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import moment from "moment";
import List from "./List";
import { list } from "postcss";

const Board = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const testCols = [
      {
        title: "To-Do",
        id: 0,
        tasks: [
          {
            title: "test 1",
            taskID: 0,
            listNum: 0,
          },
          {
            title: "dsfadfadsf",
            taskID: 1,
            listNum: 0,
          },
        ],
      },
      {
        title: "Doing",
        id: 1,
        tasks: [
          {
            title: "dfdfgfdas",
            taskID: 0,
            listNum: 1,
          },
          {
            title: "dfdfdafdadsf",
            taskID: 1,
            listNum: 1,
          },
        ],
      },
      {
        title: "Done",
        id: 2,
        tasks: [
          {
            title: "dfdf",
            taskID: 0,
            listNum: 2,
          },
          {
            title: "dfdsfdasfad",
            taskID: 1,
            listNum: 2,
          },
        ],
      },
    ];
    setLists(testCols);
  }, []);

  useEffect(() => {}, [lists]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex justify-center">
        <div className="min-h-screen flex overflow-x-scroll py-12">
          {lists.map((list) => {
            return <List {...list} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
