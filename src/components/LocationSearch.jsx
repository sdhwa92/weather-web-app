import React, { useEffect } from "react";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
  Stack,
  Backdrop,
  CircularProgress,
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
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default LocationSearch;
