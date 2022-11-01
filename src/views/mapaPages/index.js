import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import './style.css';

function MapaPage(){

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "Minha Chave key do Gogle"
    })

    const position = {
        lat: -28.948874, 
        lng: -49.534056
    }


    return (
        <div className='map-mestre'>
            {
                isLoaded ? (
                    <GoogleMap
                      mapContainerStyle={{width: '100%', height: '100%'}}
                      center={position}
                      zoom={16}
                    >
                    <Marker 
                        position={position} 
                        options={{
                            label: {
                                text: "Nanda Fashion",
                                className: "map-marker"
                            }
                        }}
                    />
                    </GoogleMap>
                ) : <></>
            }
        </div>
    );
}

export default MapaPage;


