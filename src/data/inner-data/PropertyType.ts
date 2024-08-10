export interface PropertyType {
  id: number;
  name: string;
  description?: string;
  price: number;
  classification: string;
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
  constructionYear?: number;
  gym: boolean;

  url_img?: string;
  page: string;
  
  // carousel_thumb: {
  //   id?: string;
  //   img: StaticImageData;
  //   active?: string;
  // }[];  
};

