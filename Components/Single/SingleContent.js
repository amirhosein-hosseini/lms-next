import { getAllChapters, getAllChaptersFiles, getAllSessionChapters } from "@/api/course/ShowCourse";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const SingleContent = ({ slug }) => {

  const [showSessionFiles, setShowSessionFiles] = useState(null);
  const [showchapterFiles, setShowChapterFiles] = useState({});
  const [loading, setLoading] = useState({});
  const [openTitleId, setOpenTitleId] = useState(null);
  const [chapters , setChapters] = useState(null);
  const [session , setSession] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllSessionChapters(slug);
        setSession(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllChapters(slug);
        setChapters(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);




  const handleShowFiles = async (id) => {
    if (openTitleId === id) {
      // If the same title is clicked again, close the previously opened data
      setOpenTitleId(null);
      return;
    }

    setLoading((prevLoading) => ({ ...prevLoading, [id]: true }));

    try {
      const data = await getAllChaptersFiles(slug, id);
      setShowChapterFiles((prevData) => ({ ...prevData, [id]: data.data[0].files }));
      setOpenTitleId(id);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
    }
  };


  const handleShowSessionFiles = (id) => {
    showSessionFiles != null ? setShowSessionFiles(null) : setShowSessionFiles(id);
  }


  return (
    <div className={styles.content}>
      <div className={styles.contentwrapper}>
        <div className={styles.online}>
        <p className={styles.title}>کلاس های آنلاین دوره</p>
          {session?.map((item) => (
            <div className={styles.contentwrapper__item} key={item.id}>
              <div
                className={styles.title}
                onClick={() => handleShowSessionFiles(item.id)}
              >
                <div className={styles.title__right}>
                  <p>{item.title}</p>
                  
                </div>
                <p className={styles.title__left}>{item.topics_count}فایل</p>
              </div>
              {loading[item.id] === true ? 
                <div className={styles.loading}>
                  <svg
                    className={styles.spinner}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                  >
                    <circle
                      className={styles.path}
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      strokeWidth="4"
                    />
                  </svg>
                </div> : ""
              }            
              {showSessionFiles === item.id && (
                <div className={styles.items}>
                  {!loading[item.id] &&
                    item?.sessions?.map((file) => (
                      <div className={styles.desc} key={file.id}>
                        <p className={styles.name}>{file.title}</p>
                        <div className={styles.detail}>
                          <Link href={"/viewer/" + slug + "/film/" + file?.id + "?tab=" + item?.id}>مشاهده ویدیو</Link>
                          <p className={styles.duration}>{file.time}</p>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <p className={styles.title}>محتوای آموزشی دوره</p>
        {chapters?.map((item) => (
          <div className={styles.contentwrapper__item} key={item.id}>
            <div
              className={styles.title}
              onClick={() => handleShowFiles(item.id)}
            >
              <div className={styles.title__right}>
                <p>{item.title}</p>
                
              </div>
              <p className={styles.title__left}>{item.topics_count}فایل</p>
            </div>
            {loading[item.id] === true ? 
              <div className={styles.loading}>
                <svg
                  className={styles.spinner}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                >
                  <circle
                    className={styles.path}
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="4"
                  />
                </svg>
              </div> : ""
            }            
            {openTitleId === item.id && (
              <div className={styles.items}>
                {!loading[item.id] &&
                  showchapterFiles[item.id]?.map((file) => (
                    <div className={styles.desc} key={file.id}>
                      <p className={styles.name}>{file.title}</p>
                      <div className={styles.detail}>
                        <Link href={"/viewer/" + slug + "/film/" + file?.id + "/" + item?.id}>مشاهده ویدیو</Link>
                        <p className={styles.duration}>{file.time}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleContent;