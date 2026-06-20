import { useEffect } from "react";

import { useToast } from "../../contexts/toast";
import { useTasksState } from "../../state";
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
  const { tasksState, setTasksState } = useTasksState();
  const { setToastMessage } = useToast();
  const apiCall = useApiCall();

  useEffect(() => {
    const fetchTasks = async () => {
      const result = await apiCall(fetchTasksApi());
      if (result) {
        setToastMessage("Successfully fetched tasks");
        setTasksState(result);
      }
    };

    if (tasksState?.length === 0) {
      fetchTasks();
    }
  }, []);

  const addEditTask = async (data, id) => {
    if (id) {
      const result = await apiCall(updateTaskApi(id, data));
      if (result) {
        setToastMessage("Successfully updated the task");
        setTasksState(updateDataInArray(tasksState, id, data));
      }
    } else {
      setToastMessage("Successfully create a new task");
      const { insertedId } = await apiCall(addTaskApi(data));
      setTasksState(
        addDataToArray(tasksState, { ...data, isDone: false, _id: insertedId }),
      );
    }
  };

  const toggleTask = async (id) => {
    const newStatus = !tasksState.find((task) => task._id === id).isDone;
    const result = await apiCall(updateTaskApi(id, { isDone: newStatus }));
    if (result) {
      setToastMessage("Successfully updated the task");
      setTasksState(updateDataInArray(tasksState, id, { isDone: newStatus }));
    }
  };

  const removeTask = async (id) => {
    const result = await apiCall(deleteTaskApi(id));
    if (result) {
      setToastMessage("Successfully deleted the task");
      setTasksState(removeDataFromArray(tasksState, id));
    }
  };

  return (
    <Tasks
      tasks={tasksState}
      addEditTask={addEditTask}
      toggleTask={toggleTask}
      removeTask={removeTask}
    />
  );
};

export default TasksContainer;
