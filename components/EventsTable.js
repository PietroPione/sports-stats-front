"use client";

import { useState } from "react";
import directus from "@/lib/directus"; // Servizio Directus
import DeleteButton from "./DeleteButton"; // Componente DeleteButton

export default function EventsTable({ initialData }) {
  const [data, setData] = useState(initialData);

  // Funzione per eliminare un record
  async function handleDelete(id) {
    try {
      await directus.deleteOne(id); // Elimina il record da Directus

      alert(`Record con ID ${id} eliminato con successo!`);
      // Aggiorna i dati rimuovendo il record eliminato
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      alert("Errore durante l'eliminazione del record.");
      console.error(error);
    }
  }

  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="px-4 py-2 border">Code</th>
          <th className="px-4 py-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((events) => (
          <tr key={events.id} className="text-center">
            <td className="px-4 py-2 border">{events.code}</td>
            <td className="px-4 py-2 border">{events.description}</td>

            <td className="px-4 py-2 border">
              <DeleteButton id={events.id} onDelete={handleDelete} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
