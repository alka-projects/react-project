import React from 'react'
import ToDo from './Todo';
import Dcard from './Dcard';
import Navbar from './Navbar';
import {Route, Switch} from 'react-router-dom'
import Reactdigitalclock from './Reactdigitalclock';
import IncDec from './Incdec';


function Reactrouter() {
    return (
       <>
         <Navbar/>
            <Switch>
                <Route exact path="/" component={ ToDo }/> 
          <Route path="/Dcard" component={ Dcard} />
          <Route path="/digitalclock" component={ Reactdigitalclock} />
          <Route path="/incdec" component={ IncDec} />
         {/* <Route component={Error}/> */}
          
           </Switch>
       </>
    )
}

export default Reactrouter
