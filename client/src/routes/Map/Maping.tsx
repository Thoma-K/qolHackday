// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// mapboxgl.accessToken = 'pk.eyJ1IjoidG9tODQiLCJhIjoiY2wxMXdqd2t4MDEzbTNjbXZ3eW81c2sxYiJ9.P0aH-Hn9LJ0dcCOPcAvmwQ';

// export default function App() {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(18);
//   const [lat, setLat] = useState(59.3);
//   const [zoom, setZoom] = useState(8);

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: 'mapbox://styles/mapbox/light-v10',
//       center: [lng, lat],
//       zoom: zoom
//     });
//     const marker = new mapboxgl.Marker()
//                             .setLngLat([31.243666,30.048819])
//                             .addTo(map);
//   });

//   useEffect(() => {
//     if (!map.current) return; // wait for map to initialize
//     map.current.on('move', () => {
//       setLng(map.current.getCenter().lng.toFixed(4));
//       setLat(map.current.getCenter().lat.toFixed(4));
//       setZoom(map.current.getZoom().toFixed(2));
//     });
//   });

//   return (
//     <div>
//       <div className="sidebar">
//         Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//       </div>
//       <div ref={mapContainer} className="map-container" />
//     </div>
//   );
// }

import React from 'react';
// import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import * as cities from '../../Cities100.json'

mapboxgl.accessToken='pk.eyJ1IjoidG9tODQiLCJhIjoiY2wxMXdqd2t4MDEzbTNjbXZ3eW81c2sxYiJ9.P0aH-Hn9LJ0dcCOPcAvmwQ';

// const data = [
// 	{
// 		"location": "Manhattan Ave & Norman Ave at NE corner",
// 		"city": "Brooklyn",
// 		"state": "New York",
// 		"coordinates": [-73.9516030004786,40.72557300071668],
// 	},
// 	{
// 		"location": "6th Ave & 42nd St at NW corner",
// 		"city": "Manhattan",
// 		"state": "New York",
// 		"coordinates": [-73.98393399979334,40.75533300052329],
// 	},
// 	{
// 		"location": "Essex St & Delancey St at SE corner",
// 		"city": "Manhattan",
// 		"state": "New York",
// 		"coordinates": [-73.9882730001973,40.718207001246554],
// 	}
// ]

interface State {
    lng:number;
    lat:number;
    zoom:number;
}
class Maping extends React.Component{
  
  state:State;
  container:any
  mapContainer: HTMLElement | any;
	// Set up states for updating map 
	constructor(props:any){
		super(props);
		this.state = {
			lng: -74,
			lat: 40.7128,
			zoom: 0.5
		}
	}
  // const [cityMarker:any, setCityMarker:any] = useState();
  
	// Create map and lay over markers
	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/light-v10', 
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})
    // const getCity = () => {
    //   const clickedCity =
    //   fetch(`/api/cities/${clickedCity}`)
    //     .then(res => (res.json()))
    //     .then (data => {
    //       if(data?.status === 404 || data.status === 500) {
    //         alert('Data for this city are not available');
    //         return;
    //       }
    //       setCityMarker(data);
    //     })
    // }
		cities.forEach((location) => {
			const marker = new mapboxgl.Marker()
							.setLngLat([location.longitude, location.latitude])
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML(`<button><h4> ${location.name}</h4></button>`))
							.addTo(map);

		})
	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100%', height:'100vh'}}/>
			</div>
		)
	}
}

export default Maping;
