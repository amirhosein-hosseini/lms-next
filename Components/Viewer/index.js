"use client"
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import SingleContent from "../Single/SingleContent";
import { getShowFile } from "@/api/course/Viewer";

const Viewer = ({slug}) => {

    const [file , setFile] = useState(null);

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


    return(
        <div className={styles.viewer}>
            <div className={styles.viewer__list}>
                <SingleContent slug={slug[0]} />
            </div>
            <div className={styles.viewer__video}>
                <iframe allowfullscreen="" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture full" type="text/html" class="block w-full h-[360px] sm:h-[520px] md:h-[740px]"></iframe>
            </div>
        </div>
    )
}

export default Viewer;