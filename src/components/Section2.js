import React, { useState, useEffect } from 'react';
import '../App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section2 = () => {

    gsap.registerPlugin(ScrollTrigger);

    const [vehicle, setVehicle] = useState(1)
    
    useEffect(() => {
        // Section 2 Yellow Rectangle
        gsap.from(".section2Rectangle", { scrollTrigger: ".section2Rectangle", opacity: 0,  x: 200, delay: 0, duration: 1 });
        // Section 2 car
        gsap.from(".section2Car", { scrollTrigger: ".section2Car", opacity: 0, width: 0, x: 2000, delay: 0.5, duration: 1, marginRight: -100});
        // Section 2 car - porsche
        gsap.from(".porsche", { scrollTrigger: ".porsche", opacity: 0, width: 0, x: 2000, delay: 0.5, duration: 1, marginRight: -100});
        // Section 2 Title
        gsap.from(".section2Title", { scrollTrigger: ".section2Title", width: 0, opacity: 0, y: -300, delay: 1, duration: 0.7, marginRight: -100});
        // Section 2 Selection Textanalytics
        gsap.from(".section2SelectionText", { scrollTrigger: ".section2SelectionText", opacity: 0, width: 0, y: -300, delay: 1.2, duration: 0.9, marginRight: -100});
        // Section 2 Vehile Model Text
        //gsap.from(".vehicleModelTxt", { width: 0, x: 300, delay: 1, duration: 1, marginRight: -100});
    })

    const vehicleNavHandler = () => {
        vehicle === 1 ? setVehicle(vehicle + 1) : setVehicle(vehicle - 1);
    }

    return (   
        <section id="section2">
            <div className="section2Rectangle"/>
            <div className="left-arrow" onClick={vehicleNavHandler}/>
            <div className="right-arrow" onClick={vehicleNavHandler}/>
            <div className={ vehicle > 1 ? "porsche" : "section2Car"}/>
            <div className="vehicleModelTxt"/>
            <div className="section2Title"/>
            <div className="section2SelectionText"/>
            <div className={ vehicle > 1 ? "porscheText" : "landRover"}/>
            <div className={ vehicle > 1 ? "porscheSubText" : "roverSubText"}/>
            <div className="mpg"/>
            <div className={ vehicle > 1 ? "porscheMPG" : "roverMPG"}/>
            <div className="hp"/>
            <div className={ vehicle > 1 ? "porscheHP" : "roverHP"}/>
            <div className="zeroToSixty"/>
            <div className={ vehicle > 1 ? "porscheZTS" : "roverZTS"}/>
        </section>
    )
}

export default Section2;