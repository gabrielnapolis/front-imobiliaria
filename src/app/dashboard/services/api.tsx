import { CreatePropertyDto } from "@/types/createPropertyDto";
import axios from "axios";

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

const post = async (url: string, data: any, options = {}) => {
  try {
    const response = await axios.post(url, data, options);
    if (response.status == 201 || response.status == 200) {
      return { data: data, error: null };
    } 
  } catch (error) {
    return { error: error }
  }
};

export async function getAddress(cep: string){
	if(cep.length >= 8){
		const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;
		const res = await fetch(url);
		const data = await res.json();
	
		return data;
	}
}