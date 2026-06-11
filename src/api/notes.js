export const fetchNotesApi = () => ({
  endpoint: 'notes/get',
});

export const addNoteApi = (data) => ({
  endpoint: 'notes/create',
  method: 'POST',
  data,
});

export const updateNoteApi = (id, data) => ({
  endpoint: `notes/update/${id}`,
  method: 'PUT',
  data,
});

export const deleteNoteApi = (id) => ({
  endpoint: `notes/delete/${id}`,
  method: 'DELETE',
});
