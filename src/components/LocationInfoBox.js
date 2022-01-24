import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close-circle";

const LocationInfoBox = ({ info, onClick }) => {
  return (
    <div className="location-info">
      <div class="info-close" onClick={onClick}>
        <Icon icon={closeIcon} className="close-icon" />
      </div>
      <h3>Event Location Info</h3>
      <ul>
        <li>
          <strong>{info.title}</strong>
        </li>
        <li>id: {info.id}</li>
        <li>
          URL: <a href={info.url} target="blank">
            {info.url}
          </a>
        </li>
        <li>Date: {info.date}</li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
