"use client"
import UseShortedProperty from "@/hooks/useShortedProperty";
import DropdownFive from "@/components/search-dropdown/inner-dropdown/DropdownFive";
import ListingTwoArea from "../listing-02/ListingTwoArea";
import { useEffect, useState } from "react";
import { getAllProperties, getProperties } from "@/app/imoveis/actions";

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

  return (
    <>

      <ListingTwoArea style={true} />
    </>
  )
}

export default ListingTwelveArea
