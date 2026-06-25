import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Masonry from "@mui/lab/Masonry";

import { TopBar, NotesItem, NotesAddEditItem, Modal } from "../../components";
import { Header, Container, NotesContent } from "./Notes.style";

export default function Notes({ notes, addEditNote, removeNote }) {
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (id) => {
    const noteToEditLocal = id && notes.find((note) => note._id === id);
    setNoteToEdit(noteToEditLocal || null);
    setShowModal(true);
  };

  const handleAddEditNote = async (data, id) => {
    await addEditNote(data, id);
    setShowModal(false);
  };

  const handleRemoveNote = async (id) => {
    await removeNote(id);
    setShowModal(false);
  };

  return (
    <Container>
      <TopBar />
      <Header>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Notes
        </Typography>
        <Button variant="outlined" onClick={handleShowModal}>
          <AddIcon />
        </Button>
      </Header>

      <NotesContent>
        <Masonry columns={2} spacing={1}>
          {notes.map((item) => (
            <NotesItem
              key={item._id}
              item={item}
              addEditNote={addEditNote}
              handleShowModal={handleShowModal}
            />
          ))}
        </Masonry>
      </NotesContent>

      <Modal
        showModal={showModal}
        title={noteToEdit ? "Edit Note" : "Add Note"}
        setShowModal={setShowModal}
      >
        <NotesAddEditItem
          addEditNote={handleAddEditNote}
          noteToEdit={noteToEdit}
          removeNote={handleRemoveNote}
          setShowModal={setShowModal}
        />
      </Modal>
    </Container>
  );
}
