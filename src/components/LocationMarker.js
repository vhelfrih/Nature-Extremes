import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const LocationMarker = ({ iconType, lat, lng, onClick }) => {
  return (
      <div className="location-marker" onClick={onClick}>
        { iconType === 'Wildfires' && <Icon icon={locationIcon} className="location-icon" />}
        { iconType === 'Earthquakes' && <Icon icon="wi:earthquake" className="location-icon"/>}
        { iconType === 'Volcanoes' && <Icon icon="wi:volcano" className="location-icon"/>}
      </div>
  );
};

export default LocationMarker;
