import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Geocode from 'react-geocode';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
Geocode.setApiKey(process.env.REACT_APP_MAPS_KEY);

const mapStyles = {
    width: '100%',
    height: '600px'
};


function MapContainer(props) {
    const [markers, setMarkers] = useState([]);
    const history = useHistory();

    const spots = useSelector(state => state.spots);
    //it's rerendering 10 times one for each spot basically bc it's in the useeffect?

    const markerClick = (id) => {
        history.push(`/spots/${id}`)
    }

    useEffect(() => {
        renderedSpots.map(async (spot) => {
            const response = await Geocode.fromAddress(`${spot.street_address}, ${spot.city}, ${spot.state}`);
            const { lat, lng } = response.results[0].geometry.location;

            const marker = (
                <Marker
                    key={spot.id}
                    name={spot.title}
                    position={{
                        lat,
                        lng
                    }}
                    onClick={() => markerClick(spot.id)}
                />
            );
            setMarkers(prevMarkers => [...prevMarkers, marker]);
        });

    }, []);

    if (!spots) return null;

    let renderedSpots = [];
    if (spots) {

        function listings(places) {
            for (let key in places) {
                renderedSpots.push(places[key]);
            }
        }
        listings(spots);
    }

    return (
        <Map
            google={props.google}
            style={mapStyles}
            zoom={5}
            initialCenter={{ lat: 37.85964, lng: -95.49274 }}
        >
            {markers}
        </Map >
    );
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_MAPS_KEY
})(MapContainer);
