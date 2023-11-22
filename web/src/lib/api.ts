import axios from "axios";

export const api = axios.create({
  //Sempre atualizar com TCP/IP
  baseURL: "http://192.168.1.8:3333",
});