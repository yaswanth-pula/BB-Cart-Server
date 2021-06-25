import { MongoDataSource } from "apollo-datasource-mongodb";

interface ProductDocument {
  productId: string;
  name: string;
  imageUrl: string;
  price: number;
  units: string;
}

interface CategoryDocument {
  categoryId: string;
  name: string;
  products: [ProductDocument];
}

class Categories extends MongoDataSource<CategoryDocument> {
  getCategoriesWithProducts = () => this.collection.find().toArray();
  getCategoryById = (categoryId: string) =>
    this.collection.findOne({ categoryId });
}

export default Categories;
