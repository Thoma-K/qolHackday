import React, { useState } from 'react';
import Form from './Form/Form';
import Card from './Card/Card';

interface Metric {
  color: string;
  name: string;
  score_out_of_10?: number;
}

const Main = () => {
  const [input, setInput] = useState<string>('');
  const [cityData, setCityData] = useState<Metric[]>([{
    color: '',
    name: '',
    score_out_of_10: 0,
  }]);
  const addCityData = (data) => {
    setCityData(data);
  }
  console.log('Main card =>', cityData)
  return (
    <div>Main
      <Form setCityData = {addCityData} />
      
      <Card input = {input} cityData = {cityData}/>
    </div>
  )
}

export default Main;