import directus from "@/lib/directus.mjs";
import SourcesTable from "@/components/SourcesTable";

export default async function SourcesPage() {
  // Recupero dei dati direttamente da Directus
  const { data } = await directus.get("items/sources", {
    params: {
      sort: "rank", // Ordina i risultati per rank
    },
  });

  if (!data || data.length === 0) {
    return <h1>No results found</h1>;
  }

  return (
    <main>
      <h1>Sources</h1>
      <SourcesTable initialData={data} />
    </main>
  );
}
