import { useState } from "react";

export const useInputsData = (initialState) => {
  const [dataInput, setDataInput] = useState(initialState);

  return { dataInput, setDataInput };
};
