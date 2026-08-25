import React from 'react'
import './About.css'
// import img from '../../../dist/assets/img.jpg'
// import img2 from '../../assets/Anurag.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            {/* <img src={img} alt="" /> */}
        </div>
        <div className="about-section">
            {/* <div className="about-left">
                <img src={img2} alt="anurag" />
            </div> */}
            <div className="about-right">
                <div className="about-para">
                    <p>I completed my B.Tech in Computer Science in 2024 and have professional experience in Frontend Development using React.js.</p>
                    <p>Currently, I work as a Software Developer, building interactive and user-focused applications using Flutter and Firebase while continuously expanding my skills in modern software development.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"55%"}} /></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>FLASK</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>DJANGO</p><hr style={{width:"60%"}} /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About