import { useContext } from "react";
import { LoginContext } from "./LoginProvider";
import { SelectedMemoContext } from "./SelectedMemoProvider";

export default function NewMemoButton({ handleClick }) {
  const { isLogged } = useContext(LoginContext);
  const { selectedMemo } = useContext(SelectedMemoContext);

  return (
    <>
      {isLogged && (
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
      )}
    </>
  );
}
