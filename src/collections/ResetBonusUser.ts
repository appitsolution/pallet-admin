import { CollectionConfig } from "payload/types";
import ResetBonusUserComponent from "../custom/ResetBonusUserComponent";

const ResetBonusUser: CollectionConfig = {
  slug: "reset-bonus-user",
  access: {
    read: () => true,
    create: () => true,
  },
  admin: {
    components: {
      views: {
        List: ResetBonusUserComponent,
      },
    },
  },
  fields: [],
};

export default ResetBonusUser;
