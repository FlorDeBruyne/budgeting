import React from 'react';
import {Route, Link, Switch, NavLink} from 'react-router-dom';



function Header(){

  


return (
  <nav className='h-50px border border-sky-500 bg-cyan-600'>

  <div className='w-4/5 m-0 flex flex-row justify-between items-center'>
      
      <div className='h-30px w-30px p-5 flex flex-row items-center'>
        <NavLink to="/" className={({ isActive }) => isActive ? "red" : "blue"}> <img src="src/logo.svg" alt="Home"/></NavLink>
        
      </div>

      <div className='flex flex-row items-center'>
        <NavLink to="Contact" className={({ isActive }) => isActive ? "red" : "blue"}> Contact </NavLink>

        <NavLink to="Charts" className={({ isActive }) => isActive ? "red" : "blue"}> Charts </NavLink>
        
       
        <NavLink to="Login" className={({ isActive }) => isActive ? "red" : "blue"}>Login</NavLink> 
        

      </div>
    </div> 

  
  </nav>
);



};

export default Header;

 





{/* <Switch>
          <Route path="/Home" placeholder="Home" component={Home}> 
          
          <Home placeholder="Home"/>
          </Route>

          <Route path="/About">
         
            <About placeholder="About"/>

          </Route>

          <Route path="/Contact">
            <h2>Contact</h2>
            <Contact/>
          </Route>

        </Switch> */}