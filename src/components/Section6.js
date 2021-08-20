import React, { useState, useEffect } from 'react';
import '../App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section6 = () => {

    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        // Section 6 Backdrop fades in from both x and y axes
        gsap.from(".section6Backdrop", { scrollTrigger: ".section26Backdrop", width: 0, y: 100,  x: -300, delay: 0.5, duration: 1});
        // Section 6 Person
        gsap.from(".section6Person", { scrollTrigger: ".section6Person", width: 0, opacity: 0, x: -400, delay: 1, duration: 0.8});
        // Section 6 Car
        gsap.from(".section6car", { scrollTrigger: ".section6car", width: 0, opacity: 0, x: -400, delay: 1, duration: 0.8});

        gsap.from(".section6Title", { scrollTrigger: ".section6Title", opacity: 0,  width: 0, y: -100, delay: 1.4, duration: 0.8, marginTop: -100})
        gsap.from(".section6SubText", { scrollTrigger: ".section6SubText", opacity: 0,  width: 0, y: -100, delay: 1.5, duration: 0.8, marginTop: -100})
        gsap.from(".section6Signature", { scrollTrigger: ".section6Signature", opacity: 0,  width: 0, y: -100, delay: 1.5, duration: 0.8, marginTop: -100})
        gsap.from(".section6Availability", { scrollTrigger: ".section6Availability", opacity: 0,  width: 0, y: -100, delay: 1.5, duration: 0.8, marginTop: -100})
        gsap.from(".section6Arrow", { scrollTrigger: ".section6Arrow", opacity: 0,  width: 0, y: -100, delay: 1.5, duration: 0.8, marginTop: -100})


    })

    return (   
        <section id="section6">
            <div className="section6Backdrop"/>
            <div className="section6Person"/>
            <div className="section6car"/>
            <div className="section6Title"/>
            <div className="section6SubText"/>
            <div className="section6Signature"/>
            <div className="section6Availability"/>
            <div className="section6Arrow"/>
            <div className="footerLogo"/>
            <div className="aboutUs"/>
            <div className="termsOfUse"/>
            <div className="footerFAQ"/>
        </section>
    )
}

export default Section6;