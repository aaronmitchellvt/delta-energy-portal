import RecHeatPumps from "@/app/components/RecHeatPumps";
import axios from "axios";
import React from "react";

const fetchProperty = async (id: string) => {
  //fetch the properties
  const { data } = await axios.post(`http://localhost:3000/api/property`, {
    propertyId: id,
  });
  return data;
};

const page = async ({ params }) => {
  const { property, estimatedLoad, reccommendedHeatPumps } =
    await fetchProperty(params.propertyId);

  return (
    <>
      <div>
        <h1>{property.propClientName}'s Property</h1>
        <h2>Estimated HVAC Load: {estimatedLoad}</h2>
      </div>

      <hr />
      <RecHeatPumps reccommendedHeatPumps={reccommendedHeatPumps} />
    </>
  );
};

export default page;
