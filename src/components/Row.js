import React from 'react';
import Cell from './Cell';

//this create the cell, so it loops through the number of rows needed and creates them, also adding the required data based on the calender requirements
const Row = (props) => {

    //due to time I added the enum inside this file instead of adding its own file in utils
    const feedKindEnum = {
        Dino_Fed: 'dino_fed',
        Dino_Location_Updated: 'dino_location_updated',
        Dino_Removed: 'dino_removed',
        Dino_Added: 'dino_added',
        Maintainance_Performed: 'maintenance_performed'
      };

    const cells = []
    const y = props.y
    const headersArray = props.headers.split('');
    for (let x = 0; x < props.x-1; x ++) {
        {
            var cell = headersArray[x-1] + y.toString();
            var location;
            var rowData = { };
            props.data.map((e, i) => 
            {
                if(e.location){
                    location = e.location
                    if(cell.toString() === location){
                        //the below 2 being the only ones assigned a location from the possible responses
                        switch (e.kind) {
                            case feedKindEnum.Dino_Location_Updated:
                                rowData = {
                                    NeedsMaintanance: true,
                                    isSafe: false,
                                };
                                break;
                            case feedKindEnum.Maintainance_Performed:
                                rowData = {
                                    NeedsMaintanance: false,
                                    isSafe: true,
                                };
                                 break;
                            default:
                                break;
                        }
                    }
                };
            }
        )};


    cells.push(
      <Cell
        y={y}
        x={x}
        rowData={rowData}
        rowHeaders={ props.headers }
      />,
    );
  };
  return (
    <div>
      {cells}
    </div>
  );
};

export default Row