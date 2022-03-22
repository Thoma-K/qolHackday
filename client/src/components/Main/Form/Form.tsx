import React, { useState, useEffect }  from 'react'
import './Form.css'
import { City } from '../Card/Card';

interface FormProps {
  // cityData: Metric[],
  setCityData: (data :any) => void;
  setCityImage: (data: string) =>void;
  setCityInput: (data: string) =>void;
}

const Form = ({ setCityData, setCityImage, setCityInput }: FormProps) => {
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

    Promise.all([
      fetch(`/api/cities/images/${formatInput}`),
      fetch(`/api/cities/${formatInput}`)
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([image, data]) => {
      if(image === 404 || image === 404) {
          alert('Image not found');
          return;
      }
      if(data?.status === 404 || data?.status === 500) {
        alert('Page not found');
        return;
      }
      setCityData(data);
      setCityImage(image);
      console.log('input', input);
      setCityInput(input)
    })
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