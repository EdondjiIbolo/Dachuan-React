import { useState } from "react";
import { useParams } from "react-router-dom";
export default function AssistantContent() {
  const { id } = useParams();
  return (
    <main className="h-screen  flex flex-col justify-center items-center">
      <div className="w-[100%] py-10 h-[100%]">
        <object
          data={`/images/finishing/pdf-${id}.pdf`}
          type="application/pdf"
          width="90%"
          height="100%"
          content="center"
          className="mx-auto"
        ></object>
      </div>
    </main>
  );
}
