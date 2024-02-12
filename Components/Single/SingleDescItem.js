'use client'
import styles from "./styles.module.scss";
import top from "../../Public/Images/top.png";
import down from "../../Public/Images/down.png";
import Image from 'next/image';

const SingleDescItem = ({data}) => {
    return(
        <div className={styles.singleDescItem}>
            <div className={styles.singleDescItem__header}>
                <p>
                    {data?.title}
                </p>
                <Image src={top} alt="icon" />
            </div>
            <div className={styles.singleDescItem__items}>
                <div className={styles.item}>
                    <p>
                        {data?.answer}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleDescItem;