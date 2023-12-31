'use client'
import styles from "./styles.module.scss";
import search from "../../public/Images/search.png";
import BlogItem from "../CourseItem/BlogItem";
import Image from 'next/image';


const BlogPage = () => {
    
    return(
        <div className={styles.blog}>
            <div className={styles.blog__wrapper}>
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
            <div className={styles.blog__filter}>
                <div className={styles.search}>
                    <div className={styles.search__header}>
                        <p>
                            جست و جو
                        </p>
                    </div>
                    <div className={styles.search__input}>
                        <Image src={search} alt="icon" />
                        <input type="text" placeholder="کلمه مورد نظر خود را تایپ کنید" />
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.list__header}>
                        <p>
                            فهرست مطالب 
                        </p>
                    </div>
                    <ul>
                        <li>
                            لورم ایپسوم متن ساختگی با تولید سادگی 
                        </li>
                        <li>
                            لورم ایپسوم متن ساختگی با تولید سادگی 
                        </li>
                        <li>
                            لورم ایپسوم متن ساختگی با تولید سادگی 
                        </li>
                        <li>
                            لورم ایپسوم متن ساختگی با تولید سادگی 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogPage;