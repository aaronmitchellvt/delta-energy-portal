"use client";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <div>
        <Link className="text-white" href="/properties">
          <button className="p-3 bg-blue-400 rounded-md">View Projects</button>
        </Link>
      </div>
    </main>
  );
}
