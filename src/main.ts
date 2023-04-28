const openButton = document.getElementById("openDiag");
const dialog = document.getElementById("dialog") as HTMLDialogElement | null;

if (!openButton || !dialog) {
  throw new Error("Unable to set elements");
}

openButton.addEventListener("click", () => dialog.showModal());
