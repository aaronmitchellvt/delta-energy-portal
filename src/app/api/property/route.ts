import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

const heatPumps = [
  {
    name: "Air Quest 4 Ton",
    estLoadHandled: 48000,
    seer: 14,
    cost: 3737,
    model: "R4H448GKC / FEM4X4800BL",
  },
  {
    name: "ACiQ Variable Speed 3 Ton",
    estLoadHandled: 36000,
    seer: 18,
    cost: 3150,
    model: "ACiQ-36-AHB / ACiQ-36-HPB",
  },
  {
    name: "ACiQ Variable Speed 2 Ton",
    estLoadHandled: 24000,
    seer: 20,
    cost: 3049,
    model: "ACiQ-24-AHB / ACiQ-24-HPB",
  },
  {
    name: "ACiQ Variable Speed 5 Ton",
    estLoadHandled: 60000,
    seer: 15.3,
    cost: 4405,
    model: "ACiQ-60-AHB / ACiQ-60-HPB",
  },
  {
    name: "Air Quest 3.5 Ton",
    estLoadHandled: 42000,
    seer: 14,
    cost: 3215,
    model: "R4H442GKC / FEM4X4200BL",
  },
  {
    name: "Goodman 1.5 Ton",
    estLoadHandled: 18000,
    seer: 14,
    cost: 2544,
    model: "GSZ140181 / ARUF25B14",
  },
  {
    name: "Mitsubishi Mult-Positional 1 Ton",
    estLoadHandled: 12000,
    seer: 18,
    cost: 2562,
    model: "SVZ-KP12NA / SUZ-KA12NA2",
  },
];

export async function POST(request: Request) {
  const { propertyId } = await request.json();
  const property = await prisma.property.findUnique({
    where: {
      id: propertyId,
    },
  });
  console.log("selectedProperty: ", property);
  const cubicFeetLoad = property?.propHeight! * property?.propSqFt!;
  const occupantLoad = property?.propNumOccupants! * 100;
  const doorLoad = property?.propNumExteriorDoors! * 1000;
  const windowLoad = property?.propNumWindows! * 100;

  const estimatedHVACLoad =
    cubicFeetLoad + occupantLoad + doorLoad + windowLoad;

  // replace with getRecHeatPumps fn, implement logic
  const reccommendedHeatPumps = [heatPumps[0], heatPumps[1], heatPumps[2]];
  return NextResponse.json({
    property: property,
    estimatedLoad: estimatedHVACLoad,
    reccommendedHeatPumps: reccommendedHeatPumps,
    isOk: true,

  });
}
