'use client'
import React from "react";
import "./Achievement.css";
import purple from "../../../Public/Images/purple.png";
import green from "../../../Public/Images/green.png";
import blue from "../../../Public/Images/blue.png";
import orange from "../../../Public/Images/orange.png";
import student from "../../../Public/Images/student.png";
import teacher from "../../../Public/Images/teacher.png";
import video from "../../../Public/Images/video.png";
import cvideo from "../../../Public/Images/video-circle.png";
import Image from 'next/image';


const Achievement = () => {
    return(
        <div className="container achievement-wrapper flex justify-between mt-16">
            <div className="achievement-item text-right">
                <div className="achievement-image flex">
                    <Image src={video} alt="icon"/>
                </div>
                <div className="achievement-desc">
                    <p className="achievement-number text-indigo-700">
                        363
                    </p>
                    <p className="achievement-title">
                        وبینار آنلاین
                    </p>
                </div>
                <div className="achievent-vector">
                    <Image src={blue} alt="icon" />
                </div>
            </div>
            <div className="achievement-item text-right">
                <div className="achievement-image flex">
                    <Image src={video} alt="icon"/>
                </div>
                <div className="achievement-desc">
                    <p className="achievement-number text-green-500">
                        363
                    </p>
                    <p className="achievement-title">
                        وبینار آنلاین
                    </p>
                </div>
                <div className="achievent-vector">
                    <Image src={green} alt="icon" />
                </div>
            </div>
            <div className="achievement-item text-right">
                <div className="achievement-image flex">
                    <Image src={video} alt="icon"/>
                </div>
                <div className="achievement-desc">
                    <p className="achievement-number text-orange-500">
                        363
                    </p>
                    <p className="achievement-title">
                        وبینار آنلاین
                    </p>
                </div>
                <div className="achievent-vector">
                    <Image src={orange} alt="icon" />
                </div>
            </div>
            <div className="achievement-item text-right">
                <div className="achievement-image flex">
                    <Image src={video} alt="icon"/>
                </div>
                <div className="achievement-desc">
                    <p className="achievement-number text-purple-400">
                        363
                    </p>
                    <p className="achievement-title">
                        وبینار آنلاین
                    </p>
                </div>
                <div className="achievent-vector">
                    <Image src={purple} alt="icon" />
                </div>
            </div>
        </div>
    )
}

export default Achievement;