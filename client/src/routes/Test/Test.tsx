import React, { useState } from 'react'
import Map from '../Map/Map'

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
      <Map />
    </section>
  )
}

export default Test