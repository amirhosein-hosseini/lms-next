'use client'
import slideritemimage from "../../Public/Images/slideritemimage.png";
import people from "../../public/Images/people.png"
import person from "../../public/Images/person.png";
import star from "../../public/Images/star.png";
import Image from 'next/image';
import styles from "./Styles.module.scss";

const CourseItem = () => {
    return(
        <div className={styles.slideritem + " bg-white text-right"}>
            <div className={styles.slideritem__image}>
                <Image src={slideritemimage} alt="image" />
            </div>
            <div className={styles.slideritem__desc}>
                <p className={styles.title + " mt-4 mb-4 text-gray-900"}>
                    آموزش صفر تا صد EF Core
                </p>
                <div className={styles.items + " flex justify-between items-center flex-row-reverse pb-4"}>
                    <div className={styles.item + " flex items-center flex-row-reverse"}>
                        <Image src={person} alt="icon" />
                        <p className="mr-1">
                            صادق زمانی
                        </p>
                    </div>
                    <div className={styles.item + " flex items-center flex-row-reverse"}>
                        <Image src={star} alt="icon" />
                        <p className="mr-1">
                            5
                        </p>
                    </div>
                    <div className={styles.item + " flex items-center flex-row-reverse"}>
                        <Image src={people} alt="icon" />
                        <p className="mr-1">
                            16
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.slideritem__footer + " flex justify-between items-center mt-4"}>
                <div className={styles.price}>
                    <p>
                        290,000تومان
                    </p>
                </div>
                <div className={styles.button}>
                    <p className=" bg-indigo-600 text-white">
                        ثبت نام
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CourseItem;