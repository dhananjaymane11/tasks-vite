import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import {
  TopBar,
  TasksContent,
  Modal,
  TasksAddEditItem,
} from "../../components";
import { Header, Container } from "./Tasks.style";

const Tasks = ({ tasks, addEditTask, toggleTask, removeTask }) => {
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (id) => {
    const taskToEditLocal = id && tasks.find((task) => task._id === id);
    setTaskToEdit(taskToEditLocal || null);
    setShowModal(true);
  };

  const handleAddEditTask = async (data, id) => {
    await addEditTask(data, id);
    setShowModal(false);
  };

  const handleRemoveTask = async (id) => {
    await removeTask(id);
    setShowModal(false);
  };

  return (
    <Container>
      <TopBar />
      <Header>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Tasks
        </Typography>
        <Button variant="outlined" onClick={handleShowModal}>
          <AddIcon />
        </Button>
      </Header>

      <TasksContent
        tasks={tasks}
        toggleTask={toggleTask}
        handleShowModal={handleShowModal}
      />

      <Modal
        showModal={showModal}
        title={taskToEdit ? "Edit Task" : "Add Task"}
        setShowModal={setShowModal}
      >
        <TasksAddEditItem
          addEditTask={handleAddEditTask}
          taskToEdit={taskToEdit}
          removeTask={handleRemoveTask}
          setShowModal={setShowModal}
        />
      </Modal>
    </Container>
  );
};

export default Tasks;
