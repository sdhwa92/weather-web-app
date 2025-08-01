import { useState } from "react";
import { DateTime } from "luxon";
import { AppContext } from "./context/AppContext";

export const AppProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(DateTime.now());
  const [numberOfDays, setNumberOfDays] = useState(7);
  const [weatherData, setWeatherData] = useState(null);

  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        selectedDate,
        setSelectedDate,
        numberOfDays,
        setNumberOfDays,
        weatherData,
        setWeatherData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
