import { useRef } from "react";

const App = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogRef2 = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    dialogRef.current?.showModal();
  };

  const handleClick2 = () => {
    dialogRef2.current?.show();
  };

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      dialogRef.current?.close();
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

      <div
        style={{
          position: "absolute",
          bottom: "15px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <button onClick={handleClick2}>Open Dialog 2</button>
        <dialog
          ref={dialogRef2}
          style={{
            position: "absolute",
            top: "-10px",
            transform: "translateY(-100%)",
          }}
        >
          <form method="dialog" style={{ padding: 10 }}>
            <p>Hi, I'm a dialog 2!</p>
            <button>OK</button>
          </form>
        </dialog>
      </div>
    </>
  );
};

export default App;
