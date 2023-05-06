import { useRef } from "react";

const App = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    if (!dialogRef.current) {
      return;
    }

    dialogRef.current.showModal();
  };

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (!dialogRef.current) {
      return;
    }

    if (event.target === event.currentTarget) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <button onClick={handleClick}>Open Dialog</button>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        style={{ padding: 0 }}
      >
        <form method="dialog" style={{ padding: 10 }}>
          <p>Hi, I'm a dialog.</p>
          <button>OK</button>
        </form>
      </dialog>
    </>
  );
};

export default App;
