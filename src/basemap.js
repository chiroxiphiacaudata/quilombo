import React from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import { ZoomControl } from 'react-leaflet/ZoomControl'
import 'leaflet/dist/leaflet.css';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Basemap = () => {

    const center = [-1.8303945078330022, -50.908336754350714];

    return (

        <>

            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="title" sx={{ mt: 2 }}>RE-EXISTÊNCIAS</Typography>
            </CardContent>
            <CardContent sx={{ maxWidth: 800 }}>
                <Typography component='div' className="titleh2" sx={{ mt: 2 }}>1 ponto<br />= 1 quilombola</Typography>
            </CardContent>

            <MapContainer
                doubleClickZoom={false}
                center={center}
                zoom={6}
                scrollWheelZoom={false}
                zoomControl={false}
                minZoom={2}
                maxZoom={10}
                maxBoundsViscosity={1.0}
                style={{ height: "90vh", backgroundColor: 'rgba(255, 233, 91, 1)' }}
            >
                <TileLayer
                    url="https://www.alessandromusetta.com/geo/tiles/quilombo/{z}/{x}/{y}.png" />

                <ZoomControl position="bottomright" />

            </MapContainer>


        </>
    )

}

export default Basemap;
