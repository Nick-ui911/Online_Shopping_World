import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const UserCoordinates = () => {
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        // Get user's current location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCoordinates({ lat: latitude, lng: longitude });
                },
                (err) => {
                    setError(err.message);
                },
                { enableHighAccuracy: true } // Request high accuracy
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div className="user-coordinates-container">
            <h1 className="title">Location</h1>
            {error && <p className="error-message">Error: {error}</p>}
            {coordinates.lat && coordinates.lng ? (
                <LoadScript googleMapsApiKey="AIzaSyDhIS5oQM6_haO0M-FXZgJNgzwVRCYLqeY">
                    <GoogleMap
                        mapContainerStyle={{ height: '400px', width: '100%' }}
                        center={coordinates}
                        zoom={14}
                    >
                        <Marker position={coordinates} title="You are here!" />
                    </GoogleMap>
                </LoadScript>
            ) : (
                <p className="loading-message">Loading coordinates...</p>
            )}
        </div>
    );
};

export default UserCoordinates;
