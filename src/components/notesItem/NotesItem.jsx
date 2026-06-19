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
          {item.title}
        </NoteEditLink>
      </NoteText>
      <NoteDescription>
        <NoteEditLink onClick={() => handleShowModal(item._id)}>
          {item.description}
        </NoteEditLink>
      </NoteDescription>
    </NotesBox>
  );
};

export default NotesItem;
