import { useState, createContext, useContext } from "react";

const SelectedMemoContext = createContext({});

export const SelectedMemoProvider = (props) => {
  const { children } = props;

  const [selectedMemo, setSelectedMemo] = useState(null);

  return (
    <SelectedMemoContext.Provider value={{ selectedMemo, setSelectedMemo }}>
      {children}
    </SelectedMemoContext.Provider>
  );
};

export const useSelectedMemo = () => useContext(SelectedMemoContext);
