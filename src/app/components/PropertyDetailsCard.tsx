import React from 'react'


interface IDetails {
  projName: string
  projAddress: string,
  projState: string,
  projCity: string
  projSqFt: number,
  projHeight: number,
  projNumOccupants: number,
  projNumWindows: number,
  projNumExteriorDoors: number
}
const PropertyDetailsCard: React.FC<any> = (props) => {
  const details: IDetails = props.details;
  const estLoad = props.estimatedLoad;
  const calcdCubicFeet = details.projHeight * details.projSqFt
  return (
    <div className="p-3 w-full shadow-xl">
      <h2>Project: {details.projName}</h2>
      <p>Cubic Feet - {calcdCubicFeet}</p>
      <p># Occupants - {details.projNumOccupants}</p>
      <p># Windows - {details.projNumWindows}</p>
      <p># Exterior Doors - {details.projNumExteriorDoors}</p>
      <p className="font-semibold">Estimated HVAC Load - {estLoad}</p>
    </div>
  )
}

export default PropertyDetailsCard