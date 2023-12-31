'use client'
import styles from "./styles.module.scss";
import CourseItem from "../CourseItem/CourseItem";
import CourseFilter from "./CourseFilter";

const CoursePage = () => {
    return(
        <div className={styles.coursePage + " flex"}>
            <div className={styles.coursePage__wrapper + " grid"}>
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
            </div>
            <CourseFilter />
        </div>
    )
}

export default CoursePage;