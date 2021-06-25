const resolvers = {
  Query: {
    allCategories: (_: any, __: any, { dataSources: { categories } }: any) =>
      categories.getCategoriesWithProducts(),
    categoryById: (_: any, args: any, { dataSources: { categories } }: any) =>
      categories.getCategoryById(args.id),
  },
};

export default resolvers;
