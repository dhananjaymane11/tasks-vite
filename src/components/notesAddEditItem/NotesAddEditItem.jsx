import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

import { Wrapper, InputRow, ButtonWrapper } from "./NotesAddEditItem.style";

const NotesAddEditItem = ({
  noteToEdit,
  setShowModal,
  addEditNote,
  removeNote,
}) => {
  const [textInput, setTextInput] = useState(
    noteToEdit ? noteToEdit.title : "",
  );
  const [descriptionInput, setDescriptionInput] = useState(
    noteToEdit ? noteToEdit.description : "",
  );
  const [errorText, setErrorText] = useState("");

  const handleAddNote = () => {
    const title = textInput.trim();
    const description = descriptionInput.trim();
    if (!title) {
      setErrorText("Enter valid title");
      return;
    }

    addEditNote({ title, description }, noteToEdit ? noteToEdit._id : null);
    setTextInput("");
    setDescriptionInput("");
  };

  const handleTitleInputChange = (e) => {
    const value = e?.target?.value?.trim();
    setTextInput(value);
    if (!value) {
      setErrorText("Enter valid title");
    } else {
      setErrorText("");
    }
  };
  const handleDescriptionInputChange = (e) => {
    const value = e?.target?.value?.trim();
    setDescriptionInput(value);
  };

  return (
    <Wrapper>
      <InputRow>
        <TextField
          error
          fullWidth
          variant="standard"
          label="Title"
          value={textInput}
          onChange={handleTitleInputChange}
          error={Boolean(errorText)}
          helperText={errorText}
        />
      </InputRow>
      <InputRow>
        <TextField
          fullWidth
          variant="standard"
          label="Description"
          value={descriptionInput}
          onChange={handleDescriptionInputChange}
        />
      </InputRow>
      <ButtonWrapper>
        <Button variant="outlined" onClick={handleAddNote} color="success">
          <DoneIcon color="success" />
        </Button>
        {noteToEdit && (
          <Button
            variant="outlined"
            onClick={() => removeNote(noteToEdit._id)}
            color="error"
          >
            <DeleteIcon color="error" />
          </Button>
        )}
        <Button
          variant="outlined"
          onClick={() => setShowModal(false)}
          color="warning"
        >
          <CloseIcon color="warning" />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default NotesAddEditItem;
