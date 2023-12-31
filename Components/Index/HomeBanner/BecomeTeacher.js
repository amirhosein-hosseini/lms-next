'use client'
import becometeacherimage from "../../../Public/Images/becometeacherimage.png";
import buttonarrow from "../../../Public/Images/buttonarrow.png";
import bcomebackgroundvector from "../../../Public/Images/becometeacherbackgroundvector.png";
import Image from 'next/image';
import styles from "./styles.module.scss";

const BecomTeacher = () => {
    return(
        <div className={styles.wrapper + " flex justify-center items-center text-right pr-10 pt-3"}>
            <div className={styles.wrapper__left}>
                <Image src={becometeacherimage} alt="image"/>
            </div>
            <div className={styles.wrapper__right}>
                <p className={styles.title + " text-white mb-8"}>
                    مدرس شوید   
                </p>
                <p className={styles.desc + " text-white mb-8"}>
                    آیا شما علاقه مند هستید که بخشی از مدرسان ما باشید؟ شما می توانید با ثبت نام به عنوان یک مربی یا سازمان بخشی از جامعه ما باشید.
                </p>
                <button className={styles.button + " bg-black text-white flex ml-auto flex-row-reverse itmes-center"}>
                    مشاهده جزییات
                    <Image className="mr-1" src={buttonarrow} alt="icon"/>
                </button>
            </div>
            <Image className={styles.wrapper__becomebacgroundvector} src={bcomebackgroundvector} alt="vector"/>
        </div>
    )
}

export default BecomTeacher;