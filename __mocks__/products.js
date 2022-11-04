import { v4 as uuid } from "uuid";

export const products = [
  {
    id: uuid(),
    createdAt: "27/03/2019",
    description: "First Car",
    media: "/static/images/products/car.png",
    title: "Tesla",
  },
  {
    id: uuid(),
    createdAt: "27/03/2019",
    description: "Bulb in the living room",
    media: "/static/images/products/bulb.png",
    title: "Samsung Bulb",
  },
  {
    id: uuid(),
    createdAt: "27/03/2019",
    description: "Gift from Kendra",
    media: "/static/images/products/wristwatch.png",
    title: "Apple Watch 4",
  },
];
