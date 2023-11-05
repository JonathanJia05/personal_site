import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between">
        <h1>Home</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/todolist"
        >
          Todo List
        </Link>
      </header>
      <ul></ul>
    </>
  );
}
