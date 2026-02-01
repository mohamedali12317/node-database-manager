import React from 'react';
import './sideBar.css';

// i have made npm i react-icons

// imported images 
import logo from '../../Assets/logo.png';

// imported icons 

import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'



const SideBar = () => {
 return (
  <div className='sideBar grid'>
   <div className="logoDiv flex">
    <img src={logo} alt="logo" srcset="" />
    <h2>Planti.</h2>
   </div> {/* logoDiv */}

   <div className="menuDiv">
    <h3 className="divTitle">
      OUICK MENU
    </h3>
    <ul className="menuLists grid">
     <li className="listItem">
      <a href="" className="menuLink flex">
       <IoMdSpeedometer className= "icon"/>
       <span className="smallText">Dash board</span>
      </a>
     </li>

     <li className="listItem">
      <a href="" className="menuLink flex">
       <MdDeliveryDining className= "icon"/>
       <span className="smallText">My Orders</span>
      </a>
     </li>

     <li className="listItem">
      <a href="" className="menuLink flex">
       <MdOutlineExplore className= "icon"/>
       <span className="smallText">Explore</span>
      </a>
     </li>

     <li className="listItem">
      <a href="" className="menuLink flex">
       <BsTrophy className= "icon"/>
       <span className="smallText">Products</span>
      </a>
     </li>

    </ul>
   </div> {/* meauDiv */}

     <div className="settingsDiv">
    <h3 className="divTitle">
      SETTINGS
    </h3>
    <ul className="menuLists grid">
     <li className="listItem">
      <a href="" className="menuLink flex">
       <AiOutlinePieChart className= "icon"/>
       <span className="smallText">Charts</span>
      </a>
     </li>

     <li className="listItem">
      <a href="" className="menuLink flex">
       <BiTrendingUp className= "icon"/>
       <span className="smallText">Trends</span>
      </a>
     </li>

     <li className="listItem">
      <a href="" className="menuLink flex">
       <MdOutlinePermContactCalendar className= "icon"/>
       <span className="smallText">Contact</span>
      </a>
     </li>

     <li className="listItem">
      <a href="" className="menuLink flex">
       <BsCreditCard2Front className= "icon"/>
       <span className="smallText">Billing</span>
      </a>
     </li>

    </ul>
   </div> {/* settingsDiv */}

   <div className="sideBarCard">
    <BsQuestionCircle className="icon"/>
    <div className="cardContent">
      <div className="circlel">

      </div> {/* circlel */}

      <div className="circle2">

      </div> {/* circle2 */}

      <h3>Help Center</h3>
      <p>Having trouble in planti, please contact us from for more questions.</p>
      <button className="btn">Go to help center</button>
    </div> {/* cardContent */}
   </div> {/* sideBarCard */}

  </div> 

 
 );
}

export default SideBar;
