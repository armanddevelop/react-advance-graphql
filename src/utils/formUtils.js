const CONSTANTS_ACTIONS = {
  register: "Registrate",
  login: "Iniciar Sesion",
};

export const submitForm = async (action, dataInput, handleAction) => {
  let response = null;
  const { email, password } = dataInput;
  const variables = { input: { email, password } };
  if (action === CONSTANTS_ACTIONS.register) {
    response = await handleAction({ variables });
  } else if (action === CONSTANTS_ACTIONS.login) {
    response = await handleAction({ variables });
  }
  return response;
};
