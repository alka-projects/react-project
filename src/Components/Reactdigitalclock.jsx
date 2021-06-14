import React from 'react'
import Clock from 'react-digital-clock';
import ThemedDigitalClock from 'themed-digital-clock';

function Reactdigitalclock() {
    return (
        <div>
            <br/>
            <br/>
            <br/>
              {/* <Clock /> */}
          <ThemedDigitalClock
          timezoneName="India/kolkata"
          size={400}
          
        />
        </div>
    ) 
}

export default Reactdigitalclock 
