import axios from "axios";

export const fetchAPI = async (URL) => {
  try {
    const response = await axios.get(URL);


    const { rates, date } = response.data;

    return {
      rates,
      date
    };
  } catch (error) {
    console.error("Error fetching exchange rates.", error);
  }
};