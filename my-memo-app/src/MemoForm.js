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
        value={memoText}
        onChange={(e) => {
          setMemoText(e.target.value);
        }}
      />
      <div>
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
      </div>
      <div>
        {status === "edit" && (
          <button type="submit" onClick={() => handleDeleteMemo(memo.id)}>
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
