import HeatPumpContainer from "@/app/components/HeatPumpContainer";
import PropertyDetailsCard from "@/app/components/PropertyDetailsCard";
import RecHeatPumps from "@/app/components/RecHeatPumps";
import axios from "axios";
import React from "react";

const devUrl = process.env.NEXT_PUBLIC_BASE_URL;

const fetchProject = async (id: string) => {
  const { data } = await axios.post(`${devUrl}/api/property`, {
    projectId: id,
  });
  return data;
};

const page = async (props: any) => {
  const { project, estimatedLoad, reccommendedHeatPumps } = await fetchProject(
    props.params.projectId
  );

  return (
    <div className="px-6">


      <HeatPumpContainer pumps={reccommendedHeatPumps} project={project} estLoad={estimatedLoad} />

      {/* <hr /> */}
    </div>
  );
};

export default page;
