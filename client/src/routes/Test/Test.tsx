import React, { useState } from 'react'
import Maping from '../Map/Maping'

function Test() {

  const [continent, setContinent] = useState<string>('');

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    
    fetch(`/api/continents/${continent}/cities`).then(
      response => response.json()
    ).then(
      data => {
        if(data?.status === 404) {
          alert('Page not found');
          return;
        }
        if(data?.status === 500) {
          alert('Page 500');
          return;
        }
        setContinent(data);
      }
    )
  }

  return (
    <section className='container__map'>
      <Maping />
    </section>
  )
}

export default Test