import { StaticImageData } from "next/image";
import propertyLargeThumb_1 from "@/assets/images/listing/img_large_01.jpg";
import propertyLargeThumb_2 from "@/assets/images/listing/img_large_02.jpg";
import propertyLargeThumb_3 from "@/assets/images/listing/img_large_03.jpg";
import propertyLargeThumb_4 from "@/assets/images/listing/img_large_04.jpg";
import propertyLargeThumb_5 from "@/assets/images/listing/img_large_05.jpg";
import propertyLargeThumb_6 from "@/assets/images/listing/img_large_06.jpg";

interface PropertieType {
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

  thumb?: StaticImageData;
  bg_img?: string;
  page: string;
  carousel?: string;
  carousel_thumb: {
    id?: string;
    img: StaticImageData;
    active?: string;
  }[];

  amenities?: string[];
  
}
[];

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
    carousel_thumb: [
      { id: "1", img: propertyLargeThumb_1 },
      { id: "2", img: propertyLargeThumb_2 },
      { id: "3", img: propertyLargeThumb_3 },
    ],
    amenities: ["Garagem", "Jardim", "Wifi", "Elevator"],
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
    bg_img: "item-two",
    carousel_thumb: [
      { id: "3", img: propertyLargeThumb_3 },
      { id: "2", img: propertyLargeThumb_2 },
      { id: "1", img: propertyLargeThumb_1 },
    ],
    mts: 1170,
    bed: "01",
    bath: "01",
    kitchen: "01",
    amenities: ["Garagem", "Jardim", "Wifi", "Elevator"],
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
    carousel_thumb: [
      { id: "2", img: propertyLargeThumb_2 },
      { id: "1", img: propertyLargeThumb_1 },
      { id: "3", img: propertyLargeThumb_3 },
    ],
    mts: 1070,
    bed: "03",
    bath: "01",
    kitchen: "01",
    amenities: ["Garagem", "Jardim", "Wifi", "Elevator"],
  },
  // {
  //    id: 4,
  //    page: "listing_3",
  //    bg_img: "item-four",
  //    carousel_thumb: [{id:"4", img: propertyLargeThumb_4 }, {id:"5", img: propertyLargeThumb_5 }, {id:"6", img: propertyLargeThumb_6 }],
  //    name: "Galaxy Touch Flat",
  //    address: "Alexanderstraße 40, Berlin, Germany.",
  //    location: "Berlin, Germany",
  //    property_info: { sqft: 1370, bed: "04", bath: "04", kitchen: "01" },
  //    price: 1820,
  //    status: "Aluguel",
  //    type: "Newest",
  //    amenities: ["A/C & Heating", "Garages", "Parking", "Wifi", "Ceiling Height", "Fireplace", "Play Ground", "Elevator"],
  // },
  // {
  //    id: 5,
  //    page: "listing_3",
  //    bg_img: "item-five",
  //    carousel_thumb: [{id:"6", img: propertyLargeThumb_6 }, {id:"4", img: propertyLargeThumb_4 }, {id:"5", img: propertyLargeThumb_5 }],
  //    title: "Morpho House",
  //    address: "Boulevard d'Alsace, Cannes, France",
  //    location: "Cannes, France",
  //    property_info: { sqft: 1470, bed: "02", bath: "02", kitchen: "01" },
  //    price: 27100,
  //    carousel: "5",
  //    status: "Venda",
  //    type: "Newest",
  //    amenities: ["A/C & Heating", "Garages", "Garden", "Fireplace", "Play Ground", "Elevator"],
  // },
  // {
  //    id: 6,
  //    page: "listing_3",
  //    tag: "Venda",
  //    bg_img: "item-three",
  //    carousel_thumb: [{id:"2", img: propertyLargeThumb_2 }, {id:"1", img: propertyLargeThumb_1 }, {id:"3", img: propertyLargeThumb_3 }],
  //    title: "Luxury villa Dal lake",
  //    address: "44 Elmessaha Street Dokki, Giza,Egypt",
  //    location: "Giza, Egypt",
  //    property_info: { sqft: 1070, bed: "03", bath: "01", kitchen: "01" },
  //    price: 43000,
  //    status: "Sell Houses",
  //    type: "Best Seller",
  //    amenities: ["Swimming Pool", "Parking", "Wifi", "Pet Friendly", "Ceiling Height", "Fireplace", "Play Ground", "Elevator"],
  // },
  // {
  //    id: 7,
  //    page: "listing_3",
  //    tag: "Aluguel",
  //    bg_img: "item-four",
  //    carousel_thumb: [{id:"4", img: propertyLargeThumb_4 }, {id:"5", img: propertyLargeThumb_5 }, {id:"6", img: propertyLargeThumb_6 }],
  //    title: "Galaxy Touch Flat",
  //    address: "Alexanderstraße 40, Berlin, Germany.",
  //    location: "Berlin, Germany",
  //    property_info: { sqft: 1370, bed: "04", bath: "04", kitchen: "01" },
  //    price: 1820,
  //    status: "Rent Condos",
  //    type: "Newest",
  //    amenities: ["A/C & Heating", "Garages", "Parking", "Wifi", "Ceiling Height", "Fireplace", "Play Ground", "Elevator"],
  // },
  // {
  //    id: 8,
  //    page: "listing_3",
  //    tag: "Venda",
  //    bg_img: "item-five",
  //    carousel_thumb: [{id:"6", img: propertyLargeThumb_6 }, {id:"4", img: propertyLargeThumb_4 }, {id:"5", img: propertyLargeThumb_5 }],
  //    title: "Morpho House",
  //    address: "Boulevard d'Alsace, Cannes, France",
  //    location: "Cannes, France",
  //    property_info: { sqft: 1470, bed: "02", bath: "02", kitchen: "01" },
  //    price: 27100,
  //    carousel: "5",
  //    status: "Buy Apartments",
  //    type: "Newest",
  //    amenities: ["A/C & Heating", "Garages", "Garden", "Fireplace", "Play Ground", "Elevator"],
  // },
  // {
  //    id: 9,
  //    page: "listing_3",
  //    tag: "Venda",
  //    bg_img: "item-one",
  //    carousel_thumb: [{id:"1", img: propertyLargeThumb_1 }, {id:"2", img: propertyLargeThumb_2 }, {id:"3", img: propertyLargeThumb_3 }],
  //    title: "Marbel Apartments",
  //    address: "Twin tower, Acapulco, Mexico",
  //    location: "Acapulco, Mexico",
  //    property_info: { sqft: 1370, bed: "04", bath: "01", kitchen: "01" },
  //    price: 24000,
  //    status: "Sell Villas",
  //    type: "Best Match",
  //    amenities: ["Garages", "Parking", "Wifi", "Elevator"],
  // },
  // {
  //    id: 10,
  //    page: "listing_3",
  //    tag: "Aluguel",
  //    bg_img: "item-two",
  //    carousel_thumb: [{id:"3", img: propertyLargeThumb_3 }, {id:"2", img: propertyLargeThumb_2 }, {id:"1", img: propertyLargeThumb_1 }],
  //    title: "White House villa",
  //    address: "Issaquah, Washington DC",
  //    location: "Washington DC",
  //    property_info: { sqft: 1170, bed: "01", bath: "01", kitchen: "01" },
  //    price: 2370,
  //    status: "Rent Industrial",
  //    type: "Newest",
  //    amenities: ["Swimming Pool", "Parking", "Wifi", "Fireplace", "Play Ground", "Elevator"],
  // },
  // {
  //    id: 11,
  //    page: "listing_3",
  //    tag: "Venda",
  //    bg_img: "item-one",
  //    carousel_thumb: [{id:"1", img: propertyLargeThumb_1 }, {id:"2", img: propertyLargeThumb_2 }, {id:"3", img: propertyLargeThumb_3 }],
  //    title: "Marbel Apartments",
  //    address: "Twin tower, Acapulco, Mexico",
  //    location: "Acapulco, Mexico",
  //    property_info: { sqft: 1370, bed: "04", bath: "01", kitchen: "01" },
  //    price: 24000,
  //    status: "Sell Villas",
  //    type: "Best Match",
  //    amenities: ["Garages", "Parking", "Wifi", "Elevator"],
  // },
  // {
  //    id: 12,
  //    page: "listing_3",
  //    tag: "Aluguel",
  //    bg_img: "item-two",
  //    carousel_thumb: [{id:"3", img: propertyLargeThumb_3 }, {id:"2", img: propertyLargeThumb_2 }, {id:"1", img: propertyLargeThumb_1 }],
  //    title: "White House villa",
  //    address: "Issaquah, Washington DC",
  //    location: "Washington DC",
  //    property_info: { sqft: 1170, bed: "01", bath: "01", kitchen: "01" },
  //    price: 2370,
  //    status: "Rent Industrial",
  //    type: "Newest",
  //    amenities: ["Swimming Pool", "Parking", "Wifi", "Fireplace", "Play Ground", "Elevator"],
  // },
];

export default listing_data;
