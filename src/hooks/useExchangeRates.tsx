import { useQuery } from "@tanstack/react-query";

interface ExchangeRateResponse {
  rates: {
    [key: string]: number;
  };
  result: string;
  time_last_update_utc: string;
}

const fetchExchangeRates = async (): Promise<ExchangeRateResponse> => {
  const response = await fetch("https://open.er-api.com/v6/latest/EUR");
  if (!response.ok) {
    throw new Error("Failed to fetch exchange rates");
  }
  return response.json();
};

export const useExchangeRates = () => {
  return useQuery({
    queryKey: ["exchangeRates"],
    queryFn: fetchExchangeRates,
    staleTime: 1000 * 60 * 60, // 1 hour
    refetchOnWindowFocus: false,
  });
};