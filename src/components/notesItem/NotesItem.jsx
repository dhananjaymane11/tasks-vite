import {
  NotesBox,
  NoteText,
  NoteDescription,
  NoteEditButton,
} from "./NotesItem.style";

const NotesItem = ({ item, handleShowModal }) => {
  return (
    <NotesBox>
      <NoteEditButton onClick={() => handleShowModal(item._id)}>
        <NoteText>{item.title}</NoteText>
        <NoteDescription>{item.description}</NoteDescription>
      </NoteEditButton>
    </NotesBox>
  );
};

export default NotesItem;
