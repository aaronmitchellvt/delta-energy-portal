"use client";
import React, { useState } from "react";
import { Chart } from "primereact/chart";
import { Dropdown } from "primereact/dropdown";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";

const PumpChart = (props: any) => {
  const selPumpIndex = props.selPumpIndex;
  const { name, cost } = props.selPump;
  const project = props.project;
  const estLoad = props.estLoad;

  const pumpEfficencyMultiplier = (index: number, cost: number, estLoad: number) => {
    let addedHVACEstCost = 0
    if (estLoad < 15000) addedHVACEstCost = 111;
    if (estLoad > 15000 && estLoad < 30000) addedHVACEstCost = 555
    if (estLoad >= 30000) addedHVACEstCost = 888
    if (index === 0) return cost + addedHVACEstCost;
    if (index === 1) return 26 + cost + addedHVACEstCost;
    if (index === 2) return 32 + cost + addedHVACEstCost;
    return 1;
  };

  const compareSourceMultiplier = (cost: number, multiplier: number, estLoad: number) => {
    let addedHVACEstCost = 0
    if (estLoad < 15000) addedHVACEstCost = 180;
    if (estLoad > 15000 && estLoad < 30000) addedHVACEstCost = 589
    if (estLoad >= 30000) addedHVACEstCost = 901
    return cost * multiplier + addedHVACEstCost
  }

  const chartOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          fontColor: "rgb(0,0,0)",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Duration",
        },
        ticks: {
          color: "rgb(105,105,105)",
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Money ($)",
        },
        ticks: {
          color: "rgb(105,105,105)",
        },
        grid: {
          color: "rgb(128,128,128)",
          drawBorder: false,
        },
      },
    },
  };

  const [compSource, setCompSource] = useState({
    name: "Oil Furnace",
    multiplier: 1.42,
    costPerUnit: 4.26,
  });

  const chartData = {
    labels: ["1 Year", "2 Years", "3 Years", "5 Years", "10 Years", "15 Years"],
    datasets: [
      {
        label: name,
        backgroundColor: "rgb(30,144,255)",
        borderColor: "rgb(30,144,255)",
        data: [
          Math.floor(pumpEfficencyMultiplier(selPumpIndex, 1522, estLoad)),
          Math.floor(pumpEfficencyMultiplier(selPumpIndex, 3089, estLoad)),
          Math.floor(pumpEfficencyMultiplier(selPumpIndex, 4500, estLoad)),
          Math.floor(pumpEfficencyMultiplier(selPumpIndex, 7500, estLoad)),
          Math.floor(pumpEfficencyMultiplier(selPumpIndex, 15000, estLoad)),
          Math.floor(pumpEfficencyMultiplier(selPumpIndex, 22500, estLoad)),
        ],
      },
      {
        label: compSource.name,
        backgroundColor: "rgb(255,0,0)",
        borderColor: "rgb(255,0,0)",
        data: [
          Math.floor(compareSourceMultiplier(1108, compSource.multiplier, estLoad)),
          Math.floor(compareSourceMultiplier(2223, compSource.multiplier, estLoad)),
          Math.floor(compareSourceMultiplier(3643, compSource.multiplier, estLoad)),
          Math.floor(compareSourceMultiplier(7128, compSource.multiplier, estLoad)),
          Math.floor(compareSourceMultiplier(14009, compSource.multiplier, estLoad)),
          Math.floor(compareSourceMultiplier(23052, compSource.multiplier, estLoad)),
        ],
      },
    ],
  };
  return (
    <div className="shadow-2xl p-4 border-2 border-green-500 m-5 h-full flex justify-around">
      <div className="w-1/4">
        <h2>Comparison Source</h2>
        <label className="text-xl mr-1" htmlFor="oil">
          Oil
        </label>
        <RadioButton
          className="mr-4"
          inputId="oil"
          name="oil"
          onChange={() =>
            setCompSource({
              name: "Oil Furnace",
              multiplier: 1.42,
              costPerUnit: 4.26,
            })
          }
          checked={compSource.name === "Oil Furnace"}
        />
        <label className="text-xl mr-1" htmlFor="electric">
          Electric
        </label>
        <RadioButton
          className="mr-4"
          inputId="electric"
          name="electric"
          onChange={() =>
            setCompSource({
              name: "Electric",
              multiplier: 1.55,
              costPerUnit: 0.27,
            })
          }
          checked={compSource.name === "Electric"}
        />
        <label className="text-xl mr-1" htmlFor="propane">
          Propane
        </label>
        <RadioButton
          inputId="propane"
          name="propane"
          onChange={() =>
            setCompSource({
              name: "Propane",
              multiplier: 1.85,
              costPerUnit: 3.7,
            })
          }
          checked={compSource.name === "Propane"}
        />
      </div>

      <div className="p-3">
        <h2>Estimated Savings</h2>
        <p className="text-xl">
          1 Year -${" "}
          {chartData.datasets[1].data[0] - chartData.datasets[0].data[0]}
        </p>
        <p className="text-xl">
          2 Years -${" "}
          {chartData.datasets[1].data[1] - chartData.datasets[0].data[1]}
        </p>
        <p className="text-xl">
          3 Years -${" "}
          {chartData.datasets[1].data[2] - chartData.datasets[0].data[2]}
        </p>
        <p className="text-xl">
          5 Years -${" "}
          {chartData.datasets[1].data[3] - chartData.datasets[0].data[3]}
        </p>
        <p className="text-xl">
          10 Years -${" "}
          {chartData.datasets[1].data[4] - chartData.datasets[0].data[4]}
        </p>
        <p className="text-xl">
          15 Years -${" "}
          {chartData.datasets[1].data[5] - chartData.datasets[0].data[5]}
        </p>
      </div>

      <Chart
        type="bar"
        data={chartData}
        options={chartOptions}
        className="w-1/2 h-full"
      />
    </div>
  );
};

export default PumpChart;
