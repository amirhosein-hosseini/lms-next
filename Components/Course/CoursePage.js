'use client'
import styles from "./styles.module.scss";
import CourseItem from "../CourseItem/CourseItem";
import CourseFilter from "./CourseFilter";
import { useEffect, useState } from "react";
import { getAllCourse } from "@/api/course/Course";
import down from "../../public/Images/down.png";
import Image from 'next/image';

const CoursePage = () => {

    const [courses , setCourses] = useState(null);
    const [filter , setFilter] = useState({
      "free" : false,
      "discount" : false,
      "type" : null,
      "sort" : null,
    });



    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllCourse(filter);
          setCourses(data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [filter]);


    const handleSort = (place , value) => {
      setFilter((prevFilterData) => ({
        ...prevFilterData,
        [place]: value,
      }))
    }

    const handleCheckboxChange = (event) => {
      const isChecked = event.target.checked;
      const name = event.target.name;
      setFilter((prevFilterData) => ({
        ...prevFilterData,
        [name]: isChecked,
      }))
    };

    const handleRadioChange = (event) => {
      const name = event.target.value;
      setFilter((prevFilterData) => ({
        ...prevFilterData,
        ["type"]: name,
      }))
    }



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
            <div className={styles.courseFilter + " flex flex-col"}>
              <div className={styles.courseFilter__topic + " flex flex-col p-4 text-right"}>
                  <div className={styles.header + " flex justify-between items-center flex-row-reverse cursor-pointer"}>
                      <p>
                          جدید ترین
                      </p>
                      <Image src={down} alt="icon" />
                  </div>
                  <div className={styles.items + " flex flex-col"}>
                      <p className={styles.item + " cursor-pointer"} onClick={() => handleSort("sort" , "newest")}>
                          جدید ترین
                      </p>
                      <p className={styles.item + " cursor-pointer"} onClick={() => handleSort("sort" , "expensive")}>
                          گران ترین
                      </p>
                      <p className={styles.item + " cursor-pointer"} onClick={() => handleSort("sort" , "inexpensive")}>
                          ارزان ترین
                      </p>
                  </div>
              </div>
              <div className={styles.courseFilter__options + " flex flex-col p-4 text-right"}>
                  <div className={styles.switchOption + " flex justify-between items-center flex-row-reverse"}>
                      <p>
                          رایگان
                      </p>
                      <label class="switch">
                          <input type="checkbox" name="free" onChange={handleCheckboxChange} />
                          <span class="slider round" />
                      </label>
                  </div>
                  <div className={styles.switchOption + " flex justify-between items-center flex-row-reverse"}>
                      <p>
                          تخفیف دار
                      </p>
                      <label class="switch">
                          <input type="checkbox" name="dicount" onChange={handleCheckboxChange}/>
                          <span class="slider round" />
                      </label>
                  </div>
                  <div className={styles.radioOption}>
                      <div className={styles.radioOption__header + " flex justify-between items-center flex-row-reverse cursor-pointer"}>
                          <p>
                              نوع محتوا
                          </p>
                          <Image src={down} alt="icon" />
                      </div>
                      <div className={styles.radioOption__items}>
                          <form className={styles.item + " flex flex-col"}>
                              <div className={styles.formGroup + " flex items-center"}>
                                  <input type="radio" id="video" value="video" name="type" onChange={handleRadioChange} />
                                  <label for="video">ویدیویی</label>
                              </div>
                              <div className={styles.formGroup + " flex items-center"}>
                                  <input type="radio" id="webinar" value="webinar" name="type" onChange={handleRadioChange} />
                                  <label for="webinar">وبینار</label>
                              </div>
                              <div className={styles.formGroup + " flex items-center"}>
                                  <input type="radio" id="text" value="text" name="type" onChange={handleRadioChange} />
                                  <label for="text">دوره متنی</label>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default CoursePage;