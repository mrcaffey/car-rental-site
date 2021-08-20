import React, { useState, useEffect } from 'react';
import '../App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section5 = () => {

    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        // Section 5
        gsap.from(".section5Block1", { scrollTrigger: ".section5Block1", width: 0, y: 200, delay: 0, duration: 1});
        gsap.from(".section5Block2", { scrollTrigger: ".section5Block2", width: 0, y: 200, delay: 0.5, duration: 1 });
        gsap.from(".section5Block3", { scrollTrigger: ".section5Block3", width: 0, y: 200, delay: 1, duration: 1});
    })

    return (   
        <section id="section5">
            <div className="section5Block1"/>
            <div className="section5Coin"/>
            <div className="section5PricingHeader"/>
            <div className="section5PricingSubHeader"/>
            <div className="section5Block2"/>
            <div className="section5Document"/>
            <div className="section5VehicleHeader"/>
            <div className="section5Block3"/>
            <div className="section5Fix"/>
            <div className="section5MaintenanceHeader"/>
            <div className="section5MaintenanceSubHeader"/>
        </section>
    )
}

export default Section5;