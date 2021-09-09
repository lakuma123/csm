import React from 'react';
import '../App.css';
import {SidebarData} from './SidebarData';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
function Sidebar(){
//     return (
// <div className='Sidebar'>
// <ul className='SidebarList'>
//    {SidebarData.map((val,key)=>{
//        return(
//        <li key={key} className="row">
//            <div id="icon">{val.icon}</div>
//            <div id="title">{val.title}</div>
//        </li>);
//        })}
//      </ul>
// </div>
//   );
  
return (
  <>
    <IconContext.Provider value={{ color: '#fff' }}>
      
      
        <ul className='SidebarList' >
         
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="sidebarrow" >
                <Link to={item.link} className="row">
                <div id="icon">{item.icon}</div>
                <div id="title">{item.title}</div>
                  
                </Link>
              </li>
            );
          })}
        </ul>
     
    </IconContext.Provider>
  </>
);  
}
export default Sidebar;