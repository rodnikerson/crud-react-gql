import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { GET_ALL_VENDORS } from "./Queries/Vendor";
import {
  CREATE_VENDOR,
  DELETE_VENDOR,
  UPDATE_VENDOR,
} from "./Mutations/Vendor";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllVendors: GET_ALL_VENDORS,
  },
});

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createVendor: CREATE_VENDOR,
    deleteVendor: DELETE_VENDOR,
    updateVendor: UPDATE_VENDOR,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
