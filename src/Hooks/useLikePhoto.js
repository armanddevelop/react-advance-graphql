import { gql, useMutation } from "@apollo/client";

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

const UNLIKE_PHOTO = gql`
  mutation unlikeAnonymousPhoto($input: LikePhoto!) {
    unlikeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const useLikePhoto = () => {
  const [toogleLike, { loading: mutationLoading, error: mutationError }] =
    useMutation(LIKE_PHOTO);
  const [
    toogleUnLike,
    { loading: mutationLoadingUnlike, error: mutationErrorUnlike },
  ] = useMutation(UNLIKE_PHOTO);
  return {
    toogleLike,
    mutationLoading,
    mutationError,
    toogleUnLike,
    mutationLoadingUnlike,
    mutationErrorUnlike,
  };
};
