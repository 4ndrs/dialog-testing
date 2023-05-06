import { useRef } from "react";

const App = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    if (!dialogRef.current) {
      return;
    }

    dialogRef.current.showModal();
  };

  return (
    <>
      <button onClick={handleClick}>Open Dialog</button>

      <dialog ref={dialogRef}>
        <form method="dialog">
          <p>Hi, I'm a dialog.</p>
          <button>OK</button>
        </form>
      </dialog>
    </>
  );
};

export default App;
