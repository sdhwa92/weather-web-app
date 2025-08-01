import { Typography, Container, Paper, Box, Stack } from "@mui/material";
import { useAppContext } from "./hooks/useAppContext";
import LocationSearch from "./components/LocationSearch";
import WeatherTable from "./components/WeatherTable";
import OtherFilters from "./components/OtherFilters";

function App() {
  const { weatherData } = useAppContext();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={24}
          sx={{ p: 4, borderRadius: 4, width: "100%", height: "80vh" }}
        >
          <Stack spacing={2} position={"relative"} height="100%">
            <Typography variant="h4">Weather Web App</Typography>
            <LocationSearch />
            <OtherFilters />
            {weatherData && <WeatherTable data={weatherData} />}
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
