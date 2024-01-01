"use client"
import HomeHero from "@/Components/Index/HomeHero/HomeHero";
import HomeSlider from "@/Components/Index/HomeSlider/HomeSlider";
import FavoriteCategory from "@/Components/Index/FavoriteCategory/FavoriteCategory";
import BecomTeacher from "@/Components/Index/HomeBanner/BecomeTeacher";
import FavoriteTeachers from "@/Components/Index/FavoriteTechers/FavoriteTeachers";
import BlogSlider from "@/Components/Index/HomeSlider/BlogSlider";
import Achievement from "@/Components/Index/Achievement/Achievement";
import { useEffect, useState } from "react";
import { getAllBestSellers, getAllDiscountCourses, getAllNewestCourses } from "@/api/index";

const HomePage = () => {

    const [newCourses , setNewCourses] = useState(null);
    const [bestSellers , setBestSellers] = useState(null);
    const [discountCourses , setDiscountCourses] = useState(null);

    // get all new courses 
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllNewestCourses();
            setNewCourses(data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
    }, []);


    // get all bestsellers courses
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllBestSellers();
          setBestSellers(data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);


    // get all discount courses
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllDiscountCourses();
          setDiscountCourses(data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);


    console.log(discountCourses)

    return(
        <div className="home">
            <HomeHero />
            <Achievement />
            {newCourses ? <HomeSlider data={newCourses} title={"جدیدترین دوره ها"} /> : ""}
            <FavoriteCategory />
            {bestSellers ? <HomeSlider data={bestSellers} title={"پر فروش ترین ها"} /> : ""}
            <BecomTeacher />
            {discountCourses ? <HomeSlider data={discountCourses} title={"تخفیف دار ها"} /> : ""}
            <FavoriteTeachers />
            <BlogSlider />
        </div>
    )
}

export default HomePage;