import React from 'react';
import './activity.css';

// imported icons 
import {BsArrowRightShort} from 'react-icons/bs'

// imported Images
import user1 from '../../../Assets/user10.jpg';
import user2 from '../../../Assets/user3.jpg';
import user3 from '../../../Assets/user4.jpg';
import user4 from '../../../Assets/user5.jpg';
import user5 from '../../../Assets/user7.jpg';




const Activity = () => {
 return (
  <div className="activitySection">
    <div className="heading flex">
       <h1>Resent Activity</h1>
       <button className="btn flex">
        See All
        <BsArrowRightShort className="icon"/>
       </button>
    </div>  {/* heading */}

    <div className="secContainer grid">
     
      <div className="sigleCustomer flex">

        <img src={user1} alt="customer img" />

         <div className="customerDetails">
            <span className="name">Gabriela Mohamed</span>
            <small>Ordered a new plant</small>
         </div>   {/* customerDetails */}

        <div className="duration">
         8 min ago
        </div> {/* duration */}

      </div>   {/* sigleCustomer */}

      <div className="sigleCustomer flex">

<img src={user2} alt="customer img" />

 <div className="customerDetails">
    <span className="name">Mohamed Ali</span>
    <small>Ordered a new plant</small>
 </div>   {/* customerDetails */}

<div className="duration">
 5 min ago
</div> {/* duration */}

</div>   {/* sigleCustomer */}

<div className="sigleCustomer flex">

<img src={user3} alt="customer img" />

 <div className="customerDetails">
    <span className="name">Mahmoud Ali</span>
    <small>Ordered a new plant</small>
 </div>   {/* customerDetails */}

<div className="duration">
 2 min ago
</div> {/* duration */}

</div>   {/* sigleCustomer */}

<div className="sigleCustomer flex">

<img src={user4} alt="customer img" />

 <div className="customerDetails">
    <span className="name">Khaled Shams</span>
    <small>Ordered a new plant</small>
 </div>   {/* customerDetails */}

<div className="duration">
 10 min ago
</div> {/* duration */}

</div>   {/* sigleCustomer */}

<div className="sigleCustomer flex">

<img src={user5} alt="customer img" />

 <div className="customerDetails">
    <span className="name">Andreea Morar</span>
    <small>Ordered a new plant</small>
 </div>   {/* customerDetails */}

<div className="duration">
 30 min ago
</div> {/* duration */}

</div>   {/* sigleCustomer */}

    </div>  {/* secContainer */}
  </div> // activitySection
 );
}

export default Activity;
