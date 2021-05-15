import React, { Component } from 'react'; //webpack and babel
import { BrowserRouter, Route } from 'react-router-dom'; // browserRouter can be seen as brain, route used to set up a rule of whats visible and not

import  Header  from "./Header";
import Dashboard from "./Dashboard";


class App extends Component{
    //called on first load
    render(){
        console.log('props', this.props)
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header></Header> 
                        {/* this route displays the dashboard which is the component displaying the calender */}
                        <Route exact path="/" component={Dashboard}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default App;
// export default connect(null, actions)(App); //mapstates to props null for now in connect