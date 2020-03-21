import axios from "axios";
import { trimStart } from "lodash";

export default class API {
  baseUrl = "https://coronavirus-ph-api.now.sh";

  async get(endpoint: string, headers?: object) {
    const url = this.baseUrl + trimStart(endpoint, "/");

    try {
      const response = await axios.get(url, headers);
      return response.data;
    } catch (exception) {
      return Promise.reject(exception);
    }
  }
}
