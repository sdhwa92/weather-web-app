import React, { useEffect, useState } from "react";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
  Stack,
  Backdrop,
  CircularProgress,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppContext } from "../hooks/useAppContext";
import { useWeather } from "../hooks/useWeather";

const LocationSearch = () => {
  const [searchText, setSearchText] = useState("");
  const { location, setLocation, setWeatherData } = useAppContext();
  const { refetch, data, isError, isSuccess, isFetching } = useWeather();

  const handleOnClickSearch = () => {
    if (!searchText) return; // Prevent search if location is empty

    setLocation(searchText);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnClickSearch();
    }
  };

  useEffect(() => {
    if (location) {
      refetch();
    }
  }, [location, refetch]);

  useEffect(() => {
    if (isError) {
      setWeatherData(null);
    }

    if (isSuccess && data) {
      setWeatherData(data);
    }
  }, [data, isError, isSuccess, setWeatherData]);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <FormControl fullWidth size="small">
          <OutlinedInput
            placeholder="Enter location"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleOnKeyDown}
          />
        </FormControl>
        <Button
          variant="contained"
          onClick={handleOnClickSearch}
          loading={isFetching}
          disabled={!searchText || isFetching}
        >
          Search
        </Button>
      </Stack>

      <Backdrop
        open={isFetching}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          marginTop: "0px !important",
        }}
      >
        <Stack spacing={2} alignItems="center" justifyContent="center">
          <CircularProgress
            sx={{
              color: "white",
            }}
          />
          <Typography variant="caption" color="white">
            Loading weather data for "{location}"...
          </Typography>
        </Stack>
      </Backdrop>
    </>
  );
};

export default LocationSearch;
