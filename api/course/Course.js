import axios from "axios";
import { apiKey, prefix, url } from "../domain";

export const getAllCourse = async (filter) => {


    let uri = url + prefix + 'courses?type&limit=9';
    filter.sort != null ? uri = uri + "&sort=" + filter.sort : "";
    filter.free != false ? uri = uri + "&free" : "";
    filter.discount != false ? uri = uri + "&discount" : "";  

    console.log(uri)

    
    try {
      const response = await axios.get(uri,{
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
