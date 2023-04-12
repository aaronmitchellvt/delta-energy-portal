-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "projName" TEXT NOT NULL,
    "projAddress" TEXT NOT NULL,
    "projCity" TEXT NOT NULL,
    "projState" TEXT NOT NULL,
    "projSqFt" INTEGER NOT NULL,
    "projHeight" INTEGER NOT NULL,
    "projNumOccupants" INTEGER NOT NULL,
    "projNumWindows" INTEGER NOT NULL,
    "projNumExteriorDoors" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
