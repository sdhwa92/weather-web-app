import { Typography, Container, Paper, Box, Stack } from "@mui/material";
import { useAppContext } from "./hooks/useAppContext";
import LocationSearch from "./components/LocationSearch";

function App() {
  const { weatherData } = useAppContext();

  console.log("Weather Data:", weatherData);

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
        <Paper elevation={24} sx={{ p: 4, borderRadius: 4, width: "60vw" }}>
          <Stack spacing={2}>
            <Typography variant="h3">Weather Web App</Typography>
            <LocationSearch />
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
