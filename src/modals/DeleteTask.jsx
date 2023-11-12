import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DeleteTask = ({ modal, toggle, handleDelete }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTaskName("");
    setDescription("");
  }, []);

  const deleteIt = (e) => {
    e.preventDefault();
    handleDelete();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Delete Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Do you want to delete the task?</label>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={deleteIt}>
          Delete
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteTask;
