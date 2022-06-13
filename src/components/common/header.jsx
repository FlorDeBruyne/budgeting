import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';


function Header(){


return (
  <nav className='h-50px border border-sky-500 bg-cyan-600'>
    <div className='w-4/5 m-0 flex flex-row justify-between items-center'>
      
      <div className='h-30px w-30px p-5 flex flex-row items-center'>
        <h1 >logo comes here</h1>
      </div>

      <div className='flex flex-row items-center'>
        <h2 >routes aka links come here</h2>
        
        {/* <Routes>
          <Route path="/"/>
        </Routes> */}
        <button >Log out</button>

      </div>
    </div>
  </nav>
);



};

export default Header;