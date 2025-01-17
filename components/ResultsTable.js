"use client";

import { useState } from "react";
import directus from "@/lib/directus"; // Importa il servizio Directus
import DeleteButton from "./DeleteButton"; // Importa il componente DeleteButton

export default function ResultsTable({ initialData }) {
  const [data, setData] = useState(initialData);

  // Funzione per eliminare un record
  async function handleDelete(id) {
    try {
      // Usa il metodo deleteOne del servizio Directus
      await directus.deleteOne(id);

      alert(`Record con ID ${id} eliminato con successo!`);
      // Rimuove il record eliminato dalla tabella senza ricaricare la pagina
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      alert("Errore durante l'eliminazione del record.");
      console.error(error);
    }
  }

  return (
    <table>
      <thead>
        <tr className="space-x-10">
          <th className="px-10">Id</th>
          <th className="px-10">Rank</th>
          <th className="px-10">Name</th>
          <th className="px-10">Surname</th>
          <th className="px-10">Performance</th>
          <th className="px-10">Event</th>
          <th className="px-10">Date</th>
          <th className="px-10">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((result) => (
          <tr key={result.id}>
            <td>{result.id}</td>
            <td>{result.rank}</td>
            <td>{result.name}</td>
            <td>{result.surname}</td>
            <td>{result.perf}</td>
            <td>{result.event}</td>
            <td>{new Date(result.date).toLocaleDateString()}</td>
            <td>
              <DeleteButton id={result.id} onDelete={handleDelete} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
