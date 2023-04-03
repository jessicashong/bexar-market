import { gql } from '@apollo/client';

// signup new user
export const ADD_USER = gql`
    mutation addUser (
        $userName: String!, 
        $email: String!, 
        $password: String!
    ) {
        addUser(
            userName: $userName, 
            email: $email, 
            password: $password
        ) {
            token
            user {
                _id
                userName
            }
        }
    }
`;

// update user info: username, email, password
export const UPDATE_USER = gql`
    mutation updateUser(
        $userName: String, 
        $email: String, 
        $password: String
    ) {
        updateUser(
            userName: $userName, 
            email: $email, 
            password: $password
        ) {
            _id
            userName
            email
        }
    }   
`;

// must be logged in as busines to add product
export const ADD_PRODUCT = gql`
    mutation addProduct (
        $productName: String, 
        $description: String, 
        $image: String, 
        $price: Float, 
        $quantity: Int
    ) {
        addProduct (
            productName: $productName, 
            description: $description, 
            image: $image, 
            price: $price, 
            quantity: $quantity
        ) {
            _id
            businessName
            products {
                _id
                productName
            }
        }
    }
`;

// must be logged in as business to delete product
export const DELETE_PRODUCT = gql`
    mutation deleteProduct(
        $productId: ID!
    ) {
        deleteProduct(
            productId: $productId
        ) {
            _id
            productName
        }
    }
`;

// signup new business
export const ADD_BUSINESS = gql`
    mutation addBusiness(
        $businessName: String!, 
        $email: String!, 
        $password: String!
    ) {
        addBusiness(
            businessName: $businessName, 
            email: $email, 
            password: $password
        ) {
            token
            business {
                _id
                businessName
            }
        }
    }
`;

// update business info: businessName, email, password
export const UPDATE_BUSINESS = gql`
    mutation updateBusiness(
        $businessName: String, 
        $email: String, 
        $password: String
    ) {
        updateBusiness(
            businessName: $businessName, 
            email: $email, 
            password: $password
        ) {
            _id
            businessName
            email
        }
    }
`;

// must be logged in as user to add favorite
export const ADD_FAVORITE = gql`
    mutation addFavorite(
        $productId: ID
    ) {
        addFavorite(
            productId: $productId
        ) {
            _id
            userName
            favorites {
                _id
                productName
            }
        }
    }
`;

// must be logged in as user to delete favorite
export const DELETE_FAVORITE = gql`
    mutation deleteFavorite(
        $productId: ID!
    ) {
        deleteFavorite(
            productId: $productId
        ) {
            _id
            userName
            favorites {
                _id
                productName
            }
        }
    }
`;

export const LOGIN = gql`
    mutation login(
        $email: String!, 
        $password: String!
    ) {
        login(
            email: $email, 
            password: $password
        ) {
            token
            user {
                _id
                userName
            }
        }
    }
`;

export const BUSINESS_LOGIN = gql`
    mutation businessLogin(
        $email: String!, 
        $password: String!
    ) {
        businessLogin(
            email: $email, 
            password: $password
        ) {
            token
            business {
                _id
                businessName
            }
        }
    }
`;
