import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as coffeeData from "../data/coffee.json";
import mapStyles from "../mapStyles";
import LoggedInHeader from './LoggedInHeader'


function Map() {
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedCoffee(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 41.878113, lng: -87.629799}}
      defaultOptions={{ styles: mapStyles }}
    >
      {coffeeData.features.map(coffee => (
        <Marker
          key={coffee.properties.COFFEE_ID}
          position={{
            lat: coffee.geometry.coordinates[1],
            lng: coffee.geometry.coordinates[0]
          }}
          onClick={() => {
            setSelectedCoffee(coffee);
          }}
          icon={{
            url: `https://cdn2.iconfinder.com/data/icons/coffee-tea/100/cup2-512.png`,
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
      ))}

{selectedCoffee && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedCoffee(null);
          }}
          position={{
            lat: selectedCoffee.geometry.coordinates[1],
            lng: selectedCoffee.geometry.coordinates[0]
          }}
        >
          <div>
            <h2>{selectedCoffee.properties.NAME}</h2>
            <p>{selectedCoffee.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
    

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function CoffeeMap() {
  return (
    
    <div style={{ width: "100vw", height: "100vh" }}>
      <LoggedInHeader />
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAKZJRWgYSIu5211lYz9Vz8rj1M6Zsoqks`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}