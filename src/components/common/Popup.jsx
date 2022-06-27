import React, { useState } from "react";

function Popup(props){

  const [close, setClose] = useState(false);
  
  const handleClick = () =>{
    setClose(!close)
  }
 
  return (props.trigger !== close) ? (
    <div className="p-2 center top-0 left-0 w-100px h-100px bg-slate-700 justify-center items-center container mx-auto">
      <div className="relative p-32 w-250 h-250 max-w-640 bg-white">
        <div className="border-2 p-8 h-200 w-200">

        <button className="absolute top-4 right-4 rounded-full border-2 hover:border-4 border-sky-500 border-y-4 p-3 bg-cyan-700	 border-cyan-900 " onClick={handleClick}>Close</button>

        <form action="" className="flex flex-col">

          <div className="flex flex-row p-2">
            <label for="" className="pr-8 left py-4 basis-1/2">Date: </label> 
            <input type="date" name="" id="expenseDate" className="border-2 basis-1/4"/><br />
          </div>

          <div className="flex flex-row p-2">
            <label for="" className="pr-4 left py-4 w-1/2">Name expense: </label> 
            <input type="text" name="" id="expenseName" className="border-2"/><br />
          </div>

          <div className="flex flex-row p-2">
            <label for="" className="pr-4 left py-4 w-1/2">amount: </label>
            <input type="text" name="" id="expenseAmount" className="border-2"/> <br />
          </div>

          <div className="flex flex-row p-2">
            <label for="" className="pr-4 left py-4 w-1/2">Category: </label>
            <select name="" id="" className="border-2 basis-1/4">
             {props.category.map((value) => (              
                <option className="text-center "key={value.id} value={value.name}>{value.name}</option>              
             ))}
             </select>
              <br />
              
          </div>

          <input type="submit" value="submit" className="border-2 border-black"/>
          
        </form>
        </div>
      </div>
    </div>
  ) : "";
};

export default Popup;

//