'use client'
import React from "react";
import "./CourseItem.css";
import slideritemimage from "../../Public/Images/slideritemimage.png";
import people from "../../public/Images/people.png"
import person from "../../public/Images/person.png";
import star from "../../public/Images/star.png";
import Image from 'next/image';

const CourseItem = () => {
    return(
        <div className="slider-item bg-white text-right">
            <div className="slider-item-image">
                <Image src={slideritemimage} alt="image" />
            </div>
            <div className="slider-item-desc">
                <p className="slider-item-title mt-4 mb-4 text-gray-900">
                    آموزش صفر تا صد EF Core
                </p>
                <div className="slider-item-desc-items flex justify-between items-center flex-row-reverse pb-4">
                    <div className="slider-item-desc-item flex items-center flex-row-reverse">
                        <Image src={person} alt="icon" />
                        <p className="mr-1">
                            صادق زمانی
                        </p>
                    </div>
                    <div className="slider-item-desc-item flex items-center flex-row-reverse">
                        <Image src={star} alt="icon" />
                        <p className="mr-1">
                            5
                        </p>
                    </div>
                    <div className="slider-item-desc-item flex items-center flex-row-reverse">
                        <Image src={people} alt="icon" />
                        <p className="mr-1">
                            16
                        </p>
                    </div>
                </div>
            </div>
            <div className="slider-item-footer flex justify-between items-center mt-4">
                <div className="slider-item-footer-price">
                    <p>
                        290,000تومان
                    </p>
                </div>
                <div className="slider-item-footer-button">
                    <p className="bg-indigo-600 text-white">
                        ثبت نام
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CourseItem;