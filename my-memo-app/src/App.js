import "./App.css";
import { useEffect, useState } from "react";
import { NewMemoButton } from "./NewMemoButton.js";
import { MemoForm } from "./MemoForm.js";
import { MemoList } from "./MemoList.js";
import { useLogin } from "./LoginProvider";
import { useSelectedMemo } from "./SelectedMemoProvider";

export const App = () => {
  const initialMemos = JSON.parse(localStorage.getItem("memos")) ?? [];

  const [memos, setMemos] = useState(initialMemos);
  const { isLogged, setIsLogged } = useLogin();
  const { selectedMemo, setSelectedMemo } = useSelectedMemo();

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const changeMemos = (memoText, newId) => {
    return selectedMemo.id
      ? memos.map((memo) => {
          if (memo.id === selectedMemo.id) {
            return { ...memo, text: memoText };
          } else {
            return memo;
          }
        })
      : [...memos, { id: newId, text: memoText }];
  };

  const deleteMemos = () => {
    return memos.filter((memo) => memo.id !== selectedMemo.id);
  };

  return (
    <>
      <div className="title">
        <h1>Memo List</h1>
      </div>
      <div className="login">
        <button
          className={isLogged ? "logoutButton" : "loginButton"}
          onClick={() => setIsLogged(!isLogged)}
        >
          {isLogged ? "ログアウト" : "ログイン"}
        </button>
      </div>
      <div className="main">
        <MemoList
          memos={memos}
          onSelect={(memo) => {
            setSelectedMemo(memo);
          }}
        />
        <NewMemoButton
          handleClick={() => {
            setSelectedMemo({ text: "" });
          }}
        />
      </div>
      <div className="form">
        {selectedMemo && (
          <MemoForm
            key={selectedMemo.id}
            handleChangeMemos={(memoText) => {
              const newId = window.crypto.randomUUID();
              setMemos(changeMemos(memoText, newId));
              !selectedMemo.id &&
                setSelectedMemo({ id: newId, text: memoText });
            }}
            handleDeleteMemos={() => {
              setMemos(deleteMemos());
              setSelectedMemo(null);
            }}
          />
        )}
      </div>
    </>
  );
};
