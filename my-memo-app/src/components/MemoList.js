export const MemoList = ({ memos, selectedMemo, onSelect }) => {
  const pickUpMemoTitle = (memoText) => {
    const memoTitle = memoText.includes("\n")
      ? memoText.slice(0, memoText.indexOf("\n"))
      : memoText;
    return memoTitle;
  };

  return (
    <ul>
      {memos.map((memo) => (
        <li key={memo.id}>
          <button
            className={
              selectedMemo && selectedMemo.id === memo.id
                ? "activeButton"
                : "normalButton"
            }
            onClick={() => {
              onSelect(memo);
            }}
          >
            {pickUpMemoTitle(memo.text)}
          </button>
        </li>
      ))}
    </ul>
  );
};
