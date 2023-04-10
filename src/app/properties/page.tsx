import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../../app/globals.css";
import Link from "next/link";

export default function Properties() {
  return (
    <div className="h-full">
      {/* <Navbar /> */}
      <main className="h-full flex">
        <Sidebar />
        <div className="p-3 flex items-center">
          <p className="mr-2">Select a property or</p>
          <Link href="/properties/new">create one</Link>
        </div>
      </main>
    </div>
  );
}
