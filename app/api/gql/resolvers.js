import prisma from '../../../db/prisma'; 

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      return await prisma.user.findUnique({
        where: { id },
        include: {
          memberDetails: true,
          voluntaryRiskBenefit: true,
          previousPaidUpBenefits: true,
          investmentSelection: {
            include: {
              currentAccruedBenefits: true,
              futureContributions: true,
            },
          },
          beneficiaryNomination: {
            include: {
              beneficiaries: true,
              funeralRecipients: true,
            },
          },
        },
      });
    },
    getMemberDetails: async (_, { id }) => {
      return await prisma.memberDetails.findUnique({
        where: { id },
      });
    },
    getVoluntaryRiskBenefit: async (_, { id }) => {
      return await prisma.voluntaryRiskBenefit.findUnique({
        where: { id },
      });
    },
    getPreviousPaidUpBenefits: async (_, { id }) => {
      return await prisma.previousPaidUpBenefits.findUnique({
        where: { id },
      });
    },
    getInvestmentSelection: async (_, { id }) => {
      return await prisma.investmentSelection.findUnique({
        where: { id },
        include: {
          currentAccruedBenefits: true,
          futureContributions: true,
        },
      });
    },
    getBeneficiaryNomination: async (_, { id }) => {
      return await prisma.beneficiaryNomination.findUnique({
        where: { id },
        include: {
          beneficiaries: true,
          funeralRecipients: true,
        },
      });
    },
  },
  Mutation: {
    createUser: async (_, { email, password, name }) => {
      return await prisma.user.create({
        data: { email, password, name },
      });
    },
    updateUser: async (_, { id, email, password, name }) => {
      return await prisma.user.update({
        where: { id },
        data: { email, password, name },
      });
    },
    createMemberDetails: async (_, { input }) => {
      const { physicalAddress, postalAddress, userId, ...memberDetails } = input;
      const physicalAddressData = await prisma.address.create({ data: physicalAddress });
      const postalAddressData = await prisma.address.create({ data: postalAddress });

      return await prisma.memberDetails.create({
        data: {
          ...memberDetails,
          userId,
          physicalAddressId: physicalAddressData.id,
          postalAddressId: postalAddressData.id,
        },
      });
    },
    updateMemberDetails: async (_, { id, input }) => {
      const { physicalAddress, postalAddress, ...memberDetails } = input;

      await prisma.address.update({
        where: { id: physicalAddress.id },
        data: physicalAddress,
      });
      await prisma.address.update({
        where: { id: postalAddress.id },
        data: postalAddress,
      });

      return await prisma.memberDetails.update({
        where: { id },
        data: memberDetails,
      });
    },
    createVoluntaryRiskBenefit: async (_, { input }) => {
      return await prisma.voluntaryRiskBenefit.create({ data: input });
    },
    updateVoluntaryRiskBenefit: async (_, { id, input }) => {
      return await prisma.voluntaryRiskBenefit.update({
        where: { id },
        data: input,
      });
    },
    createPreviousPaidUpBenefits: async (_, { input }) => {
      return await prisma.previousPaidUpBenefits.create({ data: input });
    },
    updatePreviousPaidUpBenefits: async (_, { id, input }) => {
      return await prisma.previousPaidUpBenefits.update({
        where: { id },
        data: input,
      });
    },
    createInvestmentSelection: async (_, { input }) => {
      const { currentAccruedBenefits, futureContributions, userId, ...investmentSelection } = input;

      return await prisma.investmentSelection.create({
        data: {
          ...investmentSelection,
          userId,
          currentAccruedBenefits: {
            create: currentAccruedBenefits,
          },
          futureContributions: {
            create: futureContributions,
          },
        },
      });
    },
    updateInvestmentSelection: async (_, { id, input }) => {
      const { currentAccruedBenefits, futureContributions, ...investmentSelection } = input;

      await prisma.investmentDistribution.deleteMany({
        where: { investmentSelectionCurrentId: id, investmentSelectionFutureId: id },
      });

      return await prisma.investmentSelection.update({
        where: { id },
        data: {
          ...investmentSelection,
          currentAccruedBenefits: {
            create: currentAccruedBenefits,
          },
          futureContributions: {
            create: futureContributions,
          },
        },
      });
    },
    createBeneficiaryNomination: async (_, { input }) => {
      const { beneficiaries, funeralRecipients, userId, ...beneficiaryNomination } = input;

      return await prisma.beneficiaryNomination.create({
        data: {
          ...beneficiaryNomination,
          userId,
          beneficiaries: {
            create: beneficiaries,
          },
          funeralRecipients: {
            create: funeralRecipients,
          },
        },
      });
    },
    updateBeneficiaryNomination: async (_, { id, input }) => {
      const { beneficiaries, funeralRecipients, ...beneficiaryNomination } = input;

      await prisma.beneficiary.deleteMany({
        where: { beneficiaryNominationId: id },
      });
      await prisma.funeralRecipient.deleteMany({
        where: { beneficiaryNominationId: id },
      });

      return await prisma.beneficiaryNomination.update({
        where: { id },
        data: {
          ...beneficiaryNomination,
          beneficiaries: {
            create: beneficiaries,
          },
          funeralRecipients: {
            create: funeralRecipients,
          },
        },
      });
    },
    createBeneficiary: async (_, { input }) => {
      return await prisma.beneficiary.create({ data: input });
    },
    updateBeneficiary: async (_, { id, input }) => {
      return await prisma.beneficiary.update({
        where: { id },
        data: input,
      });
    },
    createFuneralRecipient: async (_, { input }) => {
      return await prisma.funeralRecipient.create({ data: input });
    },
    updateFuneralRecipient: async (_, { id, input }) => {
      return await prisma.funeralRecipient.update({
        where: { id },
        data: input,
      });
    },
  },
};


  export default resolvers; 
  