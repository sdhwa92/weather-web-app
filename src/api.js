import axios from "axios";
import { config } from "./config";

export const getWeather = async ({ apiKey, location, startDate, endDate }) => {
  try {
    if (!apiKey) {
      throw new Error("API key is required");
    }

    let url = location;

    if (startDate) {
      url += `/${startDate}`;
    }

    if (startDate && endDate) {
      url += `/${endDate}`;
    }

    const response = await axios.get(url, {
      baseURL: config.baseUrl,
      params: {
        key: apiKey,
        unitGroup: config.unitGroup,
        contentType: config.contentType,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
