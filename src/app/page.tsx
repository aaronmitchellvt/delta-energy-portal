"use client";
import Link from "next/link";
import "./globals.css";
import { Button } from "primereact/button";

export default function Home() {
  return (
    <main>
      <div>
        <Link className="text-white" href="/properties">
          <Button label="View Projects" />
        </Link>
      </div>
    </main>
  );
}
