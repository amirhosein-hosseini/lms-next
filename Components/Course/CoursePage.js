'use client'
import styles from "./styles.module.scss";
import CourseItem from "../CourseItem/CourseItem";
import CourseFilter from "./CourseFilter";
import { useEffect, useState } from "react";
import { getAllCourse } from "@/api/course/Course";

const CoursePage = () => {

    const [courses , setCourses] = useState(null);



    // get all favorite teachers
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllCourse();
          setCourses(data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);

    console.log(courses)


    return(
        <div className={styles.coursePage + " flex"}>
            <div className={styles.coursePage__wrapper + " grid"}>
                {courses?.map((item) => (
                    <CourseItem
                        categories={item?.categories}
                        discount_amount={item?.discount_amount}
                        duration={item?.duration}
                        id={item?.id}
                        image={item?.image}
                        order={item?.order}
                        price={item?.price}
                        price_string={item?.price_string}
                        price_with_discount={item?.price_with_discount}
                        slug={item?.slug}
                        status={item?.status}
                        teacher={item?.teacher}
                        title={item?.title} 
                    />
                ))}
            </div>
            <CourseFilter />
        </div>
    )
}

export default CoursePage;