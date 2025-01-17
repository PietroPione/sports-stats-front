import directus from "@/lib/directus.mjs";

export default async function Page({ params }) {
  const { slug } = await params;

  if (!slug) {
    return <h1>Page not found</h1>;
  }

  const { data } = await directus.get("items/pages", {
    params: {
      filter: {
        dataslug: { _eq: slug },
      },
    },
  });

  if (!data || data.length === 0) {
    return <h1>Page not found</h1>;
  }

  const page = data.find((item) => item.slug === slug);

  if (!page) {
    return <h1>Page not found</h1>;
  }

  return (
    <main>
      <h1>{page.title}</h1>
      <p>{page.main_content}</p>
    </main>
  );
}
