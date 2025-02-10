import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
        const result = await response.json();
        setData(result[currency]);
      } catch (error) {
        setError(error);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return { data, error };
}

export default useCurrencyInfo;