import "./App.css";
import { useEffect, useState } from "react";
import { NewMemoButton } from "./components/NewMemoButton";
import { MemoForm } from "./components/MemoForm";
import { MemoList } from "./components/MemoList";
import { useLogin } from "./hooks/LoginHooks";

export const App = () => {
  const initialMemos = JSON.parse(localStorage.getItem("memos")) ?? [];

  const [memos, setMemos] = useState(initialMemos);
  const [selectedMemo, setSelectedMemo] = useState(null);
  const { isLogged, setIsLogged } = useLogin();

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
          selectedMemo={selectedMemo}
          onSelect={(memo) => {
            setSelectedMemo(memo);
          }}
        />
        <NewMemoButton
          selectedMemo={selectedMemo}
          handleClick={() => {
            setSelectedMemo({ text: "" });
          }}
        />
      </div>
      <div className="form">
        {selectedMemo && (
          <MemoForm
            key={selectedMemo.id}
            selectedMemo={selectedMemo}
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
