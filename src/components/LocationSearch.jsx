import React, { useEffect } from "react";
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
  const { location, setLocation, setWeatherData } = useAppContext();
  const { refetch, data, isError, isSuccess, isFetching } = useWeather({
    location,
    startDate: null,
    endDate: null,
  });

  const handleOnClickSearch = () => {
    if (!location) return; // Prevent search if location is empty

    refetch();
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnClickSearch();
    }
  };

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
        <FormControl fullWidth>
          <OutlinedInput
            placeholder="Enter location"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={handleOnKeyDown}
          />
        </FormControl>
        <Button
          variant="contained"
          onClick={handleOnClickSearch}
          loading={isFetching}
          disabled={!location || isFetching}
        >
          Search
        </Button>
      </Stack>

      <Backdrop open={isFetching}>
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
