import React from 'react';
import './Card.css';

interface CardProps {
  cityData: Metric[]
  cityImage: string
}
export interface City {
  _links: {};
  categories: Metric[];
  summary: string;
  teleport_city_score: number;
}
interface Metric {
  color: string;
  name: string;
  score_out_of_10: number;
}

interface Props {
  cityData: City;
  cityImage: string;
  cityInput: string;
}

const Card = ({cityData, cityImage, cityInput}: Props) => {
  const description = cityData.summary;
  const strippedDescription = description.replace(/(<([^>]+)>)/gi, "");
  const cost = Math.round( cityData.categories[1].score_out_of_10 * 10 ) / 10;
  const travel = Math.round( cityData.categories[4].score_out_of_10 * 10 ) / 10;
  const internet = Math.round( cityData.categories[14].score_out_of_10 * 10 ) / 10;
  // const city = input;


  return(
    <section className='city__container'>
      <article className='city'>
        <div className='image--container'>
          <img className="city__image" src={cityImage}></img>
        </div>
        <div className="city__description">
          {/* <span className="date">{cityData.categories[0].name}</span> */}
          <h2 className='city__title'>{cityInput}</h2>
          {strippedDescription}
        </div>
        <div className="city__footer">
          <div className="city__footer__living">
            <div className="type">Cost of Living</div><br></br>
            <div className="value">{cost}/10</div>
          </div>
          <div className="city__footer__travel">
            <div className="type">Travel Connectivity</div><br></br>
            <div className="value">{travel}/10</div>
          </div>
          <div className="city__footer__internet">
            <div className="type">Internet Access</div><br></br>
            <div className="value">{internet}/10</div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Card;

