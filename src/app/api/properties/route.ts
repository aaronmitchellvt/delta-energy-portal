import { NextResponse } from "next/server";
import { db } from "../../../../lib/prisma";

export async function GET(request: Request) {
  const projects = await db.project.findMany();
  return NextResponse.json({ projectList: projects, isOk: true });
}

export async function POST(request: Request) {
  const {
    projName,
    projAddress,
    projState,
    projCity,
    projSqFt,
    projHeight,
    projNumOccupants,
    projNumWindows,
    projNumExteriorDoors,
  } = await request.json();

  const project = await db.project.create({
    data: {
      projName,
      projAddress,
      projState,
      projCity,
      projSqFt,
      projHeight,
      projNumOccupants,
      projNumWindows,
      projNumExteriorDoors,
    },
  });

  return NextResponse.json({ addedProject: project, isOk: true });
}
