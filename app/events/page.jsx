import directus from "@/lib/directus.mjs";
import EventsTable from "@/components/EventsTable";

export default async function ResultsPage() {
  // Recupero dei dati direttamente da Directus
  const { data } = await directus.get("items/events", {
    params: {
      sort: "rank", // Ordina i risultati per rank
    },
  });

  if (!data || data.length === 0) {
    return <h1>No results found</h1>;
  }

  return (
    <main>
      <h1>Events</h1>
      <EventsTable initialData={data} />
    </main>
  );
}
