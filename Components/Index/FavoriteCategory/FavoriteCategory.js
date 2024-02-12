'use client'
import favoritecategroyimage from "../../../Public/Images/favoritecategoryimage.png";
import Image from 'next/image';
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { getAllFavoriteCategories } from "@/api/index";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

const FavoriteCategory = () => {

    const [favoriteCategoreis , setFavoriteCategories] = useState(null);

    useEffect(() => {
        AOS.init();
    }, [])

    // get all discount courses
    useEffect(() => {
        const fetchData = async () => {
            try {
            const data = await getAllFavoriteCategories();
            setFavoriteCategories(data.data.categories);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
    }, []);


    console.log(favoriteCategoreis)



    return(
        <div className={styles.favoritecategory}>
            <div className={styles.favoritecategory__header}>
                <p className="text-center text-white">
                    دسته بندی پرطرفدار
                </p>
            </div>
            <div className={styles.favoritecategory__items + " mt-8 mb-16"}>
                {favoriteCategoreis?.map((item) => (
                    <Link href={"/course/" + item?.slug}>
                        <div className={styles.item + " flex items-center justify-center flex-col bg-white p-8"} data-aos="zoom-in" data-aos-duration="1500">
                            <div className={styles.item__image}>
                                <img src={item?.icon} alt="image"/>
                            </div>
                            <div className={styles.item__desc}>
                                <p className="text-center">
                                    {item?.title}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FavoriteCategory;