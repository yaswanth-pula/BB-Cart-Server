const resolvers = {
  Query: {
    allCategories: (_: any, __: any, { dataSources: { categories } }: any) =>
      categories.getCategoriesWithProducts(),

    categoryById: (_: any, args: any, { dataSources: { categories } }: any) =>
      categories.getCategoryById(args.id),

    userOrders: async (_: any, __: any, context: any) => {
      let userId: string = await context.user;
      if (userId === "") return [];
      let userDataSource = context.dataSources.users;

      let res = await userDataSource.getUserOrders(userId);
      return res.orders;
    },
  },
  Mutation: {
    placeUserOrder: async (_: any, args: any, context: any) => {
      const userId: string = await context.user;
      if (userId === "") return;
      const userOrder = JSON.parse(args.userOrder);
      const userDataSource = context.dataSources.users;

      await userDataSource.insertUserOrder(userId, userOrder);
      return userOrder.orderId;
    },
  },
};

export default resolvers;
