import { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { tasksSelectOptions } from "../../constants";
import { Wrapper, InputRow } from "./TasksAddEditItem.style";

const TasksAddEditItem = ({ addEditTask, taskToEdit }) => {
  const [input, setInput] = useState(taskToEdit ? taskToEdit.title : "");
  const [selectedPriority, setSelectedPriority] = useState(
    taskToEdit ? taskToEdit.priority : 1,
  );

  const handleAddTask = () => {
    const title = input.trim();
    if (!title) return;

    addEditTask(
      { title, priority: +selectedPriority },
      taskToEdit ? taskToEdit._id : null,
    );
    setInput("");
  };

  return (
    <Wrapper>
      <InputRow>
        <TextField
          fullWidth
          variant="standard"
          label="What would you like to do?"
          value={input}
          onChange={(e) => setInput(e?.target?.value)}
        />
        <Button variant="contained" onClick={handleAddTask}>
          Update
        </Button>
      </InputRow>

      {/* <Picker
        selectedValue={selectedPriority}
        onValueChange={(itemValue) => setSelectedPriority(itemValue)}
      >
        {tasksSelectOptions.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker> */}

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
    </Wrapper>
  );
};

export default TasksAddEditItem;
