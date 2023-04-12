"use client";
import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

const fetchData = async () => {
  //get the logged in user
}

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-800 p-4 text-white">
      <Link className="text-white no-underline" href="/properties"><h1 className="text-3xl font-bold">Delta Energy</h1></Link>
      <p>aaron@email.com</p>
      <Button variant="contained">
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
