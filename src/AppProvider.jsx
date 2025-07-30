import { useState } from "react";
import { AppContext } from "./context/AppContext";

export const AppProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  return (
    <AppContext.Provider
      value={{ location, setLocation, weatherData, setWeatherData }}
    >
      {children}
    </AppContext.Provider>
  );
};
