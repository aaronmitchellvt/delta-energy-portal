"use client";
import React from "react";
import Link from "next/link";
import { Button } from "primereact/button";

const fetchData = async () => {
  //get the logged in user
};

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-800 p-4 text-white h-20">
      <Link className="text-white no-underline" href="/properties">
        <h1 className="text-3xl font-bold">Delta Energy</h1>
      </Link>
      <p>email@delta.com</p>
      <Button label="Logout" />
    </div>
  );
};

export default Navbar;
