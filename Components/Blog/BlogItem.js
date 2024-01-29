'use client'
import blogimage from "../../public/Images/blogimage.png";
import usergray from "../../public/Images/usergray.png";
import Image from 'next/image';
import styles from "./styles.module.scss";
import Link from "next/link";

const BlogItem = ({author , category , category_slug , comment_count , commetns, content , created_at , description , id , image , locale , meta_description , slug , tags , title}) => {
    return(
        <div className={styles.blogitem + " bg-white flex flex-col justify-between items-center p-3 text-right"}>
            <div>
                <div className={styles.blogitem__image}>
                    <img src={image} alt="image" />
                </div>
                <div className={styles.blogitem__desc + " mt-3"}>
                    <p className={styles.title}>
                        {title}
                    </p>
                    {/* <div className={styles.desc + " text-gray-700"}>
                        <p>
                            {description}
                        </p>
                    </div> */}
                </div>
            </div>
            <div className={styles.blogitem__footer + " flex flex-row-reverse justify-between w-full items-center mt-3"}>
                <div className={styles.person + " flex flex-row-reverse items-center"}>
                    <Image src={usergray} alt="icon" />
                    <p className="mr-2 text-gray-500">
                        {author?.full_name}
                    </p>
                </div>
                <div className={styles.button}>
                    <Link href={"/blog/" + id}>
                        مشاهده 
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;