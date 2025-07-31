import { useState } from "react";
import { DateTime } from "luxon";
import { AppContext } from "./context/AppContext";

export const AppProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [year, setYear] = useState(DateTime.now().year);
  const [month, setMonth] = useState(DateTime.now().month);
  const [weatherData, setWeatherData] = useState(null);

  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        year,
        setYear,
        month,
        setMonth,
        weatherData,
        setWeatherData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
