import Sidebar from "../components/Sidebar";
import Link from "next/link";

export default function Properties() {
  return (
      <main className="min-h-screen flex">
          <Sidebar />
        <div className="p-3 flex items-center">
          <p className="mr-2">Select a property or</p>
          <Link href="/properties/new">create one</Link>
        </div>
      </main>
  );
}
