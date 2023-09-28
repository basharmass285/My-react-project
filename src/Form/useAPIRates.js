import { useState, useEffect } from "react";
import { API } from "./API"
import { fetchAPI } from "./fetchAPI";

export const useAPIRates = () => {
  const [APIRates, setAPIRates] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await fetchAPI(API);

        if (!response) {
          setError("No response from database.")
        } else {
          setAPIRates(response);
        }
      } catch (error) {
        setError("Error while fetching database.");
      }
    };
   
    setTimeout(getRates, 1000);
  }, []);

  return { APIRates, error };
};