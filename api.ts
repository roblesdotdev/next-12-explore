import { Product } from "./types";

const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "First Post",
    description: "This is a product description",
    image: "https://picsum.photos/id/1/200/300",
    price: 323.4,
  },
  {
    id: "2",
    title: "Second Post",
    description: "This is a product description",
    image: "https://picsum.photos/id/1/200/300",
    price: 322.0,
  },
  {
    id: "3",
    title: "Third Post",
    description: "This is a product description",
    image: "https://picsum.photos/id/1/200/300",
    price: 22.4,
  },
];

const api = {
  list: async (): Promise<Product[]> => PRODUCTS,
  fetch: async (productId: Product["id"]): Promise<Product | undefined> =>
    PRODUCTS.find((p) => p.id === productId),
};

export default api;
