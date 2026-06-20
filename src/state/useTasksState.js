import { atom, useAtom } from "jotai";
const tasks = atom([]);

const useTasksState = () => {
  const [tasksState, setTasksState] = useAtom(tasks);

  return {
    tasksState,
    setTasksState,
  };
};

export default useTasksState;
