import { useState } from "react";

const _getInitLikesLocalStorage = (key) => {
  try {
    const like = localStorage.getItem(key);
    return JSON.parse(like);
  } catch (error) {
    console.error("Shit happen in initial state setLiked ", error);
    return false;
  }
};

export const useLocalStorage = (key) => {
  const [liked, setLiked] = useState(_getInitLikesLocalStorage(key));
  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setLiked(value);
    } catch (error) {
      console.error("shit happend in setLocalStorage ", error);
    }
  };

  return { liked, setLocalStorage };
};
