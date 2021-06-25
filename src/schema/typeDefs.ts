import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Product {
    productId: String
    name: String
    imageUrl: String
    price: Float
    units: String
  }

  type Category {
    categoryId: String
    name: String
    products: [Product]
  }

  type Query {
    allCategories: [Category]
    categoryById(id: String): Category
  }
`;
export default typeDefs;
