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

  return (
    <div className="p-3">
      <h1>Reccomended pumps</h1>
      <div className="flex flex-row ">
        {pumps.map((pump: Pump) => {
          return (
            <div
              key={pump.link.toString()}
              className="w-1/4 rounded-md shadow-xl p-3 m-3"
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

const PumpCard = (
  name: string,
  estLoad: Number,
  cost: Number,
  url: string,
  imgUrl: string
) => {
  return (
    <div className="w-1/3 rounded-md shadow-md p-3">
      <Image src={imgUrl} alt="Picture of heat pump" width={75} height={75} />
      <h3>{name}</h3>
      <p>$ {cost.toString()}</p>
      <p>{estLoad.toString()} BTUs</p>
      <Link href={url}>Visit</Link>
    </div>
  );
};
