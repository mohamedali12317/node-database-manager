import React from 'react';
import './top.css';

// imported icons
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle2} from 'react-icons/tb'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsQuestionCircle} from 'react-icons/bs'


// imported image 
import img from '../../../Assets/user3.jpg'
import img2 from '../../../Assets/11.png'
import video from '../../../Assets/rain.mp4'


const Top = () => {
 return (
  <div className='topSection'>
   <div className="headerSectio flex">
    <div className="title">
     <h1>Welcome to planti.</h1>
     <p>Hello Mohamed, Welcome back!</p>
    </div>   {/* title */}   

    <div className="searchBar flex">
     <input type="text" name="" id="" placeholder="Search Dashboard" />
     <BiSearchAlt className="icon"/>
    </div>   {/* searchBar */}

    <div className="adminDiv flex">
      <TbMessageCircle2 className="icon"/>
      <MdOutlineNotificationsNone className="icon"/>
       <div className="adminImage">
        <img src={img} alt="" />
       </div> {/* adminImage */}
     </div>    {/* adminDiv */}

   </div>    {/* headerSectio */}

   <div className="cardSection flex">
    <div className="rightCard flex">
         <h1>Create and sell extraordinary products</h1>
         <p>The world's fast growing inudustry today are natural made products!</p>

         <div className="buttons flex">
          <button className="btn">Explore More</button>
          <button className="btn transparent">Top Sellers</button>
         </div>    {/* buttons */}

         <div className="videoDiv">
          <video src={video} autoPlay loop muted></video>
         </div>    {/* videoDiv */}
    </div>    {/* rightCard */}

    <div className="leftCard flex">
        <div className="main flex">
          <div className="textDiv">
                <h1>My Stat</h1>

                <div className="flex">
                    <span>   
                      Today <br /> <small>4 Orders</small>
                    </span>

                    <span>
                      This Month <br /> <small>127 Orders</small>
                    </span>

                </div>     {/* flex */}

                <span className="flex link">
                    Go to my orders <BsArrowRightShort className='icon'/>
                </span>     {/* flex */}

          </div>    {/* text div */}

            <div className="imgDiv">
              <img src={img2} alt="" />
            </div>    {/* img div */}

      
            
       <div className="sideBarCard">
      <BsQuestionCircle className="icon"/>
      <div className="cardContent">
      <div className="circlel">

      </div> 

      <div className="circle2">

      </div>

      <h3>Help Center</h3>
      <p>Having trouble in planti, please contact us from for more questions.</p>
      <button className="btn">Go to help center</button>
      </div> 
      </div> 
            
            
            

        </div>    {/* main */}
    </div>    {/* leftCard */}

   </div>    {/* cardSection */}

  </div> // topSection
 );
}

export default Top;
