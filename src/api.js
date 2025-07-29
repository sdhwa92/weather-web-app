import axios from "axios";
import { config } from "./config";

export const getWeather = async ({ location, startDate, endDate }) => {
  try {
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
        key: config.apiKey,
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
