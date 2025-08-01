import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DateTime } from "luxon";

const WeatherTable = ({ data }) => {
  if (!data || !data.days || data.days.length === 0) {
    return null;
  }

  const isDaysData = Array.isArray(data.days) && data.days.length > 1;

  let rows = [];

  if (isDaysData) {
    rows = data.days.map((item) => ({
      datetime: item.datetime,
      temp: item.temp,
      tempmin: item.tempmin,
      tempmax: item.tempmax,
      humidity: item.humidity,
      precip: item.precip,
      windspeed: item.windspeed,
      conditions: item.conditions,
    }));
  } else {
    rows = data.days[0].hours.map((item) => ({
      datetime: item.datetime,
      temp: item.temp,
      humidity: item.humidity,
      precip: item.precip,
      windspeed: item.windspeed,
      conditions: item.conditions,
    }));
  }

  const formattedTime = (datetime) => {
    const dt = DateTime.fromFormat(datetime, "HH:mm:ss");
    if (!dt.isValid) return datetime; // Fallback if parsing fails
    // Return formatted time in HH:mm format
    return dt.toFormat("HH:mm");
  };

  return (
    <TableContainer component={Box}>
      <Table aria-label="weather table">
        <TableHead>
          <TableRow>
            <TableCell>{isDaysData ? "Date" : "Time"}</TableCell>
            <TableCell align="right">Temperature</TableCell>
            {isDaysData && (
              <>
                <TableCell align="right">Min Temp</TableCell>
                <TableCell align="right">Max Temp</TableCell>
              </>
            )}
            <TableCell align="right">Humidity</TableCell>
            <TableCell align="right">Precipitation</TableCell>
            <TableCell align="right">Wind Speed</TableCell>
            <TableCell>Conditions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {isDaysData
                  ? DateTime.fromISO(row.datetime).toLocaleString(
                      DateTime.DATE_MED
                    )
                  : formattedTime(row.datetime)}
              </TableCell>
              <TableCell align="right">{row.temp} °C</TableCell>
              {isDaysData && (
                <>
                  <TableCell align="right">{row.tempmin} °C</TableCell>
                  <TableCell align="right">{row.tempmax} °C</TableCell>
                </>
              )}
              <TableCell align="right">{row.humidity} %</TableCell>
              <TableCell align="right">{row.precip} mm</TableCell>
              <TableCell align="right">{row.windspeed} km/h</TableCell>
              <TableCell>{row.conditions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeatherTable;
