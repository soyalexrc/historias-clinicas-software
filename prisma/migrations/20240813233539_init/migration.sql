-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "sequence" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "sex" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attention" (
    "id" TEXT NOT NULL,
    "sequence" SERIAL NOT NULL,
    "patientId" TEXT NOT NULL,
    "ticketId" INTEGER NOT NULL,

    CONSTRAINT "Attention_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "cidDetail" TEXT NOT NULL,
    "cidItem" TEXT NOT NULL,
    "ccodProdServItem" TEXT NOT NULL,
    "cdescriptItem" TEXT NOT NULL,
    "cindicadoPsItem" TEXT NOT NULL,
    "cvalorVentaUnitaria" TEXT NOT NULL,
    "cprecioVentaUnitarioItem" TEXT NOT NULL,
    "ccantidadItem" TEXT NOT NULL,
    "cValorItem" TEXT NOT NULL,
    "cigvTotalItem" TEXT NOT NULL,
    "ctotalItem" TEXT NOT NULL,
    "ccodSunatProdServItem" TEXT NOT NULL,
    "ccodComercialProdServ" TEXT NOT NULL,
    "cid" TEXT NOT NULL,
    "cfecEd" TEXT NOT NULL,
    "ctipDocEmisor" TEXT NOT NULL,
    "capaminoRazonSocialEmisor" TEXT NOT NULL,
    "cubigeoEmisor" TEXT NOT NULL,
    "cdireccionEmisor" TEXT NOT NULL,
    "cdepartamentoEmisor" TEXT NOT NULL,
    "cprovinciaEmisor" TEXT NOT NULL,
    "cdistritoEmisor" TEXT NOT NULL,
    "cnombreComercialEmisor" TEXT NOT NULL,
    "cTipDoc" TEXT NOT NULL,
    "cnroSerie" TEXT NOT NULL,
    "cnroDoc" TEXT NOT NULL,
    "cinfoDocAdquiriente" TEXT NOT NULL,
    "ctipDocAdquiriente" TEXT NOT NULL,
    "capaminoRazonSocialAdquiriente" TEXT NOT NULL,
    "cmoneda" TEXT NOT NULL,
    "ctotalOperacionesGrav" TEXT NOT NULL,
    "cmontoTotalIgv" TEXT NOT NULL,
    "cmontoTotalPagar" TEXT NOT NULL,
    "cmontoTotalPercep" TEXT NOT NULL,
    "cleyenda" TEXT NOT NULL,
    "cfecCreaFace" TEXT NOT NULL,
    "ccodigoBarras" TEXT NOT NULL,
    "ccodigpQr" TEXT NOT NULL,
    "isValidated" BOOLEAN,
    "validatesDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "valitadedBy" TEXT,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Attention_ticketId_key" ON "Attention"("ticketId");

-- AddForeignKey
ALTER TABLE "Attention" ADD CONSTRAINT "Attention_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attention" ADD CONSTRAINT "Attention_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
