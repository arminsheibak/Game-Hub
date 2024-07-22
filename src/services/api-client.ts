import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[]
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bff087750e984504b9fd75431ced404e"
  }
})