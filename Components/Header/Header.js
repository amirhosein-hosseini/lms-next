"use client"
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Top from "./top";
import { getAllHeaderCategories } from "@/api/categories/categories";

const Header = () => {

    const [categories , setCategories] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllHeaderCategories();
            setCategories(data.data?.categories);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, []);



    return(
        <Top categories={categories} />
    )
}

export default Header;