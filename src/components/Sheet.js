import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: props.data,
        currentDate: props.currentDate,
        x: props.x,
        y: props.y
    };
  };

  // filter data based on current data, something that would usually be done on the backend
  //no test is done, would be added if data needed to be filtered by date
  filterDataOnDate(){
       var data = [];

       if(this.props.data && this.props.data.length>1){
          this.props.data.map((e, i) => {
            if(e.time){
                data.push(e);
            }
          });
       };

      return data;
  };

  render() {
    const rows = [];
    const headers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let y = 0; y < this.state.y ; y ++) {
      const x =  this.state.x + 1;
      rows.push(
        <Row
          y={y}
          x={x}
          data={this.filterDataOnDate()}
          headers = {headers}
          currentDate = { this.state.currentDate }
        />,
      );
    };

    
    return (
      <div>
        {rows}
      </div>
    );
  };
};