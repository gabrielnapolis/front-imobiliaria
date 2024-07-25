import { StaticImageData } from "next/image";

import propertyThumb_1 from "@/assets/images/listing/img_01.jpg";
import propertyThumb_2 from "@/assets/images/listing/img_02.jpg";
import propertyThumb_3 from "@/assets/images/listing/img_03.jpg";
import propertyThumb_4 from "@/assets/images/listing/img_04.jpg";
import propertyThumb_5 from "@/assets/images/listing/img_05.jpg";
import propertyThumb_6 from "@/assets/images/listing/img_06.jpg";
import propertyThumb_7 from "@/assets/images/listing/img_27.jpg";
import propertyThumb_8 from "@/assets/images/listing/img_26.jpg";

import propertyThumb_9 from "@/assets/images/listing/img_17.jpg";
import propertyThumb_10 from "@/assets/images/listing/img_18.jpg";
import propertyThumb_11 from "@/assets/images/listing/img_19.jpg";
import propertyThumb_12 from "@/assets/images/listing/img_32.jpg";
import propertyThumb_13 from "@/assets/images/listing/img_33.jpg";
import propertyThumb_14 from "@/assets/images/listing/img_34.jpg";
import propertyThumb_15 from "@/assets/images/listing/img_30.jpg";
import propertyThumb_16 from "@/assets/images/listing/img_39.jpg";
import propertyThumb_17 from "@/assets/images/listing/img_40.jpg";
import propertyThumb_18 from "@/assets/images/listing/img_41.jpg";
import propertyThumb_19 from "@/assets/images/listing/img_42.jpg";

import propertyLargeThumb_1 from "@/assets/images/listing/img_large_01.jpg";
import propertyLargeThumb_2 from "@/assets/images/listing/img_large_02.jpg";
import propertyLargeThumb_3 from "@/assets/images/listing/img_large_03.jpg";
import propertyLargeThumb_4 from "@/assets/images/listing/img_large_04.jpg";
import propertyLargeThumb_5 from "@/assets/images/listing/img_large_05.jpg";
import propertyLargeThumb_6 from "@/assets/images/listing/img_large_06.jpg";

interface DataType {
   id: number;
   page: string;
   tag: string;
   tag_bg?: string;
   carousel_thumb: {
      id?:string;
      img: StaticImageData;
      active?: string;
   }[];
   thumb?: StaticImageData;
   bg_img?: string;
   title: string;
   address?: string;
   location: string;
   property_info: {
      sqft: number;
      bed: string;
      bath: string;
      kitchen?: string;
      parking_lot?: string;
      garden?: string;
   };
   data_delay_time?: string;
   price: number;
   price_text?: string;
   carousel?: string;
   type: string;
   status: string;
   amenities?: string[];
}[];

const listing_data: DataType[] = [
   // listing_3

   {
      id: 1,
      page: "listing_3",
      tag: "Venda",
      tag_bg: "sale",
      bg_img: "item-one",
      carousel_thumb: [{id:"1", img: propertyLargeThumb_1 }, {id:"2", img: propertyLargeThumb_2 }, {id:"3", img: propertyLargeThumb_3 }],
      title: "Marbel Apartments",
      address: "Twin tower, Acapulco, Mexico",
      location: "Acapulco, TESTE",
      property_info: { sqft: 1370, bed: "04", bath: "01", kitchen: "01" },
      price: 24000,
      status: "Sell Villas",
      type: "Best Match",
      amenities: ["Garages", "Parking", "Wifi", "Elevator"],
   },
   {
      id: 2,
      page: "listing_3",
      tag: "Aluguel",
      bg_img: "item-two",
      carousel_thumb: [{id:"3", img: propertyLargeThumb_3 }, {id:"2", img: propertyLargeThumb_2 }, {id:"1", img: propertyLargeThumb_1 }],
      title: "White House villa",
      address: "Issaquah, Washington DC",
      location: "Washington DC",
      property_info: { sqft: 1170, bed: "01", bath: "01", kitchen: "01" },
      data_delay_time: "0.1s",
      price: 2370,
      price_text: "m",
      status: "Rent Industrial",
      type: "Newest",
      amenities: ["Swimming Pool", "Parking", "Wifi", "Fireplace", "Play Ground", "Elevator"],
   },
   {
      id: 3,
      page: "listing_3",
      tag: "Venda",
      tag_bg: "sale",
      bg_img: "item-three",
      carousel_thumb: [{id:"2", img: propertyLargeThumb_2 }, {id:"1", img: propertyLargeThumb_1 }, {id:"3", img: propertyLargeThumb_3 }],
      title: "Luxury villa Dal lake",
      address: "44 Elmessaha Street Dokki, Giza,Egypt",
      location: "Giza, Egypt",
      property_info: { sqft: 1070, bed: "03", bath: "01", kitchen: "01" },
      price: 43000,
      status: "Sell Houses",
      type: "Best Seller",
      amenities: ["Swimming Pool", "Parking", "Wifi", "Pet Friendly", "Ceiling Height", "Fireplace", "Play Ground", "Elevator"],
   },
   {
      id: 4,
      page: "listing_3",
      tag: "Aluguel",
      bg_img: "item-four",
      carousel_thumb: [{id:"4", img: propertyLargeThumb_4 }, {id:"5", img: propertyLargeThumb_5 }, {id:"6", img: propertyLargeThumb_6 }],
      title: "Galaxy Touch Flat",
      address: "Alexanderstraße 40, Berlin, Germany.",
      location: "Berlin, Germany",
      property_info: { sqft: 1370, bed: "04", bath: "04", kitchen: "01" },
      data_delay_time: "0.1s",
      price: 1820,
      price_text: "m",
      status: "Rent Condos",
      type: "Newest",
      amenities: ["A/C & Heating", "Garages", "Parking", "Wifi", "Ceiling Height", "Fireplace", "Play Ground", "Elevator"],
   },
   {
      id: 5,
      page: "listing_3",
      tag: "Venda",
      tag_bg: "sale",
      bg_img: "item-five",
      carousel_thumb: [{id:"6", img: propertyLargeThumb_6 }, {id:"4", img: propertyLargeThumb_4 }, {id:"5", img: propertyLargeThumb_5 }],
      title: "Morpho House",
      address: "Boulevard d'Alsace, Cannes, France",
      location: "Cannes, France",
      property_info: { sqft: 1470, bed: "02", bath: "02", kitchen: "01" },
      price: 27100,
      carousel: "5",
      status: "Buy Apartments",
      type: "Newest",
      amenities: ["A/C & Heating", "Garages", "Garden", "Fireplace", "Play Ground", "Elevator"],
   },
   {
      id: 6,
      page: "listing_3",
      tag: "Venda",
      tag_bg: "sale",
      bg_img: "item-three",
      carousel_thumb: [{id:"2", img: propertyLargeThumb_2 }, {id:"1", img: propertyLargeThumb_1 }, {id:"3", img: propertyLargeThumb_3 }],
      title: "Luxury villa Dal lake",
      address: "44 Elmessaha Street Dokki, Giza,Egypt",
      location: "Giza, Egypt",
      property_info: { sqft: 1070, bed: "03", bath: "01", kitchen: "01" },
      price: 43000,
      status: "Sell Houses",
      type: "Best Seller",
      amenities: ["Swimming Pool", "Parking", "Wifi", "Pet Friendly", "Ceiling Height", "Fireplace", "Play Ground", "Elevator"],
   },
   {
      id: 7,
      page: "listing_3",
      tag: "Aluguel",
      bg_img: "item-four",
      carousel_thumb: [{id:"4", img: propertyLargeThumb_4 }, {id:"5", img: propertyLargeThumb_5 }, {id:"6", img: propertyLargeThumb_6 }],
      title: "Galaxy Touch Flat",
      address: "Alexanderstraße 40, Berlin, Germany.",
      location: "Berlin, Germany",
      property_info: { sqft: 1370, bed: "04", bath: "04", kitchen: "01" },
      data_delay_time: "0.1s",
      price: 1820,
      price_text: "m",
      status: "Rent Condos",
      type: "Newest",
      amenities: ["A/C & Heating", "Garages", "Parking", "Wifi", "Ceiling Height", "Fireplace", "Play Ground", "Elevator"],
   },
   {
      id: 8,
      page: "listing_3",
      tag: "Venda",
      tag_bg: "sale",
      bg_img: "item-five",
      carousel_thumb: [{id:"6", img: propertyLargeThumb_6 }, {id:"4", img: propertyLargeThumb_4 }, {id:"5", img: propertyLargeThumb_5 }],
      title: "Morpho House",
      address: "Boulevard d'Alsace, Cannes, France",
      location: "Cannes, France",
      property_info: { sqft: 1470, bed: "02", bath: "02", kitchen: "01" },
      price: 27100,
      carousel: "5",
      status: "Buy Apartments",
      type: "Newest",
      amenities: ["A/C & Heating", "Garages", "Garden", "Fireplace", "Play Ground", "Elevator"],
   },
   {
      id: 9,
      page: "listing_3",
      tag: "Venda",
      tag_bg: "sale",
      bg_img: "item-one",
      carousel_thumb: [{id:"1", img: propertyLargeThumb_1 }, {id:"2", img: propertyLargeThumb_2 }, {id:"3", img: propertyLargeThumb_3 }],
      title: "Marbel Apartments",
      address: "Twin tower, Acapulco, Mexico",
      location: "Acapulco, Mexico",
      property_info: { sqft: 1370, bed: "04", bath: "01", kitchen: "01" },
      price: 24000,
      status: "Sell Villas",
      type: "Best Match",
      amenities: ["Garages", "Parking", "Wifi", "Elevator"],
   },
   {
      id: 10,
      page: "listing_3",
      tag: "Aluguel",
      bg_img: "item-two",
      carousel_thumb: [{id:"3", img: propertyLargeThumb_3 }, {id:"2", img: propertyLargeThumb_2 }, {id:"1", img: propertyLargeThumb_1 }],
      title: "White House villa",
      address: "Issaquah, Washington DC",
      location: "Washington DC",
      property_info: { sqft: 1170, bed: "01", bath: "01", kitchen: "01" },
      data_delay_time: "0.1s",
      price: 2370,
      price_text: "m",
      status: "Rent Industrial",
      type: "Newest",
      amenities: ["Swimming Pool", "Parking", "Wifi", "Fireplace", "Play Ground", "Elevator"],
   },
   {
      id: 11,
      page: "listing_3",
      tag: "Venda",
      tag_bg: "sale",
      bg_img: "item-one",
      carousel_thumb: [{id:"1", img: propertyLargeThumb_1 }, {id:"2", img: propertyLargeThumb_2 }, {id:"3", img: propertyLargeThumb_3 }],
      title: "Marbel Apartments",
      address: "Twin tower, Acapulco, Mexico",
      location: "Acapulco, Mexico",
      property_info: { sqft: 1370, bed: "04", bath: "01", kitchen: "01" },
      price: 24000,
      status: "Sell Villas",
      type: "Best Match",
      amenities: ["Garages", "Parking", "Wifi", "Elevator"],
   },
   {
      id: 12,
      page: "listing_3",
      tag: "Aluguel",
      bg_img: "item-two",
      carousel_thumb: [{id:"3", img: propertyLargeThumb_3 }, {id:"2", img: propertyLargeThumb_2 }, {id:"1", img: propertyLargeThumb_1 }],
      title: "White House villa",
      address: "Issaquah, Washington DC",
      location: "Washington DC",
      property_info: { sqft: 1170, bed: "01", bath: "01", kitchen: "01" },
      data_delay_time: "0.1s",
      price: 2370,
      price_text: "m",
      status: "Rent Industrial",
      type: "Newest",
      amenities: ["Swimming Pool", "Parking", "Wifi", "Fireplace", "Play Ground", "Elevator"],
   },
]

export default listing_data;