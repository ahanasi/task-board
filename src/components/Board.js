import { useEffect, useState } from "react";
import { userSeed, taskSeed } from "../seed";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import uuid from "react-uuid";
import List from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { list } from "postcss";

const Board = () => {
  const [lists, setLists] = useState(taskSeed);
  const [users, setUsers] = useState(userSeed);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(input);
    setInput("");
  };

  const updateBoard = (prevListID, listID, movedTask) => {
    if (prevListID === listID) {
      const newLists = lists.map((list) => {
        if (list.id === prevListID) {
          list.tasks = [...list.tasks, movedTask];
        }
        return list;
      });
      setLists(newLists);
    } else {
      let listToRemoveFrom = lists.find((list) => list.id === prevListID);
      let listToAddTo = lists.find((list) => list.id === listID);
      const oldTaskList = listToRemoveFrom.tasks.filter((task) => task.taskID !== movedTask.taskID);
      const newTaskList = [...listToAddTo.tasks, { ...movedTask, listNum: listID }];
      const newLists = lists.map((list) => {
        if (list.id === prevListID) {
          list.tasks = oldTaskList;
        } else if (list.id === listID) {
          list.tasks = newTaskList;
        }
        return list;
      });
      setLists(newLists);
    }
  };

  const createList = (title) => {
    if (title && title.trim() !== "") {
      const newList = {
        title: title,
        id: uuid(),
        tasks: [],
      };
      setLists((prevState) => [...prevState, newList]);
    }
  };

  const deleteList = (listID) => {
    setLists((prevState) => prevState.filter((list) => list.id !== listID));
  };

  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <button type="link" className="text-sm font-mono leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white" href="#">
              task Board
            </button>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <form onSubmit={handleSubmit} className="flex">
                  <label htmlFor="newList" className="sr-only">
                    Create List
                  </label>
                  <input
                    name="newList"
                    type="text"
                    className="rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button type="submit" className="bg-gray-200/20 mx-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex justify-center">
        <div className="flex w-screen min-h-screen p-10 space-x-4 overflow-auto text-gray-700">
          <DndProvider backend={HTML5Backend}>
            {lists.map((list) => {
              return <List {...list} deleteList={deleteList} updateBoard={updateBoard} users={users} key={uuid()} />;
            })}
          </DndProvider>
        </div>
      </div>
    </div>
  );
};

export default Board;
