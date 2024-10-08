import { PropertyType } from "@/data/inner-data/PropertyType";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://3.141.38.117:3001/",
  timeout: 5000,
  headers: {
    ContentType: "program/json",
  },
});

export async function getPropertiesByID(id: number) {
  const url = `/properties/${id}`;
  const res = await fetchData(url);
  return res;
}

const postData = async (url: string,data:any, options = {}) => {
  try {
    const response = await axios.post(url,data, options,);
    return response.data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};

const fetchData = async (url: string, options = {}) => {
  try {
 
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};

export async function getAllProperties() {
  const url = "http://3.141.38.117:3001/properties";
  const res = await fetchData(url);
  return res;
}

export async function getProperties(req:any) {
  const url = "http://3.141.38.117:3001/properties/find";
  const res = await postData(url,req);
  return res;
}

export async function getCitys(uf: string) {
  const url = `https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export async function deleteProperty(id:number) {
  const url = `http://3.141.38.117:3001/properties/${id}`;
  const res = await deleteData(url);
  console.log(res);
  return res;
}

const deleteData = async (url: string) => {
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};