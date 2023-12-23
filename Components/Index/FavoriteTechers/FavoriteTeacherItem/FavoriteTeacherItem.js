import React from "react";
import "./FavoriteTeacherItem.css";
import teacherimage from "../../../../Public/Images/teacherimage.png";
import blackvideo from "../../../../Public/Images/blackvideo.png";
import award from "../../../../Public/Images/award.png";
import Image from 'next/image';

const FavoriteTeacherItem = () =>{
    return(
        <div className="favorite-teacher-item bg-white flex flex-col p-4 justify-center items-center">
            <div className="favorite-teacer-item-image">
                <Image src={teacherimage} alt="image" />
            </div>
            <div className="favorite-teacher-item-desc mt-2 text-gray-800">
                <p>
                    محمد صادق زمانی
                </p>
            </div>
            <div className="favorite-teacher-item-footer mt-5 flex flex-row-reverse justify-between items-center">
                <div className="favorite-teacher-item-footer-item flex flex-col justify-center items-center">
                    <Image src={blackvideo} alt="icon" />
                    <p className="text-center text-gray-600">
                        10
                    </p>
                </div>
                <div className="favorite-teacher-item-footer-item flex flex-col justify-center items-center">
                    <Image src={award} alt="icon" />
                    <p className="text-center text-gray-600">
                        مهندسی برق
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FavoriteTeacherItem;