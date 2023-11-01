import { gql } from "@apollo/client";

export const CREATE_VENDOR = gql`
  mutation createVendor(
    $name: String!
    $description: String!
    $specialty: String!
    $location: String!
  ) {
    createVendor(
      name: $name
      description: $description
      specialty: $specialty
      location: $location
    ) {
      name
      description
      specialty
      location
    }
  }
`;

export const DELETE_VENDOR = gql`
  mutation deleteVendor($id: ID!) {
    deleteVendor(id: $id) {
      message
    }
  }
`;

export const UPDATE_VENDOR = gql`
  mutation updateVendor(
    $id: ID!
    $name: String!
    $description: String!
    $specialty: String!
    $location: String!
  ) {
    updateVendor(
      id: $id
      name: $name
      description: $description
      specialty: $specialty
      location: $location
    ) {
      message
    }
  }
`;
