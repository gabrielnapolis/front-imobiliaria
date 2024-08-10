import UseProperty from "@/hooks/UseProperty";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectProperties } from "@/redux/features/propertySlice";
import { PropertyType } from "@/data/inner-data/PropertyType";
import { getAllProperties, getProperties } from "@/app/imoveis/actions";

interface DataType {
   propertyList:any[];
   itemsPerPage: number;
   page: string;
}

const  UseShortedProperty = ({ propertyList,itemsPerPage, page }: DataType) => {


    let all_property:PropertyType[] =  propertyList;



   const { properties, setProperties } = UseProperty();
   const filteredProperties = properties;
   const [itemOffset, setItemOffset] = useState(0);
   const [sortOption, setSortOption] = useState<string>("");
   const [status, setStatus] = useState<string | null>(null);
   const [location, setLocation] = useState<string | null>(null);
   const [selectedBedrooms, setSelectedBedrooms] = useState<string | null>(null);
   const [selectedBathrooms, setSelectedBathrooms] = useState<string | null>(null);
   const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

   // handleSortOptionChange
   const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setSortOption(event.target.value);
      setItemOffset(0);
   };

   // handleStatusChange
   const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setStatus(event.target.value);
      setItemOffset(0);
   };

   // handleLocationChange
   const handleLocationChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setLocation(event.target.value);
      setItemOffset(0);
   };

   // handleBedroomChange
   const handleBedroomChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectedBedrooms(event.target.value);
      setItemOffset(0);
   };

   // handleBathroomChange
   const handleBathroomChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectedBathrooms(event.target.value);
      setItemOffset(0);
   };

   // handleAmenityChange
   const handleAmenityChange = (event: ChangeEvent<HTMLInputElement>) => {
      const amenity = event.target.value;
      
      setSelectedAmenities((prevSelectedAmenities) => {
         if (prevSelectedAmenities.includes(amenity)) {
            return prevSelectedAmenities.filter((a) => a !== amenity);
         } else {
            return [...prevSelectedAmenities, amenity];
         }
      });
   };

   
   


   const endOffset = itemOffset + itemsPerPage;
   const currentItems = properties;
   
   const pageCount = Math.ceil(properties.length / itemsPerPage);

   const handlePageClick = (event: any) => {
      const newOffset = event.selected * itemsPerPage;
      setItemOffset(newOffset);
   };

   // All products
   const allProperties = useSelector(selectProperties);
   const filteredAllProduct = allProperties.filter(item => item.page === "listing_1");

   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      let req ={
         location,
         maxPrice,
         selectedBedrooms,
         selectedBathrooms,
        //   ...selectedAmenities,

         
      }
      console.log(" search requested")
      getProperties(req).then(data=>{
         setProperties(data)
         console.log(" search resposne"+data)
         all_property=data;
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
      handleTypeChange,
      handleStatusChange,
      handleBathroomChange,
      handlePriceChange,
      maxPrice,
      priceValue,
      resetFilters,
      selectedAmenities,
      handleAmenityChange,
      pageCount,
   };
};

export default UseShortedProperty;