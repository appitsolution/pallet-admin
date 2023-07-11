import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "span",
      type: "text",
      required: true,
    },
    {
      name: "size",
      type: "text",
      required: true,
    },
    {
      name: "weight",
      type: "text",
      required: true,
    },
    {
      name: "upload",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories-products", // Указание связанной коллекции
      hasMany: false, // Указание, что каждый продукт относится только к одной категории
    },
    {
      name: "images",
      type: "array",
      required: true,
      fields: [
        {
          name: "catalog",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};

export default Products;
