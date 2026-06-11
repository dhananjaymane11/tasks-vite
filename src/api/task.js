export const fetchTasksApi = () => ({
  endpoint: 'tasks/get',
});

export const addTaskApi = (data) => ({
  endpoint: 'tasks/create',
  method: 'POST',
  data,
});

export const updateTaskApi = (id, data) => ({
  endpoint: `tasks/update/${id}`,
  method: 'PUT',
  data,
});

export const deleteTaskApi = (id) => ({
  endpoint: `tasks/delete/${id}`,
  method: 'DELETE',
});
