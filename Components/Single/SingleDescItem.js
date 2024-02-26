'use client'
import styles from "./styles.module.scss";
import top from "../../Public/Images/top.png";
import down from "../../Public/Images/down.png";
import Image from 'next/image';
import { useState } from "react";

const SingleDescItem = ({data}) => {

    const [showAnswer , setShowAnswer] = useState(false);
    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    }


    return(
        <div className={styles.singleDescItem}>
            <div className={styles.singleDescItem__header} onClick={handleShowAnswer}>
                <p>
                    {data?.title}
                </p>
                {showAnswer == true ? <Image src={top} alt="icon" /> : <Image src={down} alt="icon" />}
                
            </div>
            <div className={styles.singleDescItem__items}>
                <div className={styles.item}>
                    {showAnswer == true ? <p>{data?.answer}</p> : ""}
                </div>
            </div>
        </div>
    )
}

export default SingleDescItem;