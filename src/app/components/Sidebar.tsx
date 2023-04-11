import axios from "axios";
import Link from "next/link";
import React from "react";

const fetchProperties = async () => {
  //fetch the properties
  const { data } = await axios.get("http://localhost:3000/api/properties");
  return data;
};

const Sidebar = async () => {
  const fetchedProperties = await fetchProperties();

  return (
    <div className="h-full w-64 border-r bg-gray-200">
      <Link href="/properties/new">
        <p className="block p-4 text-xl text-blue-500">+ New Property</p>
      </Link>

      <hr />

      {fetchedProperties.propertiesList.length === 0 ? (
        <p className="p-4">No spaces yet</p>
      ) : (
        <ol>
          {fetchedProperties.propertiesList.map((property: any) => (
            <Link key={property.id} href={`/properties/${property.id}`}>
              <li key={property.propClientName} className="text-black block border-b p-4 text-xl">
                🏠 {property.propClientName}
              </li>
            </Link>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Sidebar;
