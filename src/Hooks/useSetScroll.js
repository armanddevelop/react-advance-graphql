import { useEffect, useState } from "react";

export const useSetShowFixed = () => {
  const [showFixed, setShowFixed] = useState(false);
  useEffect(() => {
    const onScroll = (event) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);
  return { showFixed };
};
