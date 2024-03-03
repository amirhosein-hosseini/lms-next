"use client"
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import SingleContent from "../Single/SingleContent";
import { getShowFile } from "@/api/course/Viewer";
import { getShowCourse } from "@/api/course/ShowCourse";

const Viewer = ({slug}) => {

    const [file , setFile] = useState(null);
    const [progress , setProgress] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getShowFile(slug[2]);
            setFile(data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
    }, []);


  // get all favorite teachers
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getShowCourse(slug[0]);
        setProgress(data?.data?.progress_percent);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);



    return(
        <div className={styles.viewer + " max-md:flex-col-reverse"}>
            <div className={styles.viewer__list}>
              <div className={styles.progress + " bg-white p-5"}>
                <div className="flex justify-between items-center">
                  <p style={{ fontFamily: `ye-regular` }}>
                    {progress}%
                  </p>
                  <p className="text-right mb-2" style={{ fontFamily: `ye-regular` }}>
                    پیشرفت
                  </p>
                </div>
                <div className="bg-[#EAECEE] h-[10px] w-full rounded-lg ovrflow-hidden">
                  <div className="bg-[#FEA405] h-full rounded-lg" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
              <SingleContent slug={slug[0]} />
            </div>
            <div className={styles.viewer__video}>
                <iframe allowfullscreen="" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture full" type="text/html" class="block w-full h-[360px] sm:h-[520px] md:h-[740px]"></iframe>
            </div>
        </div>
    )
}

export default Viewer;