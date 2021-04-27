import React, { useState } from "react";
import EditTask from "../modals/EditTask";

const TableContent = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <>
      <tr>
        <td>{taskObj.Name}</td>
        <td>{taskObj.Description}</td>
        <button
          className="btn btn-primary mr-2"
          style={{ cursor: "pointer" }}
          onClick={() => setModal(true)}
        >
          Update
        </button>
        <button
          className="btn btn-secondary"
          style={{ cursor: "pointer" }}
          onClick={handleDelete}
        >
          Delete
        </button>
      </tr>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </>
  );
};

export default TableContent;
