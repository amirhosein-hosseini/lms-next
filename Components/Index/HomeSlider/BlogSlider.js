
'use client'
import React from "react";
import "./BlogSlider.css";
import BlogItem from "@/Components/CourseItem/BlogItem";
import Slideri from "../Slider/Slider";

const BlogSlider = () =>{
    return(
        <div className="container blog-slider-wrapper">
            <div className="home-slider-header flex justify-between">
                <p className="home-slider-title">
                    وبلاگ
                </p>
                <p className="home-slider-button">
                    مشاهده همه
                </p>
            </div>
            <Slideri>
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </Slideri>
        </div>
    )
}

export default BlogSlider;