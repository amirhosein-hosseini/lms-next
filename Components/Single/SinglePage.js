'use client'
import styles from "./styles.module.scss";
import SingleDesc from "../../Components/Single/SingleDesc";
import desc from "../../Public/Images/desc.png";
import content from "../../Public/Images/content.png";
import message from "../../Public/Images/message.png";
import { Tag } from "../../Components/button/Button";
import SignBar from "../../Components/Single/Signbar";
import Image from 'next/image';
import { getAllChapters, getAllCourseComments, getAllSessionChapters, getCourseFaqs, getShowCourse } from "@/api/course/ShowCourse";
import { useEffect, useState } from "react";
import SingleContent from "./SingleContent";
import SingleComment from "./SingleComment";
import Link from "next/link";

const SinglePage = ({slug}) => {

  const [courseData , setCourseData] = useState(null);
  const [fadsData , setFaqsData] = useState(null);
  const [descLevel , setDescLevel] = useState("desc"); 
  const [chapters , setChapters] = useState(null);
  const [comments , setComments] = useState(null);
  const [sessionChapters , setSessionChapters] = useState(null);
  const [id , setId] = useState(null);



  const handleDescLevel = (level) => {
    setDescLevel(level);
  }



  // get all favorite teachers
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getShowCourse(slug[0]);
        setCourseData(data?.data);
        setId(data?.data?.id)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);



  // get all course faqs datas
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourseFaqs(slug[0]);
        setFaqsData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);



    // get all course chapters datas
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllChapters(id);
          setChapters(data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [id]);


    // get all course comments datas
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllCourseComments(id);
          setComments(data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [id]);


    // get all course comments datas
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllSessionChapters(id);
          setSessionChapters(data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [id]);









  return (
    <div className={styles.singleWrapper + " flex flex-row-reverse max-md:flex-col-reverse"}>
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
                <Link href={"/course/" + item?.slug}>
                  <Tag>{item?.title}</Tag>
                </Link>
              ))}
            </div>
          </div>
          <div
            className={
              styles.singlepage__header__nav +
              " p-6 flex items-center bg-white mb-5"
            }
          >
            <div className={styles.item + " flex items-center"} onClick={() => handleDescLevel("desc")}>
              <p>توضیحات</p>
              <Image src={desc} alt="icon" />
            </div>
            <div className={styles.item + " flex items-center"} onClick={() => handleDescLevel("content")}>
              <p>محتوا</p>
              <Image src={content} alt="icon" />
            </div>
            <div className={styles.item + " flex items-center"} onClick={() => handleDescLevel("comment")}>
              <p>نظرات</p>
              <Image src={message} alt="icon" />
            </div>
          </div>
        </div>
        {descLevel == "desc" ? <SingleDesc data={courseData} faqs={fadsData} /> :
          descLevel == "content" ? <SingleContent slug={id} /> :
          descLevel == "comment" ? <SingleComment data={comments} /> : ""
        }
      </div>
      <SignBar data={courseData} />
    </div>
  );
};

export default SinglePage;
