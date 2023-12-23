'use client'

import "./HomeSlider.css";
import Slideri from "../Slider/Slider";
import CourseItem from "@/Components/CourseItem/CourseItem";

const HomeSlider = () => {
    return(
        <div className="container home-slider-wrapper">
            <div className="home-slider-header flex justify-between">
                <p className="home-slider-title">
                    جدید ترین دوره ها
                </p>
                <p className="home-slider-button">
                    مشاهده همه
                </p>
            </div>
            <div className="home-slider-items">
                <Slideri>
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                    <CourseItem />
                </Slideri>
            </div>
        </div>
    )
}

export default HomeSlider;