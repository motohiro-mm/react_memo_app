export default function MemoList({ memos, selectedMemo, onSelect }) {
  function pickUpMemoTitle(memoText) {
    return memoText.slice(0, memoText.indexOf("\n"));
  }

  return (
    <section className="memos">
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <button
              onClick={() => {
                onSelect(memo);
              }}
            >
              {pickUpMemoTitle(memo.text)}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
