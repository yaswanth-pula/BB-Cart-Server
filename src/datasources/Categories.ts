import { MongoDataSource } from "apollo-datasource-mongodb";
import { CategoryDocument } from "./dataSourcetypes";
class Categories extends MongoDataSource<CategoryDocument> {
  getCategoriesWithProducts = () => this.collection.find().toArray();
  getCategoryById = (categoryId: string) =>
    this.collection.findOne({ categoryId });
}

export default Categories;
