import { useEffect, useState } from "react";
import faker from "@faker-js/faker";
import uuid from "react-uuid";
import List from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Board = () => {
  const [lists, setLists] = useState([]);
  const [users, setUsers] = useState([
    { name: faker.name.firstName(), url: faker.image.avatar() },
    { name: faker.name.firstName(), url: faker.image.avatar() },
    { name: faker.name.firstName(), url: faker.image.avatar() },
    { name: faker.name.firstName(), url: faker.image.avatar() },
    { name: faker.name.firstName(), url: faker.image.avatar() },
    { name: faker.name.firstName(), url: faker.image.avatar() },
    { name: faker.name.firstName(), url: faker.image.avatar() },
    { name: faker.name.firstName(), url: faker.image.avatar() },
    { name: faker.name.firstName(), url: faker.image.avatar() },
    { name: faker.name.firstName(), url: faker.image.avatar() },
    { name: faker.name.firstName(), url: faker.image.avatar() },
    { name: faker.name.firstName(), url: faker.image.avatar() },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(input);
    setInput("");
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

  useEffect(() => {
    const testCols = [
      {
        title: "To-Do",
        id: "dfdf",
        tasks: [
          {
            title: "test 1",
            taskID: uuid(),
            listNum: "dfdf",
            assignedTo: faker.helpers.arrayElements(users, 2),
          },
          {
            title: "dsfadfadsf",
            taskID: uuid(),
            listNum: "dfdf",
            assignedTo: faker.helpers.arrayElements(users, 4),
          },
        ],
      },
      {
        title: "Doing",
        id: "37734",
        tasks: [
          {
            title: "dfdfgfdas",
            taskID: uuid(),
            listNum: "37734",
            assignedTo: faker.helpers.arrayElements(users, 3),
          },
          {
            title: "dfdfdafdadsf",
            taskID: 1,
            listNum: "37734",
            assignedTo: faker.helpers.arrayElements(users, 5),
          },
        ],
      },
      {
        title: "Done",
        id: "324234",
        tasks: [
          {
            title: "dfdf",
            taskID: uuid(),
            listNum: "324234",
            assignedTo: [],
          },
          {
            title: "dfdsfdasfad",
            taskID: uuid(),
            listNum: "324234",
            assignedTo: faker.helpers.arrayElements(users, 1),
          },
        ],
      },
    ];
    setLists(testCols);
  }, []);

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
          {lists.map((list) => {
            return <List {...list} deleteList={deleteList} key={uuid()} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
