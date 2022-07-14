import React, { useState } from "react";

function CountUp(){

    const [count, setCount] = useState(0)

    function addCount(){
        setInterval(
            ()=> { 
                //console.log(count)
                setCount(count + 1) }, 1000
        )
        
    }

    addCount()

    //TODO: FIND OUT WHY COUNTER GOES BEZERK
    //TODO: FIND A WAY TO STOP COUNT AT 100
    return (
            <div>
                <center>
                    <h4 className="time-text">{count}</h4>
                </center>
            </div>
    )
}


export default CountUp