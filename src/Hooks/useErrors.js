import { useEffect, useState } from "react";

export const useErrors = (error) => {
  const [errorMsg, setErrorMsg] = useState(false);
  useEffect(() => {
    if (error) setErrorMsg(true);
  }, [error]);

  return { errorMsg, setErrorMsg };
};
