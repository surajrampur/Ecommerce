import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
<h2>FRESH ARRIVALS</h2>

<div>
<div className="hero-hand-icon">
    <p>New</p>
     <img src={hand_icon} alt="" />
</div>
<p>collections</p>
<p>for all</p>
  </div>



<div className="hero-latest-button">
<div>Latest Collections</div>
<img src={arrow} alt="" />
 </div>
</div>


<div className="hero-right">
<img src={hero_image} alt="" height="650" width="600px" />
 </div>
</div>
  )
}

export default Hero
