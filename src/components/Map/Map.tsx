import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { DivIcon, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../../assets/icons/icon-location.svg";
const Map = () => {
  const position: LatLngTuple = [51.505, -0.09];

  return (
    <section className="h-[650px]" id="map">
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
    </section>
  );
};
export default Map;
