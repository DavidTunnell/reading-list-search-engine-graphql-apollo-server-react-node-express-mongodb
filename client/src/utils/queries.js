import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query Query {
        users {
            _id
            username
            email
            password
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;
