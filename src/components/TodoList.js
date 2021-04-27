import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import TableContent from "./TableContent";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };

  return (
    <>
      <div className="container text-right">
        <h3 className="text-center">Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>

      <div className="container mt-2">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th style={{ width: "30%" }}>Task name</th>
              <th>Description</th>
              <th style={{ width: "20%" }}></th>
            </tr>
          </thead>

          <tbody>
            {taskList &&
              taskList.map((obj, index) => (
                <TableContent
                  taskObj={obj}
                  index={index}
                  deleteTask={deleteTask}
                  updateListArray={updateListArray}
                />
              ))}
          </tbody>
        </table>
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
