import { useEffect } from "react";

import { useToast } from "../../contexts/toast";
import { useNotesState } from "../../state";
import { useApiCall } from "../../hooks";
import {
  fetchNotesApi,
  addNoteApi,
  updateNoteApi,
  deleteNoteApi,
} from "../../api/notes";
import {
  addDataToArray,
  removeDataFromArray,
  updateDataInArray,
} from "../../utils";
import Notes from "./Notes";

const NotesContainer = () => {
  const { notesState, setNotesState } = useNotesState();
  const { setToastMessage } = useToast();
  const apiCall = useApiCall();

  useEffect(() => {
    const fetchNotes = async () => {
      const result = await apiCall(fetchNotesApi());
      if (result) {
        setToastMessage("Successfully fetched notes");
        setNotesState(result);
      }
    };

    if (notesState?.length === 0) {
      fetchNotes();
    }
  }, []);

  const addEditNote = async (data, id) => {
    if (id) {
      const result = await apiCall(updateNoteApi(id, data));
      if (result) {
        setToastMessage("Successfully updated the note");
        setNotesState(updateDataInArray(notesState, id, data));
      }
    } else {
      setToastMessage("Successfully create a new note");
      const { insertedId } = await apiCall(addNoteApi(data));
      setNotesState(addDataToArray(notesState, { ...data, _id: insertedId }));
    }
  };

  const removeNote = async (id) => {
    const result = await apiCall(deleteNoteApi(id));
    if (result) {
      setToastMessage("Successfully deleted the note");
      setNotesState(removeDataFromArray(notesState, id));
    }
  };

  return (
    <Notes
      notes={notesState}
      addEditNote={addEditNote}
      removeNote={removeNote}
    />
  );
};

export default NotesContainer;
