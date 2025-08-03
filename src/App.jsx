import { useState } from "react";
import {
  Typography,
  Container,
  Paper,
  Box,
  Stack,
  Button,
} from "@mui/material";
import { useAppContext } from "./hooks/useAppContext";
import LocationSearch from "./components/LocationSearch";
import WeatherTable from "./components/WeatherTable";
import OtherFilters from "./components/OtherFilters";
import ApiKeyDialog from "./components/ApiKeyDialog";

function App() {
  const [openApiKeyDialog, setOpenApiKeyDialog] = useState(false);
  const { apiKey, weatherData } = useAppContext();

  return (
    <>
      <ApiKeyDialog
        isOpen={!apiKey || openApiKeyDialog}
        handleClose={() => setOpenApiKeyDialog(false)}
      />

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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h4">Weather Web App</Typography>

                <Button
                  size="small"
                  variant="contained"
                  onClick={() => setOpenApiKeyDialog(true)}
                  color={apiKey ? "success" : "error"}
                >
                  Setup API Key
                </Button>
              </Box>
              <LocationSearch />
              <OtherFilters />
              {weatherData && <WeatherTable data={weatherData} />}
            </Stack>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default App;
