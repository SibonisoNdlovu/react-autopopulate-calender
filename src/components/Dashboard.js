import React, { Component }  from 'react';

import Sheet from './Sheet';
import { getCurrentDate } from '../utils/utils';
import data from '../actions/mockData/feed.json'; // this would come from an action and feed data to the ui from backend but using mock data instead


class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
          data: data
        };
      };

    render(){
        return (
            <div className="container" style={{ width: 'max-content' }}>
                <div>
                    <div style={{width: '50%', float:'left'}}>
                        <h4>
                            Park Zones 
                        </h4>
                    </div>
                    <div style={{display: 'flex', justifyContent:'flex-end', width: '50%', float:'right'}}>
                        <h4>
                            {getCurrentDate('-')}
                        </h4>
                    </div>
                </div>
                <Sheet x={27} y={17} data={this.state.data} currentDate = {getCurrentDate('-')} />
            </div>
        );
    };
};

export default Dashboard;
