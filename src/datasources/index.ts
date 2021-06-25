import { mongoClient } from "../utils/db";
import Categories from "./Categories";

const dataSources = () => ({
  categories: new Categories(mongoClient.db().collection("Categories")),
});

export default dataSources;
