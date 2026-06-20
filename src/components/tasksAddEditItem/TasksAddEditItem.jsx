import { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

import { tasksSelectOptions } from "../../constants";
import { Wrapper, InputRow, ButtonWrapper } from "./TasksAddEditItem.style";

const TasksAddEditItem = ({
  addEditTask,
  taskToEdit,
  removeTask,
  setShowModal,
}) => {
  const [input, setInput] = useState(taskToEdit ? taskToEdit.title : "");
  const [selectedPriority, setSelectedPriority] = useState(
    taskToEdit ? taskToEdit.priority : 1,
  );
  const [errorText, setErrorText] = useState("");

  const handleInputChange = (e) => {
    const value = e?.target?.value;
    setInput(value);
    if (!value) {
      setErrorText("Enter valid task");
    } else {
      setErrorText("");
    }
  };

  const handleAddTask = () => {
    const title = input.trim();
    if (!title) {
      setErrorText("Enter valid task");
      return;
    }

    addEditTask(
      { title, priority: +selectedPriority },
      taskToEdit ? taskToEdit._id : null,
    );
    setErrorText("");
    setInput("");
  };

  return (
    <Wrapper>
      <InputRow>
        <TextField
          error
          fullWidth
          variant="standard"
          label="What would you like to do?"
          value={input}
          onChange={handleInputChange}
          error={Boolean(errorText)}
          helperText={errorText}
        />
      </InputRow>

      <InputRow>
        <Select
          variant="standard"
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(e?.target?.value)}
        >
          {tasksSelectOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </InputRow>
      <ButtonWrapper>
        <Button variant="outlined" onClick={handleAddTask} color="success">
          <DoneIcon color="success" />
        </Button>
        {taskToEdit && (
          <Button
            variant="outlined"
            onClick={() => removeTask(taskToEdit._id)}
            color="error"
          >
            <DeleteIcon color="error" />
          </Button>
        )}
        <Button
          variant="outlined"
          onClick={() => setShowModal(false)}
          color="warning"
        >
          <CloseIcon color="warning" />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default TasksAddEditItem;
