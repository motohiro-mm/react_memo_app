export default function NewMemoButton({ handleClick }) {
  return (
    <section className="newButton">
      <button onClick={() => handleClick()}>+</button>
    </section>
  );
}
