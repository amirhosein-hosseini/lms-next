'use client'
import styles from "./styles.module.scss";
import search from "../../public/Images/search.png";
import BlogItem from "../CourseItem/BlogItem";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { getAllBlogs } from "@/api/Blog/blog";


const BlogPage = () => {


    const [blogs , setBlogs] = useState(null);



    // get all favorite teachers
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllBlogs();
          setBlogs(data.data.blogs);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, []);


    console.log(blogs)
    
    return(
        <div className={styles.blog}>
            <div className={styles.blog__wrapper}>
                {blogs?.map((item)=>(
                    <BlogItem
                        author={item?.author}
                        category={item?.category}
                        category_slug={item?.category_slug}
                        comment_count={item?.comment_count}
                        commetns={item?.commetns}
                        content={item?.content}
                        created_at={item?.created_at}
                        description={item?.description}
                        id={item?.id}
                        image={item?.image}
                        locale={item?.locale}
                        meta_description={item?.meta_description}
                        slug={item?.slug}
                        tags={item?.tags}
                        title={item?.title}
                    />
                ))}
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