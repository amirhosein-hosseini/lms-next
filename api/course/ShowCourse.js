import axios from "axios";
import { apiKey, prefix, url } from "../domain";

export const getShowCourse = async (id) => {
    try {
      const response = await axios.get(url + prefix + 'courses/' + id,{
        headers:{
          "accept" : "application/json",
          "x-api-key" : apiKey,
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
};
