import { type SchemaTypeDefinition } from "sanity";
import { products } from "./products";
import { category } from "./category";
// import { ptype } from "./ptype";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, category],
};
