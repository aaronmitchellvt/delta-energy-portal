import PropertyDetailsCard from "@/app/components/PropertyDetailsCard";
import RecHeatPumps from "@/app/components/RecHeatPumps";
import axios from "axios";
import React from "react";

const fetchProject = async (id: string) => {
  const { data } = await axios.post(`http://localhost:3000/api/property`, {
    projectId: id,
  });
  return data;
};

const page = async ({ params }) => {
  const { project, estimatedLoad, reccommendedHeatPumps } =
    await fetchProject(params.projectId);

  return (
    <>
      <div className="w-1/4">
        <PropertyDetailsCard details={project} estimatedLoad={estimatedLoad} />
      </div>

      <hr />
      <RecHeatPumps reccommendedHeatPumps={reccommendedHeatPumps} />
    </>
  );
};

export default page;
