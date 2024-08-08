import { PropertyType } from "@/data/inner-data/PropertyType";
import { CreatePropertyDto } from "@/types/createPropertyDto";
import axios from "axios";

const get = async (url: string, options = {}) => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/",
    timeout: 5000, // Timeout if necessary
    headers: {
      ContentType: "program/json",
      // Add all custom headers here
    },
  });
  try {
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};

const post = async (url: string, data: any, options = {}) => {
  try {
    const response = await axios.post(url, data, options);
    return response.data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};

export async function login(email: string, password: string) {
  const url = "/properties";
  const res = await post(url, { email, password });
  console.log(res);
  return res;
}

export async function addProperty(property: CreatePropertyDto) {
  const url = "http://localhost:3001/properties";
  const res = await post(url, property);
  return res;
}

export async function getCitys(uf: string) {
  const url = `https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
