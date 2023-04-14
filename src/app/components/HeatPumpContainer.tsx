"use client";

import React, { useState } from "react";
import RecHeatPumps from "./RecHeatPumps";
import PumpChart from "./PumpChart";
import PropertyDetailsCard from "./PropertyDetailsCard";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";

//Props
// - data needed to power the chart
// -
// State
// selected heat pump
const HeatPumpContainer = (props: any) => {
  const pumps = props.pumps;
  const project = props.project;
  const estLoad = props.estLoad;
  const [selectedPump, setSelectedPump] = useState(0);

  const options = [
    { name: pumps[0].name, value: 0 },
    { name: pumps[1].name, value: 1 },
    { name: pumps[2].name, value: 2 },
  ]

  const selectPump = (num: number) => {
    setSelectedPump(num);
  }

  return (
    <>
      <div className="flex justify-between items-start">
        <div className="w-1/3 p-2">
          <PropertyDetailsCard details={project} estimatedLoad={estLoad} />
        </div>
        <div className="w-2/3 p-2">
          <RecHeatPumps
            selectPump={selectPump}
            pumps={pumps}
            selectedPump={selectedPump}
            reccommendedHeatPumps={pumps}
          />
        </div>
      </div>

      <div className="mt-10 p-4 w-full">
        <PumpChart
          project={project}
          estLoad={estLoad}
          selPump={pumps[selectedPump]}
          selPumpIndex={selectedPump}
        />
      </div>
    </>
  );
};

export default HeatPumpContainer;

      {/* <Dropdown
        value={options[selectedPump].name}
        // options={options}
        onChange={(e: DropdownChangeEvent) => {
          setSelectedPump(e.value)
        }}
      /> */}

      {/* <div className="ml-2 pl-4 w-1/5">
        <select
          className="p-4 w-full bg-white border-2 border-black"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedPump(Number(e.target.value));
          }}
        >
          <option value={0}>{pumps[0].name}</option>
          <option value={1}>{pumps[1].name}</option>
          <option value={2}>{pumps[2].name}</option>
        </select>
      </div> */}
