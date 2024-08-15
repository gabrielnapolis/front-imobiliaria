"use client";

import ListingDetailsTwo from "@/components/ListingDetails/listing-details-2";
import Wrapper from "@/layouts/Wrapper";
import { useEffect, useState } from "react";
import { getPropertiesByID } from "@/app/imoveis/actions";


const Index = ({ params }: { params: { id: number } }) => {

  const [property, setProperty] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPropertiesByID(params.id);
        setProperty(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params]);


  return (
    <Wrapper>
      {property != null && <ListingDetailsTwo property={property} />}
    </Wrapper>
  );
};

export default Index;
