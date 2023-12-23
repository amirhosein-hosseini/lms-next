import React from "react";
import HomeHero from "@/Components/Index/HomeHero/HomeHero";
import HomeSlider from "@/Components/Index/HomeSlider/HomeSlider";
import FavoriteCategory from "@/Components/Index/FavoriteCategory/FavoriteCategory";
import BecomTeacher from "@/Components/Index/HomeBanner/BecomeTeacher";
import FavoriteTeachers from "@/Components/Index/FavoriteTechers/FavoriteTeachers";
import BlogSlider from "@/Components/Index/HomeSlider/BlogSlider";
import Achievement from "@/Components/Index/Achievement/Achievement";

const HomePage = () => {
    return(
        <div className="home">
            <HomeHero />
            <Achievement />
            <HomeSlider />
            <FavoriteCategory />
            <HomeSlider />
            <BecomTeacher />
            <HomeSlider />
            <FavoriteTeachers />
            <BlogSlider />
        </div>
    )
}

export default HomePage;