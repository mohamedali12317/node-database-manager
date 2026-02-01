import React from 'react';
import './listing.css';

// imported icons
import {AiFillHeart} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'



// images
import img from '../../../Assets/1.png';
import img1 from '../../../Assets/2.png';
import img2 from '../../../Assets/3.png';
import img3 from '../../../Assets//4.png';
import user1 from '../../../Assets/user3.jpg';
import user2 from '../../../Assets//12.jpg';
import user3 from '../../../Assets/user4.jpg';
import user4 from '../../../Assets/user5.jpg';
import user6 from '../../../Assets/user6.jpg';
import user7 from '../../../Assets/user7.jpg';
import user8 from '../../../Assets/user8.jpg';
import user9 from '../../../Assets/user9.jpg';


const Listing = () => {
 return (
  
   <div className="listingSection">
     <div className="heading flex">
           <h1>My Listing</h1>
           <button className="btn flex">
            See All <BsArrowRightShort className = "icon"/>
           </button>
     </div>  {/* heading */}

      <div  className="secContainer flex">
         <div className="singleItem">
            <AiFillHeart className= "icon"/>
            <img src={img} alt="" />
            <h3>Hardy banana</h3> 
         </div>  {/* singleItem */}

         <div className="singleItem">
            <AiOutlineHeart className= "icon"/>
            <img src={img1} alt="" />
            <h3>Strelitzia nicolai</h3> 
         </div>  {/* singleItem */}

         <div className="singleItem">
            <AiOutlineHeart className= "icon"/>
            <img src={img2} alt="" />
            <h3>Devil's ivy</h3> 
         </div>  {/* singleItem */}

         <div className="singleItem">
            <AiFillHeart className= "icon"/>
            <img src={img3} alt=""/>
            <h3>Arrowhead plant</h3> 
         </div>  {/* singleItem */}
         
      </div>   {/* secContainer */}

      <div className="sellers flex">
            <div className = "topSellers">
              <div className="heading flex">
                  <h3>Top Sellers </h3>
                  <button className="btn flex">
                   See All <BsArrowRightShort className = "icon"/>
               </button>
              </div>   {/* heading */}

               <div className="card flex">
                  <div className="users">
                     <div className="image">
                     <img src={user1} alt="User Image" />
                     </div>
                     <div className="image">
                     <img src={user2} alt="User Image" />
                     </div>
                     <div className="image">
                     <img src={user3} alt="User Image" />
                     </div>
                     <div className="image khaled">
                     <img src={user4} alt="User Image" />
                     </div>
                  </div>   {/* users */}
                  <div className="cardText">
                        <span>
                           14.556 plant sold<br />
                           <small>
                              21 Sellers <span className="date">7 Days</span>
                           </small>
                        </span>
                  </div>   {/* cardText */}
               </div>   {/* card */}
      
       </div>   {/* topSellers */}

       <div className = "featuredSellers">
              <div className="heading flex">
                  <h3>Featured Sellers </h3>
                  <button className="btn flex">
                   See All <BsArrowRightShort className = "icon"/>
               </button>
              </div>   {/* heading */}

               <div className="card flex">
                  <div className="users">
                     <div className="image">
                     <img src={user6} alt="User Image" />
                     </div>
                     <div className="image">
                     <img src={user7} alt="User Image" />
                     </div>
                     <div className="image">
                     <img src={user8} alt="User Image" />
                     </div>
                     <div className="image">
                     <img src={user9} alt="User Image" />
                     </div>
                  </div>   {/* users */}
                  <div className="cardText">
                        <span>
                           28,556 plant sold<br />
                           <small>
                              26 Sellers <span className="date">31 Days</span>
                           </small>
                        </span>
                  </div>   {/* cardText */}
               </div>   {/* card */}
      
       </div>   {/* featuredSellers */}

      </div>   {/* sellers */}

   </div>  // end of listing section
  
 );
}

export default Listing;
