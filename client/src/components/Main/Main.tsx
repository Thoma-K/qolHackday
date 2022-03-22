import React, { useState } from 'react';
import Form from './Form/Form';
import Card from './Card/Card';

import { City } from './Card/Card'

const Main = () => {
  const [cityInput, setCityInput] = useState<string>();
  const [cityData, setCityData] = useState<City>();
  const [cityImage, setCityImage] = useState<string>();
  const addCityData = (data: City) => {
    setCityData(data);
  }
  const cityDataExist = cityData && cityImage && cityInput;

  return (
    <section className='main'>
      <Form setCityImage = {setCityImage} setCityData = {addCityData} setCityInput={setCityInput} />
      { cityDataExist ? <Card cityData = {cityData} cityImage = {cityImage} cityInput = {cityInput}/> : null}
    </section>
  )
}

export default Main;
