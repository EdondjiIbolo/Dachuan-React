import { useParams } from "react-router-dom";

export function OrderInfo() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <main className="bg-zinc-200 h-screen pt-20">Hola Mundo</main>
    </>
  );
}
