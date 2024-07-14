import { LatLngTuple } from "leaflet";
import { Map, SectionMap } from "./TourMap.styles";
import {  Marker, Popup, TileLayer } from "react-leaflet";
import { Location } from "../../../models/Tour/Tour";

type TourMap = {
  locations: Location[];
  startLocation: Location;
};

const TourMap = ({ locations, startLocation }: TourMap) => {
  const zoom: number = 8;


  return (
    <SectionMap>
      <Map
        id="mapId"
        center={[...startLocation.coordinates].reverse() as LatLngTuple}
        zoom={zoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>

        {locations.map((p,i) => {
          return (
            <Marker key={i} position={[...p.coordinates].reverse() as LatLngTuple}>
              <Popup>
                {p.address}
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </SectionMap>
  );
};

export default TourMap;
