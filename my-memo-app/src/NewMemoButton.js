import { useContext } from "react";
import { LoginContext } from "./LoginProvider";

export default function NewMemoButton({ selectedMemo, handleClick }) {
  const { isLogged } = useContext(LoginContext);

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
