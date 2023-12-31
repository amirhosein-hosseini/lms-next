'use client'
import blogimage from "../../public/Images/blogimage.png";
import usergray from "../../public/Images/usergray.png";
import Image from 'next/image';
import styles from "./Styles.module.scss";

const BlogItem = () => {
    return(
        <div className={styles.blogitem + " bg-white flex flex-col justify-center items-center p-3 text-right"}>
            <div className={styles.blogitem__image}>
                <Image src={blogimage} alt="image" />
            </div>
            <div className={styles.blogitem__desc + " mt-3"}>
                <p className={styles.title}>
                    لورم ایپسوم 
                </p>
                <div className={styles.desc + " text-gray-700"}>
                    لــــورم ایپســوم متن ساختــگــی با تــولید سادگــی نامفهوم از صنعـت چاپ، و با استــفاده از طراحان گرافیــک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </div>
            </div>
            <div className={styles.blogitem__footer + " flex flex-row-reverse justify-between w-full items-center mt-3"}>
                <div className={styles.person + " flex flex-row-reverse items-center"}>
                    <Image src={usergray} alt="icon" />
                    <p className="mr-2 text-gray-500">
                        صادق زمانی
                    </p>
                </div>
                <div className={styles.button}>
                    <p>
                        مشاهده 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;