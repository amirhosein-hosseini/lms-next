import React from "react";
import "./FavoriteTeachers.css";
import Slider5 from "../Slider/slider5";
import FavoriteTeacherItem from "./FavoriteTeacherItem/FavoriteTeacherItem";

const FavoriteTeachers = () => {
    return(
        <div className="favorite-teachers-wrapper">
            <div className="favorite-teachers-header mb-8">
                <p className="text-center text-gray-800">
                    محبوب ترین اساتید   
                </p>
            </div>
            <div className="container favorite-teachers-items">
                <Slider5>
                    <FavoriteTeacherItem />
                    <FavoriteTeacherItem />
                    <FavoriteTeacherItem />
                    <FavoriteTeacherItem />
                    <FavoriteTeacherItem />
                    <FavoriteTeacherItem />
                    <FavoriteTeacherItem />
                </Slider5>
            </div>
        </div>
    )
}

export default FavoriteTeachers;