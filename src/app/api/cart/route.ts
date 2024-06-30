import { addToCart, cartTable, db } from "@/lib/drizzle";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import { and, eq } from "drizzle-orm";

export const POST = async (request: NextRequest) => {
  const userId = "askdjhalkjdkljas12e123";

  const req: addToCart = await request.json();

  try {
    if (req) {
      const res = await db
        .insert(cartTable)
        .values({
          user_id: userId as string,
          product_id: req.product_id,
          quantity: req.quantity,
          image: req.image,
          price: req.price,
          product_name: req.product_name,
          subcat: req.subcat,
          total_price: req.price * req.quantity,
        })
        .returning();
      return NextResponse.json({ res });
    } else {
      throw new Error("Failed to insert Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: "Something went wrong",
    });
  }
};

export const PUT = async (request: NextRequest) => {
  const userId = "askdjhalkjdkljas12e123";
  const data: addToCart = await request.json();
  try {
    if (data) {
      await db
        .update(cartTable)
        .set({
          quantity: data.quantity,
          total_price: data.price,
        })
        .where(
          and(
            eq(cartTable.user_id, userId),
            eq(cartTable.product_id, data.product_id)
          )
        )
        .returning();
      return NextResponse.json({ Message: "Data Updated" }, { status: 200 });
    } else {
      throw new Error("Failed to Update Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ Message: error }, { status: 500 });
  }
};
