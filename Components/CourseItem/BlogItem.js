'use client'
import React from "react";
import "./BlogItem.css";
import blogimage from "../../public/Images/blogimage.png";
import usergray from "../../public/Images/usergray.png";
import Image from 'next/image';

const BlogItem = () => {
    return(
        <div className="blog-item bg-white flex flex-col justify-center items-center p-3 text-right">
            <div className="blog-item-image">
                <Image src={blogimage} alt="image" />
            </div>
            <div className="blog-item-desc mt-3">
                <p className="blog-item-desc-title text-gray-900">
                    لورم ایپسوم 
                </p>
                <div className="blog-item-desc-desc mt-3 text-gray-700">
                    لــــورم ایپســوم متن ساختــگــی با تــولید سادگــی نامفهوم از صنعـت چاپ، و با استــفاده از طراحان گرافیــک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </div>
            </div>
            <div className="blog-item-footer flex flex-row-reverse justify-between w-full items-center mt-3">
                <div className="blog-item-footer-person flex flex-row-reverse items-center">
                    <Image src={usergray} alt="icon" />
                    <p className="mr-2 text-gray-500">
                        صادق زمانی
                    </p>
                </div>
                <div className="blog-item-footer-button">
                    <p className="bg-orange-100 text-orange-500">
                        مشاهده 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;