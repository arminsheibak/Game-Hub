import axios, { Axios, AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[]
}

const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bff087750e984504b9fd75431ced404e"
  }
});

class APIClient<T>{
  constructor(public endpoint: string) {}

  getAll = (config: AxiosRequestConfig) => 
    axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
    .then(res => res.data)
}

export default APIClient;