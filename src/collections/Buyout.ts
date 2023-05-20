import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Buyout: CollectionConfig = {
  slug: "buyout",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "firstName",
      type: "text",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      required: true,
    },
    {
      name: "number",
      type: "text",
      required: true,
    },
    {
      name: "size",
      type: "text",
      required: true,
    },
    {
      name: "state",
      type: "text",
      required: true,
    },
    {
      name: "score",
      type: "text",
      required: true,
    },
    {
      name: "address",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default Buyout;
