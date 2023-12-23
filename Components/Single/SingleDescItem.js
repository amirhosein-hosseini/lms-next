'use client'
import styles from "./styles.module.scss";
import top from "../../Public/Images/top.png";
import down from "../../Public/Images/down.png";
import Image from 'next/image';

const SingleDescItem = () => {
    return(
        <div className={styles.singleDescItem}>
            <div className={styles.singleDescItem__header}>
                <p>
                    چطور میتوانم فایل هارا به صورت یکجا دانلود کنم؟
                </p>
                <Image src={top} alt="icon" />
            </div>
            <div className={styles.singleDescItem__items}>
                <div className={styles.item}>
                    <p>
                        در صفحه هر دوره یک باکس آبی رنگ، حاوی "جهت دریافت لینک دانلود تمامی قسمت ها بر روی این لینک کلیک کنید" می باشد. با دریافت این لینک می توانید تمام لینک ها را به IDM دهید و فایل ها را به صورت همزمان دانلود نمایید.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleDescItem;