import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Wrapper, InputRow } from "./NotesAddEditItem.style";

const NotesAddEditItem = ({ addEditNote, noteToEdit }) => {
  const [textInput, setTextInput] = useState(
    noteToEdit ? noteToEdit.title : "",
  );
  const [descriptionInput, setDescriptionInput] = useState(
    noteToEdit ? noteToEdit.description : "",
  );

  const handleAddNote = () => {
    const title = textInput.trim();
    const description = descriptionInput.trim();
    if (!title) return;

    addEditNote({ title, description }, noteToEdit ? noteToEdit._id : null);
    setTextInput("");
    setDescriptionInput("");
  };

  return (
    <Wrapper>
      <InputRow>
        <TextField
          fullWidth
          variant="standard"
          label="Title"
          value={textInput}
          onChange={(e) => setTextInput(e?.target?.value)}
        />
        <TextField
          fullWidth
          variant="standard"
          label="Description"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e?.target?.value)}
        />
      </InputRow>
      <Button variant="contained" onClick={handleAddNote}>
        Update
      </Button>
    </Wrapper>
  );
};

export default NotesAddEditItem;
