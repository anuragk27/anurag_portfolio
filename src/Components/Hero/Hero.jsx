import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/anuragpp.png' 

const Hero = () => {
  return (
    <div id='home' className='hero'>
        {/* <img src={profile_img} alt="" /> */}
       <h1>Hello! <span>I'm Anurag Kumar</span></h1>
<p>Software Developer with experience in React.js, Flutter, and Firebase, focused on building scalable and user-friendly applications.</p>
      
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Conect With Me</AnchorLink></div>
            <div className="hero-resume"><a href="https://drive.google.com/file/d/1o_xcRA5pSuHqkEYlMpXcUeshWoz0Y_72/view?usp=drive_link" target="_blank" rel="noopener noreferrer">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero