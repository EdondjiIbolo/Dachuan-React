import "./sections/loader.css";
export function Loading() {
  return (
    <main className="fixed flex justify-center items-center z-50 top-0 w-full h-full bg-slate-700 opacity-70">
      <div className="loader"></div>
    </main>
  );
}
