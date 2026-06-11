import React, { useEffect, useState } from "react";

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

  const fetchNotes = async () => {
    const data = await apiCall(fetchNotesApi());
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addEditNote = async (data, id) => {
    if (id) {
      await apiCall(updateNoteApi(id, data));
      setNotes(updateDataInArray(notes, id, data));
    } else {
      const { insertedId } = await apiCall(addNoteApi(data));
      setNotes(addDataToArray(notes, { ...data, _id: insertedId }));
    }
  };

  const removeNote = async (id) => {
    await apiCall(deleteNoteApi(id));
    setNotes(removeDataFromArray(notes, id));
  };

  return (
    <Notes notes={notes} addEditNote={addEditNote} removeNote={removeNote} />
  );
};

export default NotesContainer;
