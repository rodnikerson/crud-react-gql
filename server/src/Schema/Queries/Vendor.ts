import { GraphQLList } from "graphql";
import { VendorType } from "../TypeDefs/Vendor";
import { Vendors } from "../../Entities/Vendors";

interface IUser {
    name: string,
    description: string,
    specialty: string,
    location: string
}

export const GET_ALL_VENDORS = {
  type: new GraphQLList(VendorType),
  resolve(): Promise<IUser[]> {
    return Vendors.find();
  },
};
