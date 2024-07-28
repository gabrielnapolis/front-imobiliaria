export interface CreatePropertyDto {
    
    name: string;
    
    description: string;
    
    price: number;

    type: string;

    status: string;

    city: string;
  
    state: string;
 
    neighborhood: string;
  
    forRent: boolean;

    isSold: boolean;
 
    propertyType: string;
    
    hvac: boolean;

    garages: number;

    garden: boolean;

    playground: boolean;
  
    elevator: boolean;
   
    swimmimgpool: boolean;
  
    parking: boolean;

    ceilingHeight: number;
   

}
