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

interface UserDocument {
  userId: string;
  orders: [Order];
}
interface Order {
  orderId: string;
  products: [OrderItem];
}
interface OrderItem extends ProductDocument {
  quantity: number;
}

export { CategoryDocument, UserDocument, Order };
