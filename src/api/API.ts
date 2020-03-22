import axios from "axios";
import { extend, trimStart } from "lodash";

export default class API {
  baseUrl = "https://coronavirus-ph-api.now.sh/";

  async get(endpoint: string, headers?: object) {
    const url = this.baseUrl + trimStart(endpoint, "/");
    const config = {
      headers: extend({}, headers)
    };
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (exception) {
      return Promise.reject(exception);
    }
  }
}
