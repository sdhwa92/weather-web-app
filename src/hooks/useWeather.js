import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";

export function useWeather({ location, startDate, endDate }) {
  return useQuery({
    queryKey: ["weather", location, startDate, endDate],
    queryFn: () => getWeather({ location, startDate, endDate }),
    enabled: !!location,
  });
}
