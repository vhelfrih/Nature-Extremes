import React from 'react';

const LocationInfoBox = ({info}) => {
  return (
    <div className="location-info">
      <h3>Event Location Info</h3>
      <ul>
        <li><strong>{info.title}</strong></li>
        <li>id: {info.id}</li>
        <li>URL: <a href={info.url} target="blank">{info.url}</a></li>
        <li>Date: {info.date}</li>
      </ul>
    </div>

  )
};

export default LocationInfoBox;