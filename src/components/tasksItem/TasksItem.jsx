import Checkbox from "@mui/material/Checkbox";

import { textColors, taskColors } from "../../constants";
import {
  ItemContainer,
  TextWrapper,
  TaskText,
  TaskEditButton,
} from "./TasksItem.style";

const TasksItem = ({ taskValue, item, toggleTask, handleShowModal }) => {
  return (
    <ItemContainer>
      <TextWrapper>
        <Checkbox
          color={textColors[taskValue]}
          checked={item.isDone}
          onChange={() => toggleTask(item._id)}
          sx={{ color: taskColors[taskValue] }}
        />
        <TaskEditButton onClick={() => handleShowModal(item._id)}>
          <TaskText done={item?.isDone?.toString()}>{item.title}</TaskText>
        </TaskEditButton>
      </TextWrapper>
    </ItemContainer>
  );
};

export default TasksItem;
