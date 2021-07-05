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

  type OrderItem {
    productId: String
    name: String
    imageUrl: String
    price: Float
    units: String
    quantity: Int
  }

  type Order {
    orderId: String
    products: [OrderItem]
  }

  type Query {
    allCategories: [Category]
    categoryById(id: String): Category
    userOrders(userId: String): [Order]
  }

  type Mutation {
    placeUserOrder(userOrder: String): String
  }
`;
export default typeDefs;
