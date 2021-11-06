import React from 'react'

//components
import NightLifeCarausel from "./NightLifeCarausel";

function NightLife() {
    return (
        <div>
           <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">NightLife Restaurants in NCR </h1> 
           <NightLifeCarausel/>
           
        </div>
    )
}

export default NightLife;
