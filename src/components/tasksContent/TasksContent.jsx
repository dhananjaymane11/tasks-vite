import Typography from "@mui/material/Typography";

import TasksItem from "../tasksItem/TasksItem";
import { tasksSelectOptions, textColors } from "../../constants";
import { BoxWrapper, TasksBox } from "./TasksContent.style";

const tasksContent = ({ tasks, toggleTask, handleShowModal }) => {
  return (
    <BoxWrapper>
      {tasksSelectOptions.map((option) => (
        <TasksBox key={option.value}>
          <Typography
            variant="subtitle1"
            gutterBottom
            color={textColors[option.value]}
            noWrap
            sx={{ fontSize: "15px" }}
          >
            {option.label}
          </Typography>

          {tasks
            .filter((task) => (task.priority === option.value ? task : null))
            .map((item) => (
              <TasksItem
                key={item._id}
                taskValue={option.value}
                item={item}
                toggleTask={toggleTask}
                handleShowModal={handleShowModal}
              />
            ))}
        </TasksBox>
      ))}
    </BoxWrapper>
  );
};

export default tasksContent;
