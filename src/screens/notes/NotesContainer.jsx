import { useEffect, useState } from "react";

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
  const [notes, setNotes] = useState([]);
  const apiCall = useApiCall();

  useEffect(() => {
    const fetchNotes = async () => {
      const result = await apiCall(fetchNotesApi());
      if (result) {
        setNotes(result);
      }
    };

    fetchNotes();
  }, []);

  const addEditNote = async (data, id) => {
    if (id) {
      const result = await apiCall(updateNoteApi(id, data));
      if (result) {
        setNotes(updateDataInArray(notes, id, data));
      }
    } else {
      const { insertedId } = await apiCall(addNoteApi(data));
      setNotes(addDataToArray(notes, { ...data, _id: insertedId }));
    }
  };

  const removeNote = async (id) => {
    const result = await apiCall(deleteNoteApi(id));
    if (result) {
      setNotes(removeDataFromArray(notes, id));
    }
  };

  return (
    <Notes notes={notes} addEditNote={addEditNote} removeNote={removeNote} />
  );
};

export default NotesContainer;
