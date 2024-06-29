import { defineField, defineType } from "sanity";

export const ptype=defineType({
    name:"ptype",
    title:"Product Type",
    type:"document",
    fields:[defineField({
        name:"name",
        type:"string",
        title:"Type of Product"
    })]
})