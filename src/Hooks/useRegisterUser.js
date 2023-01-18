import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation singup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegisterUser = () => {
  const [register, { loading: mutationLoading, error: mutationError }] =
    useMutation(REGISTER);

  return {
    register,
    mutationLoading,
    mutationError,
  };
};
