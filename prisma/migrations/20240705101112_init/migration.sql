-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MemberDetails" (
    "id" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "identityPassportNumber" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "maritalStatus" "MaritalStatus" NOT NULL,
    "gender" "Gender" NOT NULL,
    "taxReferenceNumber" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "alternateTelephoneNumber" TEXT NOT NULL,
    "healthDetails" TEXT,
    "userId" TEXT NOT NULL,
    "physicalAddressId" TEXT NOT NULL,
    "postalAddressId" TEXT NOT NULL,

    CONSTRAINT "MemberDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VoluntaryRiskBenefit" (
    "id" TEXT NOT NULL,
    "spousePensionSelected" BOOLEAN NOT NULL,
    "childrenPensionSelected" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "VoluntaryRiskBenefit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreviousPaidUpBenefits" (
    "id" TEXT NOT NULL,
    "hasPaidUpCertificates" BOOLEAN NOT NULL,
    "certificatesLeftInOriginalFund" BOOLEAN NOT NULL,
    "certificatesTransferredToUWRF" BOOLEAN NOT NULL,
    "fundNames" TEXT[],
    "userId" TEXT NOT NULL,

    CONSTRAINT "PreviousPaidUpBenefits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestmentSelection" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "InvestmentSelection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestmentDistribution" (
    "id" TEXT NOT NULL,
    "portfolioName" TEXT NOT NULL,
    "percentage" DOUBLE PRECISION NOT NULL,
    "investmentSelectionCurrentId" TEXT,
    "investmentSelectionFutureId" TEXT,

    CONSTRAINT "InvestmentDistribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BeneficiaryNomination" (
    "id" TEXT NOT NULL,
    "fundDetails" TEXT NOT NULL,
    "declarationAccepted" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "BeneficiaryNomination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beneficiary" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "initials" TEXT NOT NULL,
    "firstNames" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "passportNumber" TEXT NOT NULL,
    "passportCountry" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "financiallyDependent" BOOLEAN NOT NULL,
    "beneficiaryNominationId" TEXT NOT NULL,

    CONSTRAINT "Beneficiary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuneralRecipient" (
    "id" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "relationship" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "beneficiaryNominationId" TEXT NOT NULL,

    CONSTRAINT "FuneralRecipient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MemberDetails_userId_key" ON "MemberDetails"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "VoluntaryRiskBenefit_userId_key" ON "VoluntaryRiskBenefit"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PreviousPaidUpBenefits_userId_key" ON "PreviousPaidUpBenefits"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "InvestmentSelection_userId_key" ON "InvestmentSelection"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "BeneficiaryNomination_userId_key" ON "BeneficiaryNomination"("userId");

-- AddForeignKey
ALTER TABLE "MemberDetails" ADD CONSTRAINT "MemberDetails_physicalAddressId_fkey" FOREIGN KEY ("physicalAddressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberDetails" ADD CONSTRAINT "MemberDetails_postalAddressId_fkey" FOREIGN KEY ("postalAddressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberDetails" ADD CONSTRAINT "MemberDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoluntaryRiskBenefit" ADD CONSTRAINT "VoluntaryRiskBenefit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PreviousPaidUpBenefits" ADD CONSTRAINT "PreviousPaidUpBenefits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestmentSelection" ADD CONSTRAINT "InvestmentSelection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestmentDistribution" ADD CONSTRAINT "InvestmentDistribution_investmentSelectionCurrentId_fkey" FOREIGN KEY ("investmentSelectionCurrentId") REFERENCES "InvestmentSelection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestmentDistribution" ADD CONSTRAINT "InvestmentDistribution_investmentSelectionFutureId_fkey" FOREIGN KEY ("investmentSelectionFutureId") REFERENCES "InvestmentSelection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BeneficiaryNomination" ADD CONSTRAINT "BeneficiaryNomination_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beneficiary" ADD CONSTRAINT "Beneficiary_beneficiaryNominationId_fkey" FOREIGN KEY ("beneficiaryNominationId") REFERENCES "BeneficiaryNomination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuneralRecipient" ADD CONSTRAINT "FuneralRecipient_beneficiaryNominationId_fkey" FOREIGN KEY ("beneficiaryNominationId") REFERENCES "BeneficiaryNomination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
