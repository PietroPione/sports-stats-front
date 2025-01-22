"use client";

import { useState } from "react";
import directus from "@/lib/directus"; // Servizio Directus
import DeleteButton from "./DeleteButton"; // Componente DeleteButton

export default function ResultsTable({ initialData }) {
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
          <th className="px-4 py-2 border">Gender</th>
          <th className="px-4 py-2 border">Event</th>
          <th className="px-4 py-2 border">Performance</th>
          <th className="px-4 py-2 border">Rank</th>
          <th className="px-4 py-2 border">Name</th>
          <th className="px-4 py-2 border">Surname</th>
          <th className="px-4 py-2 border">Nation</th>
          <th className="px-4 py-2 border">Venue</th>
          <th className="px-4 py-2 border">Date</th>
          <th className="px-4 py-2 border">Source</th>
          <th className="px-4 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((result) => (
          <tr key={result.id} className="text-center">
            <td className="px-4 py-2 border">{result.gender}</td>
            <td className="px-4 py-2 border">{result.event}</td>
            <td className="px-4 py-2 border">{result.performance}</td>
            <td className="px-4 py-2 border">{result.rank}</td>
            <td className="px-4 py-2 border">{result.name}</td>
            <td className="px-4 py-2 border">{result.surname}</td>
            <td className="px-4 py-2 border">{result.nation}</td>
            <td className="px-4 py-2 border">{result.venue}</td>
            <td className="px-4 py-2 border">
              {new Date(result.date).toLocaleDateString()}
            </td>
            <td className="px-4 py-2 border">{result.source}</td>
            <td className="px-4 py-2 border">
              <DeleteButton id={result.id} onDelete={handleDelete} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
