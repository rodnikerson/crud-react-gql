import { gql } from "@apollo/client";

export const GET_ALL_VENDORS = gql`
  query getAllVendors {
    getAllVendors {
        id
        name 
        description 
        specialty 
        location 
    }
  }
`;
