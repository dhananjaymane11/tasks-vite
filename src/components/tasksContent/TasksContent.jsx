import Typography from "@mui/material/Typography";
import TasksItem from "../tasksItem/TasksItem";
import { tasksSelectOptions } from "../../constants";

import { BoxWrapper, TasksBox } from "./TasksContent.style";

const tasksContent = ({ tasks, toggleTask, removeTask, handleShowModal }) => {
  return (
    <BoxWrapper>
      {tasksSelectOptions.map((option) => (
        <TasksBox key={option.value}>
          <Typography variant="subtitle1" gutterBottom>
            {option.label}
          </Typography>

          {tasks
            .filter((task) => (task.priority === option.value ? task : null))
            .map((item) => (
              <TasksItem
                key={item._id}
                item={item}
                toggleTask={toggleTask}
                removeTask={removeTask}
                handleShowModal={handleShowModal}
              />
            ))}
        </TasksBox>
      ))}
    </BoxWrapper>
  );
};

export default tasksContent;
