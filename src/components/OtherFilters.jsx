import React, { useEffect } from "react";
import { Box, Chip } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAppContext } from "../hooks/useAppContext";
import { useWeather } from "../hooks/useWeather";

const DAYS = [1, 7, 15];

const OtherFilters = () => {
  const {
    location,
    selectedDate,
    setSelectedDate,
    numberOfDays,
    setNumberOfDays,
  } = useAppContext();
  const { refetch } = useWeather();

  const handleClickDays = (days) => {
    setNumberOfDays(days);
  };

  const handleChangeDate = (newValue) => {
    if (newValue) {
      // Update the selected date in the context
      setSelectedDate(newValue);
    }
  };

  useEffect(() => {
    if (!location) return;
    // if numberOfDays changes, refetch the weather data
    refetch();
  }, [numberOfDays, location, refetch]);

  useEffect(() => {
    if (!location) return;
    // if selectedDate changes, refetch the weather data
    refetch();
  }, [selectedDate, location, refetch]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <DatePicker
        label="Start Date"
        value={selectedDate}
        slotProps={{
          textField: { size: "small" },
        }}
        format="dd/MM/yyyy"
        onChange={handleChangeDate}
      />

      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {DAYS.map((day) => (
          <Chip
            variant={numberOfDays === day ? "filled" : "outlined"}
            label={day === 1 ? `${day} day` : `${day} days`}
            key={day}
            color="primary"
            onClick={() => {
              handleClickDays(day);
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default OtherFilters;
