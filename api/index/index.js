import axios from "axios";
import { apiKey, prefix, url } from "../domain";

export const getAllNewestCourses = async () => {
    try {
      const response = await axios.get(url + prefix + 'courses?type=course &limit=5&sort=newest',{
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


export const getAllBestSellers = async () => {
  try {
    const response = await axios.get(url + prefix + 'courses?type=course &limit=5&sort=bestsellers ',{
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


export const getAllDiscountCourses = async () => {
  try {
    const response = await axios.get(url + prefix + 'courses?type=course &limit=5&discount',{
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