import { mongoClient } from "../utils/db";
import Categories from "./Categories";
import UsersData from "./UsersData";
const dataSources = () => ({
  categories: new Categories(mongoClient.db().collection("Categories")),
  users: new UsersData(mongoClient.db().collection("Users")),
});

export default dataSources;
