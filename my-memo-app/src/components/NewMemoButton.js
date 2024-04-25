import { useLogin } from "../hooks/LoginHooks";

export const NewMemoButton = ({ selectedMemo, handleClick }) => {
  const { isLogin } = useLogin();

  return (
    <>
      {isLogin && (
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
