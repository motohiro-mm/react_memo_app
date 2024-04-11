import { useState } from "react";

export default function MemoForm({
  selectedMemo,
  handleChangeMemos,
  handleDeleteMemos,
}) {
  const [memoText, setMemoText] = useState(selectedMemo.text);

  return (
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
  );
}
