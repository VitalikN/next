import { Metadata } from "next";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const data = await getData(id);
  return {
    title: data.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const data = await getData(id);

  return (
    <>
      <h1 className="title"> {data.title}</h1>
      <p>{data.body}</p>
    </>
  );
}
