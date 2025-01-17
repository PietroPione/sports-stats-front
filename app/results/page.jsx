import directus from "@/lib/directus.mjs";
import ResultsTable from "@/components/ResultsTable";

export default async function ResultsPage() {
  // Recupero dei dati direttamente da Directus
  const { data } = await directus.get("items/results", {
    params: {
      sort: "rank", // Ordina i risultati per rank
    },
  });

  if (!data || data.length === 0) {
    return <h1>No results found</h1>;
  }

  return (
    <main>
      <h1>Results</h1>
      <ResultsTable initialData={data} />
    </main>
  );
}
