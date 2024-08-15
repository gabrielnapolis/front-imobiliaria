"use client"
import UseShortedProperty from "@/hooks/useShortedProperty";
import DropdownFive from "@/components/search-dropdown/inner-dropdown/DropdownFive";
import ListingTwoArea from "../listing-02/ListingTwoArea";
import { useEffect, useState } from "react";
import { getAllProperties, getProperties } from "@/app/imoveis/actions";

const ListingTwelveArea = () => {

  const itemsPerPage = 5;

  console.log("list 12")


  return (
    <>
      <ListingTwoArea style={true} />
    </>
  )
}

export default ListingTwelveArea
