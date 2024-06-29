import { defineField, defineType } from "sanity";

export const products = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Product id",
      type: "string",
    }),
    // defineField({
    //   name: "quantity",
    //   title: "Quantity",
    //   type: "number",
    // }),
    // {
    //   name: "details",
    //   type: "string",
    //   title: "Product Details",
    // },
    // {
    //   name: "care",
    //   type: "string",
    //   title: "Product Care",
    // },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    defineField({
      name: "price",
      type: "number",
      title: "Price",
    }),
    {
      name: "alt",
      type: "string",
      title: "Image Alt",
    },

    defineField({
      name: "image",
      title: "image",
      type: "image",
    }),

    defineField({
      name: "category",
      type: "reference",
      title: "Enter the category",
      to: {
        type: "category",
        title: "Category",
      },
    }),
    // defineField({
    //   name: "ptype",
    //   title: "Product Type",
    //   type: "reference",
    //   to: [
    //     {
    //       type: "ptype",
    //     },
    //   ],
    // }),
    // defineField({
    //   name: "pcare",
    //   title: "Product Care",
    //   type: "array",
    //   of: [
    //     {
    //       name: "list",
    //       title: "List",
    //       type: "string",
    //     },
    //   ],
    // }),
  ],
};
