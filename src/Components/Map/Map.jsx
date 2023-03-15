import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./map.css";

export function ShowMap() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	});

	if (!isLoaded) return <div>Loading...</div>;
	return <Map />;
}

function Map() {
	const center = useMemo(
		() => ({ lat: 57.04794418006145, lng: 9.967475568911139 }),
		[]
	);

	return (
		<GoogleMap zoom={17} center={center} mapContainerClassName="map-container">
			<Marker position={center} />
		</GoogleMap>
	);
}
