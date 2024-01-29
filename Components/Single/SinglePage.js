'use client'
import styles from "./styles.module.scss";
import SingleDesc from "../../Components/Single/SingleDesc";
import desc from "../../Public/Images/desc.png";
import content from "../../Public/Images/content.png";
import message from "../../Public/Images/message.png";
import { Tag } from "../../Components/button/Button";
import SignBar from "../../Components/Single/Signbar";
import Image from 'next/image';
import { getShowCourse } from "@/api/course/ShowCourse";
import { useEffect, useState } from "react";

const SinglePage = ({slug}) => {

  const [courseData , setCourseData] = useState(null);



  // get all favorite teachers
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getShowCourse(slug[0]);
        setCourseData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className={styles.singleWrapper + " flex flex-row-reverse"}>
      <div className={styles.singlepage + " flex flex-col"}>
        <div className={styles.singlepage__header}>
          <div
            className={
              styles.singlepage__header__top +
              " flex flex-col p-6 bg-white mb-8"
            }
          >
            <div
              className={
                styles.singlepage__header__top__title + " pb-12 pt-3 pb-3"
              }
            >
              <p>{courseData?.title}</p>
            </div>
            <div
              className={
                styles.singlepage__header__top__desc +
                " items-center pt-3 pb-3"
              }
            >
              {courseData?.categories?.map((item) => (
                <Tag>{item?.title}</Tag>
              ))}
            </div>
          </div>
          <div
            className={
              styles.singlepage__header__nav +
              " p-6 flex items-center bg-white mb-5"
            }
          >
            <div className={styles.item + " flex items-center"}>
              <p>توضیحات</p>
              <Image src={desc} alt="icon" />
            </div>
            <div className={styles.item + " flex items-center"}>
              <p>محتوا</p>
              <Image src={content} alt="icon" />
            </div>
            <div className={styles.item + " flex items-center"}>
              <p>نظرات</p>
              <Image src={message} alt="icon" />
            </div>
          </div>
        </div>
        <SingleDesc data={courseData} />
      </div>
      <SignBar data={courseData} />
    </div>
  );
};

export default SinglePage;
