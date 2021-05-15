import React from 'react';
import dinoParkWrench from '../images/dino-parks-wrench.png';

//this is the cell, what needs to be in the cell is added here
export default class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rowData: props.rowData,
      rowHeaders :props.rowHeaders,
      x: props.x,
      y: props.y
    };
  };

  buildCss = () => {
    const css = {
      width: '40px',
      padding: '4px',
      margin: '0',
      height: '25px',
      boxSizing: 'border-box',
      position: 'relative',
      display: 'inline-block',
      color: 'black',
      border: '1px solid #cacaca',
      textAlign: 'left',
      verticalAlign: 'top',
      fontSize: '14px',
      lineHeight: '15px',
      overflow: 'hidden',
      fontFamily: 'Calibri, \'Segoe UI\', Thonburi, Arial, Verdana, sans-serif',
      zIndex: '-1'
    };

    // this creates the styling for the headers e.g 1,2,3,4,5 and a,b,c,d,e,f
    if (this.state.x === 0 || this.state.y === 0) {
      css.textAlign = 'center'
      css.backgroundColor = '#f0f0f0'
      css.fontWeight = 'bold'
    };

    return css
  };

  render() {
    
    // var newColor =this.props.rowData.isSafe? '#51B687': 'black'
    // if needs to be green because of some setting
    // var needsMaintainance = this.props.rowData.NeedsMaintanance? dinoParkWrench: ''
    // if needs to add setting, it will be executed here

    const css = this.buildCss();
    
    //this part updates the background based on safety
    if (this.state.rowData.isSafe && (this.state.y !== 0 && this.state.x !== 0)){
        css.backgroundColor = '#51B687';
    } else{
        css.backgroundColor = 'white';
    }

    // column 0
    if (this.state.x === 0) {
      return (
        <span style={css}>
          {this.state.y}
        </span>
      );
    };

    // row 0
    if (this.state.y === 0) {
      const headers = this.state.rowHeaders.split('')
      return (
        <span
          style={css}>
          {headers[this.state.x -1]}
        </span>
      );
    };


    return (
      <span style={css} >
          {/* displays if slot needs maintanance */}
          { this.state.rowData.NeedsMaintanance?<img src={dinoParkWrench} style={{width:'20px', height: '20px' }} alt="Logo"/>: '' }
      </span>
    );
  };
};