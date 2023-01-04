import { gql, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";

const REGISTER = gql`
  mutation singup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegisterUser = () => {
  const [register, { loading: mutationLoading, error: mutationError }] =
    useMutation(REGISTER);
  const [dataUser, setDataUser] = useState({});
  const [response, setResponse] = useState(null);
  try {
    useEffect(() => {
      const { email, password } = dataUser;
      const postRegister = async () => {
        if (email && password) {
          const variables = { input: { email, password } };
          const userRegister = await register({
            variables,
          });
          if (userRegister) {
            setResponse(userRegister);
          }
        }
      };
      postRegister();
    }, [dataUser, response]);
  } catch (error) {
    console.error("[erroruseRegisterUser]: ", error);
  }

  return {
    setDataUser,
    response,
    mutationLoading,
    mutationError,
  };
};
