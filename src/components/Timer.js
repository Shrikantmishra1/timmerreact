// import React from 'react';
import  "./timer.css";

import { useState, useEffect } from 'react';
function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (

    <div className='first'>
        <div >
         <h1 > <span>
           {date.toLocaleTimeString()}
           </span></h1>
          

        </div>
       </div>
    //   );
  
  );
}
export default Clock;