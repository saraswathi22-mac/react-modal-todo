import React, { useState } from "react";
import EditTask from "../modals/EditTask";
import DeleteTask from "../modals/DeleteTask";

const TableContent = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [updates, setUpdates] = useState(false);
  const [deletes, setDeletes] = useState(false);

  const toggle = () => {
    setUpdates(!updates);
    setDeletes(false);
  };

  const delToggle = () => {
    setDeletes(!deletes);
    setUpdates(false);
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
        <span>
          <button
            className="btn btn-primary"
            onClick={() => setUpdates(true)}
            style={{ margin: 5 }}
          >
            Update
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => setDeletes(true)}
          >
            Delete
          </button>
        </span>
      </tr>

      <EditTask
        modal={updates}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />

      <DeleteTask
        modal={deletes}
        toggle={delToggle}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default TableContent;
