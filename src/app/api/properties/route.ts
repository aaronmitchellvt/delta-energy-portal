import { NextResponse } from 'next/server';
import { db } from '../../../../lib/prisma';

export async function GET(request: Request) {
  const properties = await db.property.findMany();
  return NextResponse.json({ propertiesList: properties, isOk: true})
}


export async function POST(request: Request) {
  const { propAddress, propClientName, propClientPhone, propSqFt,
  propHeight, propNumOccupants, propNumWindows, propNumExteriorDoors } = await request.json();
  console.log("Body: ", propAddress);

  const property = await db.property.create({
    data: {
      propAddress,
      propClientName,
      propClientPhone,
      propSqFt,
      propHeight,
      propNumOccupants,
      propNumWindows,
      propNumExteriorDoors
    }
  })
  console.log("Property: ", property);

  return NextResponse.json({ addedProperty: property, isOk: true})
}