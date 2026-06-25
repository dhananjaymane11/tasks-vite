import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

import { textColors, taskColors } from "../../constants";
import { ItemContainer, TaskEditButton } from "./TasksItem.style";

const TasksItem = ({ taskValue, item, toggleTask, handleShowModal }) => {
  return (
    <ItemContainer>
      <Checkbox
        color={textColors[taskValue]}
        checked={item.isDone}
        onChange={() => toggleTask(item._id)}
        sx={{ color: taskColors[taskValue] }}
      />
      <TaskEditButton onClick={() => handleShowModal(item._id)}>
        <Typography
          variant="body1"
          noWrap
          sx={[
            item?.isDone && {
              textDecoration: "line-through",
              color: "#ccc",
            },
          ]}
        >
          {item.title}
        </Typography>
      </TaskEditButton>
    </ItemContainer>
  );
};

export default TasksItem;
