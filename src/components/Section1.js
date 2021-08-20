import { React, useEffect, useRef } from 'react';
import '../App.css';
import { gsap } from 'gsap';

const Section1 = () => {
      //const backdropRef = useRef();

  useEffect(() => {
    // Yellow Backdrop
    gsap.from(".yellowBackdrop", {width: 0, x: 100, delay: 0, duration: 1, marginLeft: -100});
    // Eleanor Logo Text (top)
    //gsap.from(".eleanorLogo", { width: 0, x: 100, delay: 1, duration: 1})
    // Section 1 title
    gsap.from(".section1Title", { width: 0, y: -100, delay: 2, duration: 1, marginTop: -100})
    // Availabilty Text
    gsap.from(".availabilityText", { width: 0, y: -50, delay: 2.2, duration: 1, marginTop: -50});
    // Car group
    gsap.from(".carGroup", { opacity: 0, x: -200, delay: 0.7, duration: 1, marginLeft: -100});
    // Car app
    gsap.from(".vehicleApp", { opacity: 0, width: 0, x: 200, duration: 1, delay: 2, duration: 1})
  })
  
  return (
    <section id="section1">
     <div className="yellowBackdrop">
       <div className="eleanorLogo"/>
       <div className="section1Title"/>
       <div className="availabilityText"/>
       <div className="carGroup"/>
       <div className="vehicleApp"/>
     </div>
    </section>
  );
}

export default Section1;