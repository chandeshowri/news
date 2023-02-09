import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Slider() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
         gap: 10
          
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
         
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          
        }
      };
  return (
    <>
    <h3 className='text-center fontWeight-bold py-2 border-top'>Today's Photos</h3>

    <div className='container'>
      <Carousel responsive={responsive}>
    
  <div><img src='./images/4.jpg' class='w-100'/></div>
  <div><img src='./images/1.jpg' class='w-100'/></div>
  <div><img src='./images/2.jpg' class='w-100'/></div>
  <div><img src='./images/3.jpg' class='w-100'/></div>
  <div><img src='./images/5.jpg' class='w-100'/></div>
  <div><img src='./images/6.jpg' class='w-100'/></div>
  <div><img src='./images/7.jpg' class='w-100'/></div>
  
</Carousel>
</div>
    </>
  )
}

export default Slider
