import { NextResponse } from "next/server";
import { db } from "../../../../lib/prisma";

const heatPumps = [
  {
    name: "Air Quest 4 Ton",
    estLoadHandled: 48000,
    seer: 14,
    cost: 3737,
    model: "R4H448GKC / FEM4X4800BL",
    link: "https://hvacdirect.com/4-ton-14-seer-airquest-heat-pump-with-air-handler-id82757.html?utm_source=%7Bgoogle%7D&utm_medium=%7Bcpc%7D&utm_campaign=2048347179&adgroupid=120552970799&utm_content=516416425839&utm_term=&gclid=CjwKCAjwitShBhA6EiwAq3RqA7jJo5cCRqd1S58KQtCEIwBFmSH-q7zJubfKw0ijS4_evx1mJdTf0hoC7NAQAvD_BwE",
    imgUrl: "https://hvacdirect.com/media/catalog/product/r/4/r4h4-fem4x.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
  },
  {
    name: "ACiQ Variable Speed 3 Ton",
    estLoadHandled: 36000,
    seer: 18,
    cost: 3150,
    model: "ACiQ-36-AHB / ACiQ-36-HPB",
    link: "https://hvacdirect.com/aciq-3-ton-central-heat-pump-aciq-36.html?utm_source=%7Bgoogle%7D&utm_medium=%7Bcpc%7D&utm_campaign=2048347179&adgroupid=120552970799&utm_content=516416425839&utm_term=&gclid=CjwKCAjwitShBhA6EiwAq3RqA7mM3JgzIpBhxLWMYLFE3gBEpUEwrn8okQWqgwD_eUy4mBdiJNHc5RoCRpUQAvD_BwE",
    imgUrl: "https://hvacdirect.com/media/catalog/product/n/e/next-gen-split_7.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
  },
  {
    name: "ACiQ Variable Speed 2 Ton",
    estLoadHandled: 24000,
    seer: 20,
    cost: 3049,
    model: "ACiQ-24-AHB / ACiQ-24-HPB",
    link: "https://hvacdirect.com/aciq-2-ton-central-heat-pump-aciq-24.html?utm_source=%7Bgoogle%7D&utm_medium=%7Bcpc%7D&utm_campaign=2048347179&adgroupid=120552970799&utm_content=516416425839&utm_term=&gclid=CjwKCAjwitShBhA6EiwAq3RqA34SoSlecux_ha7zQL9ySv2BCHf_DvWBU53rJXDjNdx_RRwUfBusCBoCl84QAvD_BwE",
    imgUrl: "https://hvacdirect.com/media/catalog/product/a/c/aciq_unitary_system_.central-2-greylogo_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
  },
  {
    name: "ACiQ Variable Speed 5 Ton",
    estLoadHandled: 60000,
    seer: 15.3,
    cost: 4405,
    model: "ACiQ-60-AHB / ACiQ-60-HPB",
    link: "https://hvacdirect.com/aciq-5-ton-central-heat-pump-aciq-60-id-128208.html",
    imgUrl: "https://hvacdirect.com/media/catalog/product/n/e/next-gen-split_3.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
  },
  {
    name: "Air Quest 3.5 Ton",
    estLoadHandled: 42000,
    seer: 14,
    cost: 3215,
    model: "R4H442GKC / FEM4X4200BL",
    link: "https://hvacdirect.com/3-5-ton-14-seer-airquest-heat-pump-with-air-handler-id82755.html?utm_source=%7Bgoogle%7D&utm_medium=%7Bcpc%7D&utm_campaign=2048347179&adgroupid=120552970799&utm_content=516416425839&utm_term=&gclid=CjwKCAjwitShBhA6EiwAq3RqA9A4ZyrvoXlawZg5qPBrGvrYiRY5wrga8RFbOtMSG1nz03yN-gVcLRoCvNYQAvD_BwE",
    imgUrl: "https://hvacdirect.com/media/catalog/product/r/4/r4h4-fem4x.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
  },
  {
    name: "Goodman 1.5 Ton",
    estLoadHandled: 18000,
    seer: 14,
    cost: 2544,
    model: "GSZ140181 / ARUF25B14",
    link: "https://hvacdirect.com/goodman-1-5-ton-14-seer-heat-pump-air-conditioner-system-id14172.html?srsltid=AfAwrE74wTVoFLbrsX40fnugafUcWAQSUssL0EOvmLRWJGkIu-B1_vb5d0Y",
    imgUrl: "https://hvacdirect.com/media/catalog/product/h/e/heat-pump-package_4.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:"
  },
  {
    name: "Mitsubishi Mult-Positional 1 Ton",
    estLoadHandled: 12000,
    seer: 18,
    cost: 2562,
    model: "SVZ-KP12NA / SUZ-KA12NA2",
    link: "https://hvacdirect.com/mitsubishi-svz-ka12na2-12-000-btu-18-seer-ductless-mini-split-heat-pump.html",
    imgUrl: "https://hvacdirect.com/media/catalog/product/s/v/svz-12.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg"
  },
];

export async function POST(request: Request) {
  const { projectId } = await request.json();
  const project = await db.project.findUnique({
    where: {
      id: projectId,
    },
  });
  const cubicFeetLoad = project?.projHeight! * project?.projSqFt!;
  const occupantLoad = project?.projNumOccupants! * 100;
  const doorLoad = project?.projNumExteriorDoors! * 1000;
  const windowLoad = project?.projNumWindows! * 100;

  const estimatedHVACLoad =
    cubicFeetLoad + occupantLoad + doorLoad + windowLoad;

  // replace with getRecHeatPumps fn, implement logic
  const reccommendedHeatPumps = [heatPumps[0], heatPumps[1], heatPumps[2]];
  return NextResponse.json({
    project: project,
    estimatedLoad: estimatedHVACLoad,
    reccommendedHeatPumps: reccommendedHeatPumps,
    isOk: true,
  });
}
