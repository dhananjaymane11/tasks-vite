import Typography from "@mui/material/Typography";

import {
  NotesBox,
  NoteText,
  NoteDescription,
  NoteEditLink,
} from "./NotesItem.style";

const NotesItem = ({ item, handleShowModal }) => {
  return (
    <NotesBox>
      <NoteText>
        <NoteEditLink onClick={() => handleShowModal(item._id)}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            {item.title}
          </Typography>
        </NoteEditLink>
      </NoteText>
      <NoteDescription>
        <NoteEditLink onClick={() => handleShowModal(item._id)}>
          <Typography variant="body1" sx={{ fontSize: "13px" }}>
            {item.description}
          </Typography>
        </NoteEditLink>
      </NoteDescription>
    </NotesBox>
  );
};

export default NotesItem;
