import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
    {
        categories {
            _id
            name
        }
    }
`;

export const QUERY_ALL_PRODUCTS = gql`
    {
        products {
            _id
            productName
            description
            image
            price
            quantity
        }
    }
`;

export const QUERY_PRODUCT = gql`
    query me ($id: ID!) {
        product(_id: $id) {
            _id
            productName
            description
            image
            price
            quantity
        }
    }
`;

export const QUERY_BUSINESSES = gql`
    query Query {
        businesses {
            _id
            businessName
            email
            description
            image
            category {
                _id
                name
            }
            products {
                _id
                productName
                description
                image
                price
                quantity
            }
        }
    }
`;

export const QUERY_ME = gql`
{
    me {
        userName
        email
        favorites {
            _id
            productName
            description
            image
            price
            quantity
        }
    }
}
`;