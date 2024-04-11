import { useLogin } from "./LoginProvider";
import { useSelectedMemo } from "./SelectedMemoProvider";

export const NewMemoButton = ({ handleClick }) => {
  const { isLogged } = useLogin();
  const { selectedMemo } = useSelectedMemo();

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
};
