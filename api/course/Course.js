import axios from "axios";
import { apiKey, prefix, url } from "../domain";

export const getAllCourse = async (filter) => {


    let uri = url + prefix + `courses?`;

    filter.cat != null ? uri = uri + "?cat=" + filter.cat : "";
    filter.type != null ? uri = uri + "&type=" + filter.type : "";
    filter.limit != null ? uri = uri + "&limit=" + filter.limit : "";
    filter.sort != null ? uri = uri + "&sort=" + filter.sort : "";
    filter.free != false ? uri = uri + "&free" : "";
    filter.discount != false ? uri = uri + "&discount" : "";  

    
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
