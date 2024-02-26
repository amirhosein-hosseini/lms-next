"use client"
import React from "react";
import styles from "./styles.module.scss";
import ViewerFiles from "./viewerFiles";

const Viewer = ({slug}) => {


    return(
        <div className={styles.viewer}>
            <ViewerFiles slug={slug[0]} />
        </div>
    )
}

export default Viewer;