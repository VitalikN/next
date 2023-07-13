import type { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) throw new Error("Unable to fetch posts");

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default async function Blog() {
  const data = await getData();
  return (
    <>
      <h1 className="title"> Welcom to Blog page</h1>
      <ul>
        {data.map((data: any) => (
          <li key={data.id}>
            <Link href={`/blog/${data.id}`}>{data.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
