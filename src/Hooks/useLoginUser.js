import { gql, useMutation } from "@apollo/client";
const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;
export const useLoginUser = () => {
  const [login, { loading: loginLoading, error: loginError }] =
    useMutation(LOGIN);

  return { login, loginLoading, loginError };
};
