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
  const rows = data.days.map((item) => ({
    datetime: item.datetime,
    temp: item.temp,
    tempmin: item.tempmin,
    tempmax: item.tempmax,
    humidity: item.humidity,
    precip: item.precip,
    windspeed: item.windspeed,
    conditions: item.conditions,
  }));

  return (
    <TableContainer component={Box}>
      <Table aria-label="weather table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Temperature</TableCell>
            <TableCell align="right">Min Temp</TableCell>
            <TableCell align="right">Max Temp</TableCell>
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
                {DateTime.fromISO(row.datetime).toLocaleString(
                  DateTime.DATE_MED
                )}
              </TableCell>
              <TableCell align="right">{row.temp} °C</TableCell>
              <TableCell align="right">{row.tempmin} °C</TableCell>
              <TableCell align="right">{row.tempmax} °C</TableCell>
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
