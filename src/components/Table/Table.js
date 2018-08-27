import React from 'react';
import RowItem from './RowItem';

import './Table.css';

export default class Table extends React.Component {

  render() { 
    let rows = this.props.data.map((item, inx) => {
      return (<RowItem key={`Item-${item.id}`} data={item} />);
    });
    
    return (
      <div className="table">
        <div className="header" ref="header">
          <div className="hcol">ID</div>
          <div className="hcol small">SCOOTER</div>
          <div className="hcol small">MODEL</div>
          <div className="hcol small">BATTERY</div>
          <div className="hcol">VIN</div>
          <div className="shadow"></div>
        </div>
        <ul>
          {rows}
        </ul>
      </div>
    ); 
  }
}