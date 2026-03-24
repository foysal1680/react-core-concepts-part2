import { useState } from "react";

export default function Bastman(){

    const [runs,setRuns]=useState(0);

   const handleSingle=()=>{
      const updatsinge= runs+1
      setRuns(updatsinge)
   }

   const handleSix=()=>{
    const updatesix=runs+6
    setRuns(updatesix)
   }





    return(
        <div>
            <h3>Player:banglaes</h3>
            {
                runs>40 && <p>your score:40</p>
            }
            <h1>score:{runs}</h1>
            <button onClick={handleSingle}>single</button>
            <button onClick={handleSix}>six</button>
            <button>four</button>
        </div>
    )
}