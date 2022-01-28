import { useState } from "react";

import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import EventSelector from "./EventSelector";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const [selected, setSelected] = useState(null);

  const handleSelect = (val) => {
    setSelected(val);
  };

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].title === selected) {
      console.log(index);
      return (
        <LocationMarker
          key={index}
          iconType={selected}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              url: ev.sources[0].url,
              date: ev.geometries[0].date,
            })
          }
        />
      );
    }
    return null;
  });

  return (
    <div className="wrapper">
      <EventSelector onCheck={handleSelect} />
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GMAP_KEY,
          }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {markers}
        </GoogleMapReact>
        {locationInfo && (
          <LocationInfoBox
            info={locationInfo}
            onClick={() => {
              setLocationInfo(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
