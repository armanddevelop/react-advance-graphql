import { gql, useMutation } from "@apollo/client";

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const useLikePhoto = () => {
  const [toogleLike, { loading: mutationLoading, error: mutationError }] =
    useMutation(LIKE_PHOTO);
  return { toogleLike, mutationLoading, mutationError };
};
