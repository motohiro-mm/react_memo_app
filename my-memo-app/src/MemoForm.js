import { useState } from "react";
import { useLogin } from "./LoginProvider";
import { useSelectedMemo } from "./SelectedMemoProvider";

export default function MemoForm({ handleChangeMemos, handleDeleteMemos }) {
  const { isLogged } = useLogin();
  const { selectedMemo } = useSelectedMemo();
  const [memoText, setMemoText] = useState(selectedMemo.text);

  return (
    <>
      {isLogged ? (
        <form>
          <textarea
            rows="6"
            placeholder={!selectedMemo.id ? "ここに登録したいメモを記入" : ""}
            value={memoText}
            onChange={(e) => {
              setMemoText(e.target.value);
            }}
          />
          <div className="formButton">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleChangeMemos(memoText);
              }}
            >
              Save
            </button>
            {selectedMemo.id && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleDeleteMemos();
                }}
              >
                Delete
              </button>
            )}
          </div>
        </form>
      ) : (
        <form>
          <textarea rows="6" value={memoText} readOnly />
        </form>
      )}
    </>
  );
}
