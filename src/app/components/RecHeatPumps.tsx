import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Pump {
  name: String;
  estLoadHandled: Number;
  seer: Number;
  cost: Number;
  model: String;
  link: string;
  imgUrl: string;
}

const RecHeatPumps: React.FC<any> = (props) => {
  const pumps = props.reccommendedHeatPumps;
  const selectedPump = props.selectedPump

  return (
    <div className="p-3 h-96">
      <h1 className="ml-3">Reccomended pumps</h1>
      <div className="flex flex-row ">
        {pumps.map((pump: Pump, index: number) => {
          return (
            <div
              key={pump.link.toString()}
              className={`w-1/3 rounded-md p-3 m-3 ${selectedPump === index ? `bg-green-100 shadow-sm` : `shadow-xl`}`}
            >
              <Image
                src={pump.imgUrl}
                alt="Picture of heat pump"
                width={125}
                height={125}
              />
              <h3 className="text-xl">{pump.name}</h3>
              <p className="text-md font-semibold">${pump.cost.toString()}</p>
              <p className="text-md font-semibold">{pump.estLoadHandled.toString()} BTU Rated</p>
              <Link href={pump.link}>Visit</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecHeatPumps;
