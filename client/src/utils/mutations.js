import { gql } from "@apollo/client";

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
          token
          user {
            _id
            username
          }
        }
    }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_CHARCTER = gql`
  mutation createCharacter($name: String!, $image: String, $class: String!, $level: Int!, $base_hp: Int!) {
    Character(name: $name, image: $image, class: $class, level: $level, base_hp: $base_hp) {
      _id
    }
  }
`