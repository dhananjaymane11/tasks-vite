import { useEffect } from "react";

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
  const apiCall = useApiCall();

  useEffect(() => {
    const fetchNotes = async () => {
      const result = await apiCall(fetchNotesApi());
      if (result) {
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
        setNotesState(updateDataInArray(notesState, id, data));
      }
    } else {
      const { insertedId } = await apiCall(addNoteApi(data));
      setNotesState(addDataToArray(notesState, { ...data, _id: insertedId }));
    }
  };

  const removeNote = async (id) => {
    const result = await apiCall(deleteNoteApi(id));
    if (result) {
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
