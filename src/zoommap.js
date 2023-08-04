import React from 'react';
import { MapContainer, TileLayer, GeoJSON, FeatureGroup, Popup } from "react-leaflet";
import { ZoomControl } from 'react-leaflet/ZoomControl'
import 'leaflet/dist/leaflet.css';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Polquilombo from "./data/WSG84_SIMPLY_Territorios_quilom_pop.json";



const Zoommap = () => {

    const center = [-2.1268592690097297, -49.42703156484675];
    const outerbounds = [
        [-36.04586463203836, -73.37722700007913],
        [6.297434025984137, -31.45340313670427],
    ];


    const setColor = ({ properties }) => {
        return {
            fillColor: 'rgba(251, 90, 80, .1)',
            weight: 0,
            opacity: 0,
        };
    };

    const onEachFeature = (feature, layer) => {
        const popupContent = `${feature.properties.name}`;
        if (feature.properties && feature.properties.popupContent) {
          popupContent += feature.properties.popupContent;
        }
        layer.bindPopup(popupContent);
      };

    return (

        <>

            <MapContainer
                doubleClickZoom={false}
                center={center}
                zoom={4}
                scrollWheelZoom={true}
                zoomControl={false}
                minZoom={4}
                maxZoom={10}
                maxBounds={outerbounds}
                maxBoundsViscosity={1.0}
                style={{ height: "90vh", backgroundColor: 'rgba(255, 233, 91, 1)' }}
            >
                <TileLayer
                    url="https://www.alessandromusetta.com/geo/tiles/quilombo/{z}/{x}/{y}.png" />

                <GeoJSON
                    data={Polquilombo}
                    style={setColor}
                    onEachFeature={onEachFeature}
                />


                <ZoomControl position="bottomright" />

            </MapContainer>


        </>
    )

}

export default Zoommap;
