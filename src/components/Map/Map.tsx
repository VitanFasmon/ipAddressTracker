import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { DivIcon, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../../assets/icons/icon-location.svg";
import { useEffect } from "react";
import { usePositionStore } from "../../hooks/usePositionStore";
const Map = () => {
  const { position } = usePositionStore();
  useEffect(() => {}, [position]);
  return (
    <section className="h-[650px] relative z-0" id="map">
      {position && (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={position}
            icon={
              new DivIcon({
                html: `<img src=${markerIcon} style="width: 35px; height: 45px;"/>`,
              })
            }
          >
            <Popup>
              <p>This is the location of the IP Address</p>
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </section>
  );
};
export default Map;
