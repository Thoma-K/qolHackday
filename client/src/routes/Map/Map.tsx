import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

function Map() {
const [viewport, setViewport] = useState({
  latitude: 59.3293, 
  longtitude: 18.0686,
  width: "100%",
  height: "100%",
  zoom: 10,
});

  return (
    <article id='map'>
      <ReactMapGL {...viewport}
        mapboxAccessToken = "pk.eyJ1IjoidG9tODQiLCJhIjoiY2wxMXdvNmRlMDFoNDNibzR2amhqd3NhYiJ9.8qARx3hnYhnJaZIOjNurvQ">
      Can you see me?
      </ReactMapGL>
    </article>
  )
}

export default Map;