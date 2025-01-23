import { defineType, defineField } from "sanity";

export const productdetails = defineType({
  name: "lDress",
  type: "document",
  title: "lDress",
  fields: [
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),
    
    defineField({
      name: "button",
      type: "string",
      title: "Button",
    }),
    defineField({
      name: "heartIcon",
      type: "image",
      title: "Heart Icon",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "cartIcon",
      type: "image",
      title: "Cart Icon",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "eyeIcon",
      type: "image",
      title: "Eye Icon",
      options: {
        hotspot: true,
      },
    }),
  ],
});
