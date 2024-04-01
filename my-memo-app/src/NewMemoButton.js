export default function NewMemoButton({ selectedMemo, handleClick }) {
  return (
    <section className="newButton">
      <button
        className={
          selectedMemo && selectedMemo.id === 0
            ? "activeButton"
            : "normalButton"
        }
        onClick={() => handleClick()}
      >
        +
      </button>
    </section>
  );
}
