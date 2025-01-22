import directus from "@/lib/directus.mjs";
import Link from "next/link";

export default async function Home() {
  const { data } = await directus.get("items/pages");

  return (
    <main>
      <h1>Sports stats website</h1>
      <h2>Available Pages</h2>
      <ul>
        {data.map((page) => (
          <li key={page.id}>
            <Link href={`/${page.slug}`}>{page.title}</Link>
          </li>
        ))}
      </ul>

      <ul className="pt-12">
        <li>
          <Link href={"/results"}>Results</Link>
        </li>
        <li>
          <Link href={"/events"}>Events</Link>
        </li>
        <li>
          <Link href={"/registry"}>Registry</Link>
        </li>
        <li>
          <Link href={"/sources"}>Sources</Link>
        </li>
      </ul>
    </main>
  );
}
