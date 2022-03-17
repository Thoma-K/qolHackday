import React from 'react';

interface CardProps {
  cityData: Metric[]
}
interface Metric {
  color: string;
  name: string;
  score_out_of_10: number;
}

const Card = ({cityData}: {cityData: Metric[]}) => {
  console.log('Card Section =>',cityData[0].name);
 // console.log('score_out_of_10', cityData[0].score_out_of_10)
  // Display city data
  // const sum = cityData.reduce((a, b) => a.score_out_of_10 + b.score_out_of_10, 0)

  // I want to add the Card when useEffect at form activates so that it will take the values of the city


  return(
    <article className='city'>
      <div className="card-image"></div>
      <div className="card-text">
        <span className="date">{cityData[0].name}</span>
        <h2>Post One</h2>
        <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
      </div>
      <div className="card-stats">
        <div className="stat">
          {/* <div className="value">{cityData[1].score_out_of_10 | 5}</div> */}
          <div className="type">Cost of Living</div>
        </div>
        <div className="stat border">
          {/* <div className="value">{cityData[4].score_out_of_10 | 5}</div> */}
          <div className="type">Travel Connectivity</div>
        </div>
        <div className="stat">
          {/* <div className="value">{cityData[14].score_out_of_10 | 5}</div> */}
          <div className="type">Internet Access</div>
        </div>
      </div>
    </article>
  )
}

export default Card;

