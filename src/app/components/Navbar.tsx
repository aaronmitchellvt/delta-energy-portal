import React from "react";
import Link from "next/link";

const fetchData = async () => {
  //get the logged in user
};

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-800 p-4 text-white h-16">
      <Link className="text-white no-underline" href="/properties">
        <h1 className="text-3xl font-bold">Delta Energy</h1>
      </Link>
      <p>aaron@email.com</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
