import React, { useState } from 'react';
import Form from './Form/Form';
import Card from './Card/Card';

import { City } from './Card/Card'

// interface Metric {
//   color: string;
//   name: string;
//   score_out_of_10?: number;
// }

// export interface City {
//   _links: {};
//   categories: Metric[];
//   summary: string;
//   teleport_city_score: number;
// }

const Main = () => {
  const [input, setinput] = useState<string>();
  const [cityData, setCityData] = useState<City>();
  const [cityImage, setCityImage] = useState<string>();
  const addCityData = (data: City) => {
    setCityData(data);
  }
  const haveData = (city?: City, image?: string): boolean => {
    if (cityData){
      return true;
    } 
    return false;
  }


  console.log('Main card =>', cityData)
  return (
    <section className='main'>
      <Form setCityImage = {setCityImage} setCityData = {addCityData} />

      { cityData ? <Card cityData = {cityData} cityImage = {cityImage} input = {input}/> : null}
    </section>
  )
}

export default Main;
