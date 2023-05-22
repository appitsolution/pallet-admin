import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const CategoriesProducts: CollectionConfig = {
  slug: "categories-products",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "id",
      type: "text",
      required: true,
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};

export default CategoriesProducts;
