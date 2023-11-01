import { VendorType } from "../TypeDefs/Vendor";
import { MessageType } from "../TypeDefs/Messages";
import { GraphQLString, GraphQLID } from "graphql";
import { Vendors } from "../../Entities/Vendors";

export const CREATE_VENDOR = {
  type: VendorType,
  args: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    location: { type: GraphQLString },
    specialty: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, description, location, specialty } = args;
    await Vendors.insert({ name, description, location, specialty });
    return args;
  },
};

export const DELETE_VENDOR = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { id } = args;
    await Vendors.delete({ id });

    return { successful: true, message: "VENDOR DELETED." };
  },
};

export const UPDATE_VENDOR = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    location: { type: GraphQLString },
    specialty: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id, name, description, location, specialty } = args;
    const vendor = await Vendors.findBy({ id });

    if (!vendor) {
      throw new Error("VENDOR NOT FOUND.");
    }

    if (name === "") {
      vendor[0].name = vendor[0].name;
    } else {
      vendor[0].name = name;
    }

    if (description === "") {
      vendor[0].description = vendor[0].description;
    } else {
      vendor[0].description = description;
    }

    if (location === "") {
      vendor[0].location = vendor[0].location;
    } else {
      vendor[0].location = location;
    }

    if (specialty === "") {
      vendor[0].specialty = vendor[0].specialty;
    } else {
      vendor[0].specialty = specialty;
    }

    await Vendors.save(vendor);

    return { successful: true, message: "VENDOR UPDATED." };
  },
};
