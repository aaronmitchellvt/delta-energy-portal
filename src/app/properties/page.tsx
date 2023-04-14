import Sidebar from "../components/Sidebar";
import Link from "next/link";

export default function Properties() {
  return (
      <main className="min-h-screen flex">
          <Sidebar />
        <div className="p-3 flex items-center h-12 mt-10 ml-12">
          <p className="mr-2 text-xl">Select a property or</p>
          <Link className="text-xl" href="/properties/new">create one</Link>
        </div>
      </main>
  );
}
