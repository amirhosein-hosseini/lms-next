'use client'
import purple from "../../../Public/Images/purple.png";
import green from "../../../Public/Images/green.png";
import blue from "../../../Public/Images/blue.png";
import orange from "../../../Public/Images/orange.png";
import student from "../../../Public/Images/student.png";
import teacher from "../../../Public/Images/teacher.png";
import video from "../../../Public/Images/video.png";
import cvideo from "../../../Public/Images/video-circle.png";
import Image from 'next/image';
import styles from "./styles.module.scss";


const Achievement = () => {
    return(
        <div className={styles.achievement + " flex justify-between mt-16"}>
            <div className={styles.achievement__item + " text-right"}>
                <div className={styles.image + " flex"}>
                    <Image src={video} alt="icon"/>
                </div>
                <div className={styles.desc}>
                    <p className={styles.number + " text-indigo-700"}>
                        363
                    </p>
                    <p className={styles.title}>
                        وبینار آنلاین
                    </p>
                </div>
            </div>
            <div className={styles.achievement__item + " text-right"}>
                <div className={styles.image + " flex"}>
                    <Image src={video} alt="icon"/>
                </div>
                <div className={styles.desc}>
                    <p className={styles.number + " text-green-500"}>
                        363
                    </p>
                    <p className={styles.title}>
                        وبینار آنلاین
                    </p>
                </div>
            </div>
            <div className={styles.achievement__item + " text-right"}>
                <div className={styles.image + " flex"}>
                    <Image src={video} alt="icon"/>
                </div>
                <div className={styles.desc}>
                    <p className={styles.number + " text-orange-500"}>
                        363
                    </p>
                    <p className={styles.title}>
                        وبینار آنلاین
                    </p>
                </div>
            </div>
            <div className={styles.achievement__item + " text-right"}>
                <div className={styles.image + " flex"}>
                    <Image src={video} alt="icon"/>
                </div>
                <div className={styles.desc}>
                    <p className={styles.number + " text-purple-400"}>
                        363
                    </p>
                    <p className={styles.title}>
                        وبینار آنلاین
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Achievement;