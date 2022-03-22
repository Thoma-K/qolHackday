import React, { useState, useEffect }  from 'react'
import './Form.css'
import { City } from '../Card/Card';

interface FormProps {
  // cityData: Metric[],
  setCityData: (data :any) => void;
  setCityImage: (data: string) =>void;
}
// interface Metric {
//   color: string;
//   name: string;
//   score_out_of_10: number;
// }
const Form = ({ setCityData, setCityImage }: FormProps) => {
  const [continent, setContinent] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };
  useEffect(() => {
    if (input.length > 0) {
      localStorage.setItem('input', input);
    }
  }, [input]);
  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    
    const formatInput = input.replace(/ /g, "_").toLowerCase();
    
    fetch(`/api/cities/images/${formatInput}`).then(
      response => response.json()
    ).then(
      data => {
        console.log('data for image', data);
        if(data?.status === 404) {
          alert('Page not found');
          return;
        }
        if(data?.status === 500) {
          alert('Page 500');
          return;
        }
        setCityImage(data);
      }
    )
    
    fetch(`/api/cities/${formatInput}`).then(
      response => response.json()
    ).then(
      data => {
        console.log('data for city', data);
        if(data?.status === 404) {
          alert('Page not found');
          return;
        }
        if(data?.status === 500) {
          alert('Page 500');
          return;
        }
        setCityData(data);
      }
    )
    setInput('');
  };

  return (
    <section className='form__container'>
      <form className = 'form' onSubmit={handleSubmit}>
        <label className='form__label' htmlFor="search">
          Search for quality of life Metrics of a city:
        </label>
        <input className='form__field' name="search" type="text" value={input} 
          onChange={handleChange} list="history" placeholder='City' />
        
        <button id="btn" type="submit">Search</button>
      </form>
    </section>
  )
}

export default Form;