import "./sections/loader.css";
export function Loading() {
  return (
    <main className="absolute grid place-content-center z-50 top-0 w-full h-screen bg-slate-700 opacity-70">
      <div className="loader"></div>
    </main>
  );
}
