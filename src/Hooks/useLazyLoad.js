import { useState, useEffect, useRef } from "react";

export const useLazyLoad = () => {
  const [show, setShow] = useState(false);
  const reference = useRef(null);
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect;
      }
    });
    observer.observe(reference.current);
  }, [reference]);
  return {
    show,
    reference,
  };
};
