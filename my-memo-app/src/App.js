import "./App.css";
import { useState } from "react";
import NewMemoButton from "./NewMemoButton.js";
import MemoForm from "./MemoForm.js";
import MemoList from "./MemoList.js";

export default function App() {
  const memos = getMemos();
  const [selectedMemo, setSelectedMemo] = useState(null);
  const [formStatus, setFormStatus] = useState(null);

  function getMemos() {
    const memos = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      memos.push({ id: key, text: localStorage.getItem(key) });
    }
    return memos;
  }

  return (
    <>
      <h1>Memo List</h1>
      <div className="main">
        <MemoList
          memos={memos}
          selectedMemo={selectedMemo}
          onSelect={(memo) => {
            setSelectedMemo(memo);
            setFormStatus("edit");
          }}
        />
        <NewMemoButton
          selectedMemo={selectedMemo}
          handleClick={() => {
            setSelectedMemo({ id: 0, text: "" });
            setFormStatus("new");
          }}
        />
      </div>
      <div className="form">
        {selectedMemo && (
          <MemoForm
            key={selectedMemo.id}
            memo={selectedMemo}
            status={formStatus}
          />
        )}
      </div>
    </>
  );
}
