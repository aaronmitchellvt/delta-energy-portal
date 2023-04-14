import React from "react";

interface IDetails {
  projName: string;
  projAddress: string;
  projState: string;
  projCity: string;
  projSqFt: number;
  projHeight: number;
  projNumOccupants: number;
  projNumWindows: number;
  projNumExteriorDoors: number;
}
const PropertyDetailsCard: React.FC<any> = (props) => {
  const details: IDetails = props.details;
  const estLoad = props.estimatedLoad;
  const calcdCubicFeet = details.projHeight * details.projSqFt;
  return (
    <div className="p-3">
      <h1>Project: {details.projName}</h1>
      <div className="h-72 p-3 w-full shadow-xl">
        <p className="text-xl">Cubic Feet - {calcdCubicFeet}</p>
        <p className="text-xl"># Occupants - {details.projNumOccupants}</p>
        <p className="text-xl"># Windows - {details.projNumWindows}</p>
        <p className="text-xl">
          # Exterior Doors - {details.projNumExteriorDoors}
        </p>
        <p className="text-lg font-semibold">Estimated HVAC Load - {estLoad} BTU</p>
        {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Edit Project
        </button> */}
      </div>
    </div>
  );
};

export default PropertyDetailsCard;
