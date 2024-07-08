generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum Gender {
  MALE
  FEMALE
  OTHER
}

enum MaritalStatus {
  SINGLE
  MARRIED
  DIVORCED
  WIDOWED
}

model User {
  id                       String                  @id @default(uuid())
  email                    String                  @unique
  password                 String
  name                     String
  memberDetails            MemberDetails?
  voluntaryRiskBenefit     VoluntaryRiskBenefit?
  previousPaidUpBenefits   PreviousPaidUpBenefits?
  investmentSelection      InvestmentSelection?
  beneficiaryNomination    BeneficiaryNomination?
}

model MemberDetails {
  id                       String     @id @default(uuid())
  surname                  String
  firstName                String
  identityPassportNumber   String
  dateOfBirth              DateTime
  maritalStatus            MaritalStatus
  gender                   Gender
  taxReferenceNumber       String
  emailAddress             String
  mobileNumber             String
  alternateTelephoneNumber String
  physicalAddress          Address    @relation("PhysicalAddress", fields: [physicalAddressId], references: [id])
  postalAddress            Address    @relation("PostalAddress", fields: [postalAddressId], references: [id])
  healthDetails            String?
  userId                   String     @unique
  user                     User       @relation(fields: [userId], references: [id])

  physicalAddressId        String
  postalAddressId          String
}

model Address {
  id      String   @id @default(uuid())
  street  String
  city    String
  province String
  code    String
  physicalAddressMemberDetails MemberDetails[] @relation("PhysicalAddress")
  postalAddressMemberDetails MemberDetails[] @relation("PostalAddress")
}

model VoluntaryRiskBenefit {
  id                      String    @id @default(uuid())
  spousePensionSelected   Boolean
  childrenPensionSelected Boolean
  userId                  String    @unique
  user                    User      @relation(fields: [userId], references: [id])
}

model PreviousPaidUpBenefits {
  id                           String    @id @default(uuid())
  hasPaidUpCertificates        Boolean
  certificatesLeftInOriginalFund Boolean
  certificatesTransferredToUWRF Boolean
  fundNames                    String[]
  userId                       String    @unique
  user                         User      @relation(fields: [userId], references: [id])
}

model InvestmentSelection {
  id                      String                    @id @default(uuid())
  currentAccruedBenefits  InvestmentDistribution[]  @relation("CurrentAccruedBenefits")
  futureContributions     InvestmentDistribution[]  @relation("FutureContributions")
  userId                  String                    @unique
  user                    User                      @relation(fields: [userId], references: [id])
}

model InvestmentDistribution {
  id                     String    @id @default(uuid())
  portfolioName          String
  percentage             Float
  investmentSelection    InvestmentSelection @relation(fields: [investmentSelectionId], references: [id])
  investmentSelectionId  String
}

model BeneficiaryNomination {
  id                      String    @id @default(uuid())
  fundDetails             String
  beneficiaries           Beneficiary[]
  funeralRecipients       FuneralRecipient[]
  declarationAccepted     Boolean
  userId                  String    @unique
  user                    User      @relation(fields: [userId], references: [id])
}

model Beneficiary {
  id                      String    @id @default(uuid())
  title                   String
  initials                String
  firstNames              String
  surname                 String
  idNumber                String
  passportNumber          String
  passportCountry         String
  telephone               String
  address                 String
  financiallyDependent    Boolean
  beneficiaryNomination   BeneficiaryNomination @relation(fields: [beneficiaryNominationId], references: [id])
  beneficiaryNominationId String
}

model FuneralRecipient {
  id                      String    @id @default(uuid())
  surname                 String
  firstName               String
  relationship            String
  dob                     DateTime
  beneficiaryNomination   BeneficiaryNomination @relation(fields: [beneficiaryNominationId], references: [id])
  beneficiaryNominationId String
}
