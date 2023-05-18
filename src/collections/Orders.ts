import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Orders: CollectionConfig = {
  slug: "orders",
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
      name: "idUser",
      type: "text",
      required: true,
    },

    {
      name: "statusOrder",
      type: "select",
      options: [
        {
          label: "В процесі оброблення",
          value: "loading",
        },
        {
          label: "Виконано",
          value: "accept",
        },
        {
          label: "Відхилено замовником",
          value: "rejected",
        },
      ],
      defaultValue: "loading",
      required: true,
    },
    {
      name: "city",
      type: "text",
      required: true,
    },
    {
      name: "delivery",
      type: "text",
      required: true,
    },
    {
      name: "address",
      type: "text",
      required: true,
    },
    {
      name: "paymentSelect",
      type: "text",
      required: true,
    },
    {
      name: "dateSend",
      type: "text",
      required: true,
    },
    {
      name: "dateCreate",
      type: "text",
      required: true,
    },
    {
      name: "products",
      type: "array",
      required: true,
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
          name: "score",
          type: "textarea",
          required: true,
        },
      ],
    },
  ],
};

export default Orders;