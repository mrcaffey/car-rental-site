import React, { useState, useEffect } from 'react';
import '../App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section4 = () => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // Section 4 Backdrop w/ vehicle
        gsap.from(".section4Backdrop", { scrollTrigger: ".section4Backdrop", width: 0, x: -300, delay: 0, duration: 1, marginRight: -100});
        // Section 4 Vehicle on top of backdrop
        gsap.from(".section4Vehicle", { scrollTrigger: ".section4Vehicle", opacity: 0,  width: 0, y: -100, delay: 1, duration: 0.8, marginTop: -100})
        // Section 4 Title and Trade in subtext
        gsap.from(".section4Title", { scrollTrigger: ".section4Title", opacity: 0,  width: 0, y: -100, delay: 1.4, duration: 0.8, marginTop: -100})
        gsap.from(".section4TradeInText", { scrollTrigger: ".section4TradeInText", opacity: 0,  width: 0, y: -100, delay: 1.5, duration: 0.8, marginTop: -100})
    })

    return (   
        <section id="section4">
            <div className="section4Backdrop"/>
            <div className="section4Title"/>
            <div className="section4TradeInText"/>
            <div className="section4Vehicle"/>
        </section>
    )
}

export default Section4;