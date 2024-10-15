import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { DivIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../../assets/icons/icon-location.svg";
import usePosition from "../../hooks/usePosition";
import { useEffect } from "react";
const Map = () => {
  const { position, updatePosition } = usePosition();

  useEffect(() => {
    updatePosition([51.505, -0.09]);
  }, []);
  return (
    <section className="h-[650px] relative z-0" id="map">
      {position ? (
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
      ) : (
        <div>
          <h3>Please enter a valid IP Address</h3>
        </div>
      )}
    </section>
  );
};
export default Map;
