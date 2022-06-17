import React, { useState} from "react";
import Popup from "./common/Popup";



export default function Transaction(props){
  const {title, expense,  category} = props
  const [popup, setPopup] = useState(false);
  // const [hidden , setHidden] = useState(false)

  const handleClick = () => {
    setPopup(!popup)
  }




  return( 
  <div className="text-center p-8">
    <button className="rounded-full hover:border-4 border-2 border-sky-500 border-y-4 px-4 py-2 bg-cyan-700	 border-cyan-900" onClick={ handleClick }>Add transaction</button>
    <Popup trigger={popup} category={category} />
  </div>
  );
};







// {name} gaf {bedrag} uit bij {plaats}
// {name}, {bedrag}, {plaats}    onClick={ }