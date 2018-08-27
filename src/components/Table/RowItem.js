import React from 'react';
import './Table.css';

const RowItem = ( props ) => (
  <li key={`key-${props.data.id}`}>
    <div className="heading">
      <div className="col">{props.data.id}</div>
      <div className="col small">{props.data.license_plate}</div>
      <div className="col small">{props.data.model}</div>
      <div className="col small">{props.data.energy_level}</div>
      <div className="col">{props.data.vin}</div>     
    </div>
  </li>
);

export default RowItem;
