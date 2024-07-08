// const schema = `#graphql 
//  type Query {
//     me: String!
//  }


// `

// export default schema; 


const schema = `#graphql

 interface Character { 
  name: String!
  outfit: String! 
  gameStats: Int! 
 }

 type Person implements Character { 
  name: String! 
  outfit: String! 
  gameStats: Int! 

  backgroungStory: String! 
 }

 type Alien implements Character { 
    name: String! 
    outfit:String! 
    gameStats: Int! 

    homeWorld: String! 
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

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  memberDetails: MemberDetails
  voluntaryRiskBenefit: VoluntaryRiskBenefit
  previousPaidUpBenefits: PreviousPaidUpBenefits
  investmentSelection: InvestmentSelection
  beneficiaryNomination: BeneficiaryNomination
}

type MemberDetails {
  id: ID!
  surname: String!
  firstName: String!
  identityPassportNumber: String!
  dateOfBirth: String!
  maritalStatus: MaritalStatus!
  gender: Gender!
  taxReferenceNumber: String!
  emailAddress: String!
  mobileNumber: String!
  alternateTelephoneNumber: String!
  physicalAddress: Address!
  postalAddress: Address!
  healthDetails: String
  user: User!
}

type Address {
  id: ID!
  street: String!
  city: String!
  province: String!
  code: String!
  memberDetailsPhysical: [MemberDetails!]!
  memberDetailsPostal: [MemberDetails!]!
}

type VoluntaryRiskBenefit {
  id: ID!
  spousePensionSelected: Boolean!
  childrenPensionSelected: Boolean!
  user: User!
}

type PreviousPaidUpBenefits {
  id: ID!
  hasPaidUpCertificates: Boolean!
  certificatesLeftInOriginalFund: Boolean!
  certificatesTransferredToUWRF: Boolean!
  fundNames: [String!]!
  user: User!
}

type InvestmentSelection {
  id: ID!
  currentAccruedBenefits: [InvestmentDistribution!]!
  futureContributions: [InvestmentDistribution!]!
  user: User!
}

type InvestmentDistribution {
  id: ID!
  portfolioName: String!
  percentage: Float!
  investmentSelectionCurrent: InvestmentSelection
  investmentSelectionFuture: InvestmentSelection
}

type BeneficiaryNomination {
  id: ID!
  fundDetails: String!
  beneficiaries: [Beneficiary!]!
  funeralRecipients: [FuneralRecipient!]!
  declarationAccepted: Boolean!
  user: User!
}

type Beneficiary {
  id: ID!
  title: String!
  initials: String!
  firstNames: String!
  surname: String!
  idNumber: String!
  passportNumber: String!
  passportCountry: String!
  telephone: String!
  address: String!
  financiallyDependent: Boolean!
  beneficiaryNomination: BeneficiaryNomination!
}

type FuneralRecipient {
  id: ID!
  surname: String!
  firstName: String!
  relationship: String!
  dob: String!
  beneficiaryNomination: BeneficiaryNomination!
}

type Query {
  getUser(id: ID!): User
  characters: [Character!]!
  getMemberDetails(id: ID!): MemberDetails
  getVoluntaryRiskBenefit(id: ID!): VoluntaryRiskBenefit
  getPreviousPaidUpBenefits(id: ID!): PreviousPaidUpBenefits
  getInvestmentSelection(id: ID!): InvestmentSelection
  getBeneficiaryNomination(id: ID!): BeneficiaryNomination
}

type Mutation {
  createUser(email: String!, password: String!, name: String!): User!
  updateUser(id: ID!, email: String, password: String, name: String): User!
  
  createMemberDetails(input: MemberDetailsInput!): MemberDetails!
  updateMemberDetails(id: ID!, input: MemberDetailsInput!): MemberDetails!

  createAddress(input: AddressInput!): Address!
  updateAddress(id: ID!, input: AddressInput!): Address!

  createVoluntaryRiskBenefit(input: VoluntaryRiskBenefitInput!): VoluntaryRiskBenefit!
  updateVoluntaryRiskBenefit(id: ID!, input: VoluntaryRiskBenefitInput!): VoluntaryRiskBenefit!

  createPreviousPaidUpBenefits(input: PreviousPaidUpBenefitsInput!): PreviousPaidUpBenefits!
  updatePreviousPaidUpBenefits(id: ID!, input: PreviousPaidUpBenefitsInput!): PreviousPaidUpBenefits!

  createInvestmentSelection(input: InvestmentSelectionInput!): InvestmentSelection!
  updateInvestmentSelection(id: ID!, input: InvestmentSelectionInput!): InvestmentSelection!

  createBeneficiaryNomination(input: BeneficiaryNominationInput!): BeneficiaryNomination!
  updateBeneficiaryNomination(id: ID!, input: BeneficiaryNominationInput!): BeneficiaryNomination!

  createBeneficiary(input: BeneficiaryInput!): Beneficiary!
  updateBeneficiary(id: ID!, input: BeneficiaryInput!): Beneficiary!

  createFuneralRecipient(input: FuneralRecipientInput!): FuneralRecipient!
  updateFuneralRecipient(id: ID!, input: FuneralRecipientInput!): FuneralRecipient!
}

input MemberDetailsInput {
  surname: String!
  firstName: String!
  identityPassportNumber: String!
  dateOfBirth: String!
  maritalStatus: MaritalStatus!
  gender: Gender!
  taxReferenceNumber: String!
  emailAddress: String!
  mobileNumber: String!
  alternateTelephoneNumber: String!
  physicalAddress: AddressInput!
  postalAddress: AddressInput!
  healthDetails: String
  userId: ID!
}

input AddressInput {
  street: String!
  city: String!
  province: String!
  code: String!
}

input VoluntaryRiskBenefitInput {
  spousePensionSelected: Boolean!
  childrenPensionSelected: Boolean!
  userId: ID!
}

input PreviousPaidUpBenefitsInput {
  hasPaidUpCertificates: Boolean!
  certificatesLeftInOriginalFund: Boolean!
  certificatesTransferredToUWRF: Boolean!
  fundNames: [String!]!
  userId: ID!
}

input InvestmentSelectionInput {
  currentAccruedBenefits: [InvestmentDistributionInput!]!
  futureContributions: [InvestmentDistributionInput!]!
  userId: ID!
}

input InvestmentDistributionInput {
  portfolioName: String!
  percentage: Float!
}

input BeneficiaryNominationInput {
  fundDetails: String!
  beneficiaries: [BeneficiaryInput!]!
  funeralRecipients: [FuneralRecipientInput!]!
  declarationAccepted: Boolean!
  userId: ID!
}

input BeneficiaryInput {
  title: String!
  initials: String!
  firstNames: String!
  surname: String!
  idNumber: String!
  passportNumber: String!
  passportCountry: String!
  telephone: String!
  address: String!
  financiallyDependent: Boolean!
}

input FuneralRecipientInput {
  surname: String!
  firstName: String!
  relationship: String!
  dob: String!
}

`

export default schema
