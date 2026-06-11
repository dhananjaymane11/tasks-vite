import { useEffect, useState } from "react";

import { useApiCall } from "../../hooks";
import {
  fetchTasksApi,
  addTaskApi,
  updateTaskApi,
  deleteTaskApi,
} from "../../api/task";
import {
  addDataToArray,
  removeDataFromArray,
  updateDataInArray,
} from "../../utils";
import Tasks from "./Tasks";

const TasksContainer = () => {
  const [tasks, setTasks] = useState([]);
  const apiCall = useApiCall();

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await apiCall(fetchTasksApi());
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const addEditTask = async (data, id) => {
    if (id) {
      await apiCall(updateTaskApi(id, data));
      setTasks(updateDataInArray(tasks, id, data));
    } else {
      const { insertedId } = await apiCall(addTaskApi(data));
      setTasks(
        addDataToArray(tasks, { ...data, isDone: false, _id: insertedId }),
      );
    }
  };

  const toggleTask = async (id) => {
    const newStatus = !tasks.find((task) => task._id === id).isDone;
    await apiCall(updateTaskApi(id, { isDone: newStatus }));
    setTasks(updateDataInArray(tasks, id, { isDone: newStatus }));
  };

  const removeTask = async (id) => {
    await apiCall(deleteTaskApi(id));
    setTasks(removeDataFromArray(tasks, id));
  };

  return (
    <Tasks
      tasks={tasks}
      addEditTask={addEditTask}
      toggleTask={toggleTask}
      removeTask={removeTask}
    />
  );
};

export default TasksContainer;
