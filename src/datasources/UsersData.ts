import { MongoDataSource } from "apollo-datasource-mongodb";
import { UserDocument, Order } from "./dataSourcetypes";

class UsersData extends MongoDataSource<UserDocument> {
  getUserOrders = (userId: string) => this.collection.findOne({ userId });
  insertUserOrder = (userId: string, userOrder: Order) =>
    this.collection.updateOne(
      { userId },
      {
        $push: {
          orders: {
            ...userOrder,
          },
        },
      }
    );
}

export default UsersData;
