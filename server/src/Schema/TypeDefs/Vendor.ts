import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const VendorType = new GraphQLObjectType({
  name: "Vendor",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    location: { type: GraphQLString },
    specialty: { type: GraphQLString },
  }),
});
