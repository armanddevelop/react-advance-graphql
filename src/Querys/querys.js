import { gql } from "@apollo/client";

export const WITH_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      userId
      liked
      likes
    }
  }
`;

export const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const GET_FAVORITES = gql`
  query getFav {
    favs {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;
