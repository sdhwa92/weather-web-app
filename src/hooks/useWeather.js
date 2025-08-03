import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import { useAppContext } from "./useAppContext";

export function useWeather() {
  const { apiKey, location, selectedDate, numberOfDays } = useAppContext();

  const startDate = selectedDate.toFormat("yyyy-MM-dd");
  const endDate = selectedDate
    .plus({ days: numberOfDays - 1 })
    .toFormat("yyyy-MM-dd");

  return useQuery({
    queryKey: ["weather", location, startDate, endDate, apiKey],
    queryFn: () => {
      if (!location) {
        return Promise.reject(new Error("Location is required"));
      }

      return getWeather({ apiKey, location, startDate, endDate });
    },
    enabled: false,
  });
}
