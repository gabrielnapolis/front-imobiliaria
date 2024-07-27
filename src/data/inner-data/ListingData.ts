import { StaticImageData } from "next/image";
import propertyLargeThumb_1 from "@/assets/images/listing/img_large_01.jpg";
import propertyLargeThumb_2 from "@/assets/images/listing/img_large_02.jpg";
import propertyLargeThumb_3 from "@/assets/images/listing/img_large_03.jpg";
import propertyLargeThumb_4 from "@/assets/images/listing/img_large_04.jpg";
import propertyLargeThumb_5 from "@/assets/images/listing/img_large_05.jpg";
import propertyLargeThumb_6 from "@/assets/images/listing/img_large_06.jpg";

export interface PropertieType {
  id: number;
  name: string;
  description?: string;
  price: number;
  propertyType: string;
  status: string;
  mts: number;
  bed: string;
  bath: string;
  kitchen?: string;
  parking?: string;
  garden?: string;
  hvac?: boolean;
  garages?: number;
  playground?: boolean;
  elevator?: boolean;
  swimmimgpool?: boolean;
  ceilingHeight?: number;
  address?: string;
  location: string;
  city?: string;
  state?: string;
  neighborhood?: string;
  streetAdress?: string;

  url_img?: string;
  page: string;
  // carousel_thumb: {
  //   id?: string;
  //   img: StaticImageData;
  //   active?: string;
  // }[];
  //amenities?: string[];
  
};

const listing_data: PropertieType[] = [
  {
    id: 1,
    name: "Marbel Apartments",
    propertyType: "Condomínio",
    price: 24000,
    status: "Aluguel",
    address: "Twin tower, Acapulco, Mexico",
    location: "Acapulco, TESTE",
    mts: 1370,
    bed: "04",
    bath: "01",
    kitchen: "01",
    page: "listing_3",
    // carousel_thumb: [
    //   { id: "1", img: propertyLargeThumb_1 },
    //   { id: "2", img: propertyLargeThumb_2 },
    //   { id: "3", img: propertyLargeThumb_3 },
    // ],
    //amenities: ["Garagem", "Jardim", "Wifi", "Elevator"],
  },
  {
    id: 2,
    name: "White House villa",
    propertyType: "Casa",
    price: 2370,
    status: "Venda",
    address: "Issaquah, Washington DC",
    location: "Washington DC",
    page: "listing_3",
    // carousel_thumb: [
    //   { id: "3", img: propertyLargeThumb_3 },
    //   { id: "2", img: propertyLargeThumb_2 },
    //   { id: "1", img: propertyLargeThumb_1 },
    // ],
    mts: 1170,
    bed: "01",
    bath: "01",
    kitchen: "01",
    //amenities: ["Garagem", "Jardim", "Wifi", "Elevator"],
  },
  {
    id: 3,
    name: "Luxury villa Dal lake",
    status: "Venda",
    propertyType: "Casa",
    price: 43000,
    address: "44 Elmessaha Street Dokki, Giza,Egypt",
    location: "Giza, Egypt",
    page: "listing_3",
    // carousel_thumb: [
    //   { id: "2", img: propertyLargeThumb_2 },
    //   { id: "1", img: propertyLargeThumb_1 },
    //   { id: "3", img: propertyLargeThumb_3 },
    // ],
    mts: 1070,
    bed: "03",
    bath: "01",
    kitchen: "01",
    //amenities: ["Garagem", "Jardim", "Wifi", "Elevator"],
  }
];

export default listing_data;
