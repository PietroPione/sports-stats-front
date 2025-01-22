import directus from "@/lib/directus.mjs";
import RegistryTable from "@/components/RegistryTable";

export default async function RegistryPage() {
  // Recupero dei dati direttamente da Directus
  const { data } = await directus.get("items/registry", {
    params: {
      sort: "rank", // Ordina i risultati per rank
    },
  });

  if (!data || data.length === 0) {
    return <h1>No results found</h1>;
  }

  return (
    <main>
      <h1>Registry</h1>
      <RegistryTable initialData={data} />
    </main>
  );
}
