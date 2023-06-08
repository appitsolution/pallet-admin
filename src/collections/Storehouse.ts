import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Storehouse: CollectionConfig = {
  slug: "storehouse",
  admin: {
    useAsTitle: "city",
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "city",
      type: "text",
      required: true,
    },
    {
      name: "address",
      type: "text",
      required: true,
    },
    {
      name: "schedule",
      type: "text",
      required: true,
    },
  ],
};

export default Storehouse;
