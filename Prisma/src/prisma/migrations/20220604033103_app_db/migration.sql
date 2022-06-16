-- CreateTable
CREATE TABLE "User" (
    "idUser" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "Credits" (
    "idCredit" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "Credit" INTEGER NOT NULL,

    CONSTRAINT "Credits_pkey" PRIMARY KEY ("idCredit")
);

-- CreateTable
CREATE TABLE "Schools" (
    "idSchool" SERIAL NOT NULL,
    "nameSchool" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "Schools_pkey" PRIMARY KEY ("idSchool")
);

-- CreateTable
CREATE TABLE "Boats" (
    "idBoat" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "price" INTEGER NOT NULL,
    "schoolId" INTEGER NOT NULL,

    CONSTRAINT "Boats_pkey" PRIMARY KEY ("idBoat")
);

-- CreateTable
CREATE TABLE "Bookings" (
    "idBooking" SERIAL NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "boatId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Bookings_pkey" PRIMARY KEY ("idBooking")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Credits" ADD CONSTRAINT "Credits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Boats" ADD CONSTRAINT "Boats_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "Schools"("idSchool") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_boatId_fkey" FOREIGN KEY ("boatId") REFERENCES "Boats"("idBoat") ON DELETE RESTRICT ON UPDATE CASCADE;
