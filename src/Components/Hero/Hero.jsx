import React, { useState, useEffect } from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/img.jpg";
// const TYPEWRITER_TEXT = 'Software Developer with experience in React.js, Flutter, and Firebase, focused on building scalable and user-friendly applications.'
const TYPEWRITER_TEXT = "Hello! I'm Anurag Kumar";

const Hero = () => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < TYPEWRITER_TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + TYPEWRITER_TEXT[index]);
        setIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      // Pause then restart
      const restart = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, 3000);
      return () => clearTimeout(restart);
    }
  }, [index]);

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      {/* <h1>Hello! <span>I'm Anurag Kumar</span></h1> */}
      <h1 className="typewriter">
        {displayed}
        <span className="cursor">|</span>
      </h1>
      <p>
        Software Developer with experience in React.js, Flutter, and Firebase,
        focused on building scalable and user-friendly applications.
      </p>
      {/* <p className='typewriter'>{displayed}<span className='cursor'>|</span></p> */}

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Conect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1o_xcRA5pSuHqkEYlMpXcUeshWoz0Y_72/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
