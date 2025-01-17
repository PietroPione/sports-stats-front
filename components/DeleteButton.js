"use client";

export default function DeleteButton({ id, onDelete }) {
  async function handleClick() {
    if (!id) return;
    try {
      await onDelete(id);
      alert(`Record con ID ${id} eliminato con successo!`);
      window.location.reload();
    } catch (error) {
      alert("Errore durante l'eliminazione del record.");
      console.error(error);
    }
  }

  return <button onClick={handleClick}>Elimina</button>;
}
