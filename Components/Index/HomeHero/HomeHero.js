'use client'
import React from "react";
import './HomeHero.css';
import homeherimage from "../../../Public/Images/homeheroimage.png";
import herodescshape from "../../../Public/Images/herosdescshape.png";
import herosearchicon from "../../../Public/Images/herosearchicon.png";
import homeherovectro from "../../../Public/Images/homeherovector.png";
import Image from 'next/image';



const HomeHero = () => {
    return(
        <div className="container home-hero-wrapper flex mt-16">
            <div className="home-hero-left mr-8">
                <p className="home-hero-desc text-justify text-right">
                    خـــودآموزی ، کســــب تجربه ،
                    ورود به بازار کار با تـــــاپ لــرن            
                    با کـــمـــتــــــرین هـــزیـــــنه 
                    خودت حرفه ایــــ یاد بگیـر
                    <Image src={herodescshape} alt="icon" className="inline-block"/>
                </p>
                <div className="home-hero-input text-right ml-auto">
                    <input type="text" placeholder="چی میخوای یاد بگیری؟" className="text-right ml-auto"></input>
                    <Image src={herosearchicon} alt="icon" width={56} height={56}/>
                </div>
                <div className="home-hero-vector flex justify-center">
                    <Image src={homeherovectro} alt="vector" />
                </div>
            </div>
            <div className="home-hero-right w-full overflow-hidden">
                <Image src={homeherimage} alt="image" className="w-full" />
            </div>
        </div>
    )
}

export default HomeHero;