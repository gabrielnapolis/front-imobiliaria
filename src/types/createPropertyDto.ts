export interface CreatePropertyDto {
  
  name: string;
  description: string;
  price: number;
  status: string;
  city: string;
  state: string;
  neighborhood: string;
  streetAdress: string;
  mts: number;
  bed: number;
  bath: number;
  kitchen: number;
  propertyType: string;
  garages: number;
  ceilingHeight: number;
  constructionYear: number;
  security: string;
  floors: number;
  hvac: boolean;
  garden: boolean;
  playground: boolean;
  elevator: boolean;
  swimmimgpool: boolean;
  parking: boolean;
  pcdAccess: boolean;
  furnished: boolean;
  wifi: boolean;
  petAllowed: boolean;
  gym: boolean;
  grill: boolean;
}
