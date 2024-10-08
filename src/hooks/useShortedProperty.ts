import UseProperty from "@/hooks/UseProperty";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectProperties } from "@/redux/features/propertySlice";
import { PropertyType } from "@/data/inner-data/PropertyType";
import { getAllProperties, getProperties } from "@/app/imoveis/actions";
import CommonPropertyFeatureList from "@/components/ListingDetails/listing-details-common/CommonPropertyFeatureList";

interface DataType {

   itemsPerPage: number;
   page: string;
}

const  UseShortedProperty = ({itemsPerPage, page }: DataType) => {
   const featureMappings: { [key: string]: { category: string; featureTitle: string; count: (value: any) => string } } = {
      bed: { category: 'details', featureTitle: "Quartos", count: (value) => value.toString() },
      bath: { category: 'details', featureTitle: "Banheiros", count: (value) => value.toString() },
      kitchen: { category: 'details', featureTitle: "Cozinha", count: (value) => value.toString() },
      parking: { category: 'external', featureTitle: "Estacionamento", count: (value) => value ? "Sim" : "Não" },
      garden: { category: 'details', featureTitle: "Jardim", count: (value) => value ? "Sim" : "Não" },
      hvac: { category: 'details', featureTitle: "Ar-condicionado", count: (value) => value ? "Sim" : "Não" },
      garages: { category: 'external', featureTitle: "Garagem", count: (value) => value.toString() },
      playground: { category: 'external', featureTitle: "Playground", count: (value) => value ? "Sim" : "Não" },
      elevator: { category: 'details', featureTitle: "Elevador", count: (value) => value ? "Sim" : "Não" },
      swimmimgpool: { category: 'external', featureTitle: "Piscina", count: (value) => value ? "Sim" : "Não" },
      ceilingHeight: { category: 'details', featureTitle: "Pé Direito", count: (value) => value.toString() },
      mts: { category: 'details', featureTitle: "M²", count: (value) => value.toString() },
      security: { category: 'external', featureTitle: "Segurança", count: (value) => value },
      pcdAccess: { category: 'details', featureTitle: "Acessibilidade para PCD", count: (value) => value ? "Sim" : "Não" },
      furnished: { category: 'details', featureTitle: "Mobiliado", count: (value) => value ? "Sim" : "Não" },
      wifi: { category: 'details', featureTitle: "WiFi", count: (value) => value ? "Sim" : "Não" },
      petAllowed: { category: 'details', featureTitle: "Aceita Animais", count: (value) => value ? "Sim" : "Não" },
      gym: { category: 'external', featureTitle: "Academia", count: (value) => value ? "Sim" : "Não" }
    };

    

   const { properties, setProperties } = UseProperty();
   const filteredProperties = properties;
   const [currentItems,setCurrentItems] = useState<any[]>([]);
   const [itemOffset, setItemOffset] = useState(0);
   const [sortOption, setSortOption] = useState<string>("");
   const [classification, setClassificationChange] = useState<string>("venda");
   const [status, setStatus] = useState<string | null>(null);
   const [type, setType] = useState<string | null>(null);
   const [location, setLocation] = useState<string | null>(null);
   const [selectedBedrooms, setSelectedBedrooms] = useState<string | null>("1");
   const [selectedBathrooms, setSelectedBathrooms] = useState<string | null>("1");
   const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
   useEffect(() => {
      // This block will be executed after selectedAmenities has been updated.
     
      let req ={
         location,
         maxPrice,
         selectedBedrooms,
         selectedBathrooms,
         classification,
         type
        //   ...selectedAmenities,
  
         
      }
      console.log("use effect",req)
      if(properties.length!=0){
        console.log(" search requested")
        getProperties(req).then(data=>{
         //setProperties(data)
           console.log(" search resposne"+data)
           setCurrentItems(data)
        })
      }else{
        getAllProperties().then(data=>{ 
         setProperties(data) 
         if(data){
            setCurrentItems(data)
         }}
        
      )
      }
   
  
   }, []);
   // handleSortOptionChange
   const handleClassificationChange = async (event: ChangeEvent<HTMLSelectElement>) => {
     await setClassificationChange(event.target.value);
      setItemOffset(0);
   };

   // handleStatusChange
   const handleStatusChange = async (event: ChangeEvent<HTMLSelectElement>) => {
      await setStatus(event.target.value);

   };
   const handleTypeChange = async (event: ChangeEvent<HTMLSelectElement>) => {
      await setType(event.target.value);
   };

   // handleLocationChange
   const handleLocationChange = async (event: ChangeEvent<HTMLSelectElement>) => {
      await setLocation(event.target.value);
  
   };

   // handleBedroomChange
   const handleBedroomChange =  async (event: ChangeEvent<HTMLSelectElement>) => {
      await setSelectedBedrooms(event.target.value);
     
   };

   // handleBathroomChange
   const handleBathroomChange = async (event: ChangeEvent<HTMLSelectElement>) => {
      await setSelectedBathrooms(event.target.value);
 

   };

   // handleAmenityChange
   const handleAmenityChange =  async (event: ChangeEvent<HTMLInputElement>) => {
      const amenity = event.target.value;
    
      setSelectedAmenities((prevSelectedAmenities) => {
         if (prevSelectedAmenities.includes(amenity)) {
            return prevSelectedAmenities.filter((a) => a !== amenity);
         } else {
            return [...prevSelectedAmenities, amenity];
         }

         
      });
      
      console.log(selectedAmenities)
   };

   
   
   const updatePropertyList = async  ()=>{
      let req ={
         location,
         maxPrice,
         selectedBedrooms,
         selectedBathrooms,
         classification,
         type
        //   ...selectedAmenities,

         
      }
      console.log("handle search change requested")
      getProperties(req).then(data=>{
         setProperties(data)
         console.log(" search resposne"+data)
      
         setCurrentItems(data)
      })
   }

   const endOffset = itemOffset + itemsPerPage;
 
   
   const pageCount = Math.ceil(properties.length / itemsPerPage);

   const handlePageClick = async (event: any) => {
      const newOffset = event.selected * itemsPerPage;
      setItemOffset(newOffset);
   };
   

   // All products
   const allProperties = useSelector(selectProperties);
   const filteredAllProduct = allProperties.filter(item => item.page === "listing_1");

   const handleSearchChange =  async(e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
      let req ={
         location,
         maxPrice,
         type,
         selectedBedrooms,
         selectedBathrooms,
         classification
        //   ...selectedAmenities,

         
      }
      console.log("handle search change requested")
      getProperties(req).then(data=>{
         setProperties(data)
         console.log(" search resposne"+data)
  
      })
  
   };

   // handle Price
   const maxPrice =50000000
   const [priceValue, setPriceValue] = useState([0, maxPrice]);

  

   const handlePriceChange = (val: number[]) => {
      setPriceValue(val)
   }


   const priceRanges: {
      [key: string]: number[];
   } = {
      "1": [10000, 200000],
      "2": [20000, 300000],
      "3": [30000, 400000],
   };

   const handlePriceDropChange = (selectedValue: string) => {
      const selectedRange = priceRanges[selectedValue];
      const newPriceValue = selectedRange ? selectedRange : [0, maxPrice];
      setPriceValue(newPriceValue);
   };

   const resetFilters = () => {
      setSortOption("");
      setItemOffset(0);
      setStatus(null);
      setLocation(null);
      setSelectedBedrooms(null);
      setSelectedBathrooms(null);
      setSelectedAmenities([]);
      setPriceValue([0, maxPrice]);
   };

   return {
      handlePriceDropChange,
      itemOffset,
      sortedProperties:properties,
      currentItems,
      handlePageClick,
      handleSearchChange,
      handleBedroomChange,
      handleLocationChange,
      handleClassificationChange,
      handleStatusChange,
      handleBathroomChange,
      handlePriceChange,
      maxPrice,
      priceValue,
      resetFilters,
      selectedAmenities,
      handleAmenityChange,
      pageCount,
      handleTypeChange
   };
};

export default UseShortedProperty;