import { PropertieType } from "@/data/inner-data/ListingData";

export async function getPropertiesByID(id: string) {
  const url = `http://localhost:3001/properties/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

export async function getAllProperties(): Promise<PropertieType[]> {
  const url = "http://localhost:3001/properties";
  const res = await fetch(url);
  const data:PropertieType[] = await res.json();

  return data;
}

export async function getCitys(uf: string) {
  const url = `https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
