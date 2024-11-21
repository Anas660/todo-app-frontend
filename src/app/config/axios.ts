import axiosLib from "axios";
import { serverUrl } from "./config";

export const axios = axiosLib.create({
  baseURL: String(serverUrl),
});
