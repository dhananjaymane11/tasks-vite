import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  NotesBox,
  TextWrapper,
  NoteText,
  NoteDescription,
  NoteEditButton,
} from "./NotesItem.style";

const NotesItem = ({ item, removeNote, handleShowModal }) => {
  return (
    <NotesBox>
      <TextWrapper>
        <NoteEditButton onClick={() => handleShowModal(item._id)}>
          <NoteText>{item.title}</NoteText>
          <NoteDescription>{item.description}</NoteDescription>
        </NoteEditButton>
      </TextWrapper>
      <IconButton onClick={() => removeNote(item._id)}>
        <DeleteIcon color="error" />
      </IconButton>
    </NotesBox>
  );
};

export default NotesItem;
