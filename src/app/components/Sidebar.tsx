import Link from "next/link";
import React from "react";

const fetchProperties = async () => {
  //fetch the properties
};

const Sidebar = () => {
  // const properties = fetchProperties();
  const properties = [
    {
      title: "Smiths",
    },
    {
      title: "Jones",
    },
    {
      title: "Mitchells",
    },
  ];

  return (
    <div className="h-full w-64 border-r bg-gray-200">
      <Link href="/properties/new">
        <p className="block p-4 text-xl text-blue-500">+ New Property</p>
      </Link>

      <hr />

      {properties.length === 0 ? (
        <p className="p-4">No spaces yet</p>
      ) : (
        <ol>
          {properties.map((property) => (
            <Link key={property.title} href={`/properties/${property.title}`}>
              <li key={property.title} className="text-black block border-b p-4 text-xl">
                🏠 {property.title}
              </li>
            </Link>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Sidebar;
