import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { getWeather } from "../api";
import { useAppContext } from "./useAppContext";

export function useWeather({ location }) {
  const { month, year } = useAppContext();

  const startDate = DateTime.fromObject({ year, month })
    .startOf("month")
    .toFormat("yyyy-MM-dd");
  const endDate = DateTime.fromObject({ year, month })
    .endOf("month")
    .toFormat("yyyy-MM-dd");

  return useQuery({
    queryKey: ["weather", location, startDate, endDate],
    queryFn: () => {
      if (!location) {
        return Promise.reject(new Error("Location is required"));
      }

      return getWeather({ location });
    },
    enabled: false,
  });
}
