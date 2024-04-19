import { useLogin } from "../hooks/LoginHooks";

export const NewMemoButton = ({ selectedMemo, handleClick }) => {
  const { isLogged } = useLogin();

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
