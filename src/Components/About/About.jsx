import React from 'react'
import './About.css'
import reactIcon from '../../assets/react.png'
import flutterIcon from '../../assets/flutter.png'
import firebaseIcon from '../../assets/firebase.png'
import jsIcon from '../../assets/js.png'
import htmlIcon from '../../assets/html.png'
import cssIcon from '../../assets/css.png'
import djangoIcon from '../../assets/django.png'
import bootstrapIcon from '../../assets/bootstrap.png'
import pythonIcon from '../../assets/pythom.png'

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
                    <div className="about-skill-icon"><img src={reactIcon} alt="React" /><p>React</p></div>
                    <div className="about-skill-icon"><img src={flutterIcon} alt="Flutter" /><p>Flutter</p></div>
                    <div className="about-skill-icon"><img src={firebaseIcon} alt="Firebase" /><p>Firebase</p></div>
                    <div className="about-skill-icon"><img src={jsIcon} alt="JavaScript" /><p>JavaScript</p></div>
                    <div className="about-skill-icon"><img src={htmlIcon} alt="HTML" /><p>HTML</p></div>
                    <div className="about-skill-icon"><img src={cssIcon} alt="CSS" /><p>CSS</p></div>
                    <div className="about-skill-icon"><img src={djangoIcon} alt="Django" /><p>Django</p></div>
                    <div className="about-skill-icon"><img src={bootstrapIcon} alt="Bootstrap" /><p>Bootstrap</p></div>
                    <div className="about-skill-icon"><img src={pythonIcon} alt="Python" /><p>Python</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About