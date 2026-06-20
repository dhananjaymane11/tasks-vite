import { atom, useAtom } from "jotai";
const notes = atom([]);

const useNotesState = () => {
  const [notesState, setNotesState] = useAtom(notes);

  return {
    notesState,
    setNotesState,
  };
};

export default useNotesState;
