
import axios from 'axios';
import React from 'react';

const fetchProperty = async (id: string) => {
  //fetch the properties
  const { data } = await axios.post(`http://localhost:3000/api/property`, {
    propertyId: id
  });
  console.log("::: RESULT DATA: ", data);
  return data;
};


const page = async ({params}) => {

  const { property, estimatedLoad } = await fetchProperty(params.propertyId);

  console.log("params: ", params.propertyId);


  return (
    <div>{property.propClientName} - {estimatedLoad}</div>
  )
}

export default page