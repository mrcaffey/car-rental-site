import React, { useState, useEffect } from 'react';
import '../App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Section3 = () => {

    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        // Section 3 Map
        gsap.from(".section3Map", { scrollTrigger: ".section3Map", width: 0, x: 300, delay: 0, duration: 1, marginRight: -100});
        // Section 3 Title
        gsap.from(".section3Title", { scrollTrigger: ".section3Title", width: 0, opacity: 0, y: -300, delay: 0.5, duration: 0.6, marginRight: -100});
        // Section 3 Subtitle
        gsap.from(".section3DeliveryText", { scrollTrigger: ".section3DeliveryText", width: 0, opacity: 0, y: -300, delay: 0.5, duration: 0.6, marginRight: -100});
        // Section 3 Porsche
        gsap.from(".section3Porsche", { scrollTrigger: ".section3Porsche", opacity: 0, width: 0, x: -2000, delay: 0.5, duration: 1.3});
        // Section 3 Delivery Map Card
        gsap.from(".section3DeliveryMap", { scrollTrigger: ".section3DeliveryMap", opacity: 0, y: -200, width: 100, duration: 1})
        // Section 3 Map Path and End Points
        gsap.from(".section3MapPath", { scrollTrigger: ".section3Map", width: 0, x: 300, delay: 0, duration: 1, marginRight: -100});
        gsap.from(".section3Destination1", { scrollTrigger: ".section3Map", width: 0, x: 300, delay: 0, duration: 1, marginRight: -100});
        gsap.from(".section3Destination2", { scrollTrigger: ".section3Map", width: 0, x: 300, delay: 0, duration: 1, marginRight: -100});

    })

    return (   
        <section id="section3">
            <div className="section3Title"/>
            <div className="section3DeliveryText"/>
            <div className="section3Porsche"/>
            <div className="section3Map"/>
            <div className="section3DeliveryMap"/>
            <div className="section3MapPath"/>
            <div className="section3Destination1"/>
            <div className="section3Destination2"/>
        </section>
    )
}

export default Section3;