import { pgTable, integer, varchar, text, serial } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { InferModel } from "drizzle-orm";

export const cartTable = pgTable("cart_dine", {
  id: serial("id").primaryKey().notNull(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  product_name: varchar("product_name", { length: 255 }).notNull(),
  subcat: varchar("subcat", { length: 255 }).notNull(),
  image: text("image").notNull(),
  price: integer("price").notNull(),
  quantity: integer("quantity").notNull(),
  total_price: integer("total_price").notNull(),
});

export type Cart = InferModel<typeof cartTable>;
export type addToCart = InferModel<typeof cartTable, "insert">;

export const db = drizzle(sql);
