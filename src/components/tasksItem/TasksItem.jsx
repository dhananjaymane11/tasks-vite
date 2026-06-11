import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  ItemContainer,
  TextWrapper,
  TaskText,
  TaskEditButton,
} from "./TasksItem.style";

const TasksItem = ({ item, toggleTask, removeTask, handleShowModal }) => {
  return (
    <ItemContainer>
      <TextWrapper>
        <Checkbox checked={item.isDone} onChange={() => toggleTask(item._id)} />
        <TaskEditButton onClick={() => handleShowModal(item._id)}>
          <TaskText done={item?.isDone?.toString()}>
            {item.title} - {item.priority}
          </TaskText>
        </TaskEditButton>
      </TextWrapper>
      <IconButton onClick={() => removeTask(item._id)}>
        <DeleteIcon color="error" />
      </IconButton>
    </ItemContainer>
  );
};

export default TasksItem;
