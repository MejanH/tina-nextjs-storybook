import Head from "next/head";
import { client } from "~/.tina/__generated__/client";
export default function TodosPage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  const data = props.data.todoConnection.edges;

  return (
    <div className="container mx-auto my-10">
      <Head>
        <title>Todos</title>
      </Head>
      <h1 className="text-3xl font-bold text-center">Todos</h1>
      <div className="my-10 flex flex-col space-x-4 items-center justify-center">
        {data?.map((todoData) => {
          const todo = todoData?.node;
          return (
            <div
              key={todo?.id}
              className={`text-xl ${todo?.completed ? "line-through" : ""}`}
            >
              {todo?.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const tinaProps = await client.queries.todoConnection();
  return {
    props: {
      ...tinaProps,
    },
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
