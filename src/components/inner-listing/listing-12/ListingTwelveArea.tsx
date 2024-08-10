"use client"
import UseShortedProperty from "@/hooks/useShortedProperty";
import DropdownFive from "@/components/search-dropdown/inner-dropdown/DropdownFive";
import ListingTwoArea from "../listing-02/ListingTwoArea";
import { useEffect, useState } from "react";
import { getProperties } from "@/app/imoveis/actions";

const ListingTwelveArea = () => {
  const [propertyList, setPropertyList ] =useState([]);
  const itemsPerPage = 5;
  const page = "listing_3";

  const {
    handleBathroomChange,
    handleBedroomChange,
    handleSearchChange,
    handlePriceChange,
    maxPrice,
    priceValue,
    resetFilters,
    selectedAmenities,
    handleAmenityChange,
    handleLocationChange,
    handleStatusChange,
    handlePriceDropChange
  } = UseShortedProperty({propertyList,itemsPerPage, page });

  const handleResetFilter = () => {
    resetFilters();
  };
  useEffect(() => {
    // This block will be executed after selectedAmenities has been updated.
  
    let req ={
       location,
       maxPrice,
 
      //   ...selectedAmenities,

       
    }
    console.log(" search requested")
    getProperties(req).then(data=>{setPropertyList(data)
       console.log(" search resposne"+data)
  
    })

 }, []);
  return (
    <>
      <DropdownFive
        handlePriceDropChange={handlePriceDropChange}
        handleSearchChange={handleSearchChange}
        handleBedroomChange={handleBedroomChange}
        handleBathroomChange={handleBathroomChange}
        handlePriceChange={handlePriceChange}
        maxPrice={maxPrice}
        priceValue={priceValue}
        handleResetFilter={handleResetFilter}
        selectedAmenities={selectedAmenities}
        handleAmenityChange={handleAmenityChange}
        handleLocationChange={handleLocationChange}
        handleStatusChange={handleStatusChange}
      />
      <ListingTwoArea style={true} />
    </>
  )
}

export default ListingTwelveArea
