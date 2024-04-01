import { useState } from "react";

export default function MemoForm({ memo, status }) {
  const [memoText, setMemoText] = useState(memo.text);

  function handleAddMemo(memo) {
    localStorage.setItem(window.crypto.randomUUID(), memo);
  }

  function handleEditMemo({ memoId, editedMemo }) {
    localStorage.setItem(memoId, editedMemo);
  }

  function handleDeleteMemo(memoId) {
    localStorage.removeItem(memoId);
  }

  return (
    <form>
      <textarea
        rows="6"
        placeholder={status === "new" ? "ここに登録したいメモを記入" : ""}
        value={memoText}
        onChange={(e) => {
          setMemoText(e.target.value);
        }}
      />
      <div className="formButton">
        <button
          type="submit"
          onClick={() => {
            if (status === "edit") {
              return handleEditMemo({ memoId: memo.id, editedMemo: memoText });
            } else if (status === "new") {
              return handleAddMemo(memoText);
            }
          }}
        >
          Save
        </button>
        {status === "edit" && (
          <button type="submit" onClick={() => handleDeleteMemo(memo.id)}>
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
