import { useEffect, useState } from "react";

export const useGetData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const url =
    "https://petgram-server-react-advance-armanddevelop.vercel.app/categories";
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await window.fetch(url);
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("algo salio mal en en el metodo useGetData ", error);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);
  return { categories, loading };
};
