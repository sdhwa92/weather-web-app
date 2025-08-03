import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useAppContext } from "../hooks/useAppContext";

const ApiKeyDialog = ({ isOpen, handleClose }) => {
  const { setApiKey } = useAppContext();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setApiKey(data.apiKey);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>API Key</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter your{" "}
          <Link
            href="https://www.visualcrossing.com/weather-api"
            target="_blank"
            rel="noopener"
          >
            Visual Crossing API key
          </Link>{" "}
          to access the weather data.
        </DialogContentText>
        <form id="api-key-form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            fullWidth
            size="small"
            sx={{
              mt: 1,
            }}
          >
            <TextField
              id="api-key-input"
              type="text"
              size="small"
              {...register("apiKey", { required: true })}
            />
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button type="submit" form="api-key-form">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApiKeyDialog;
