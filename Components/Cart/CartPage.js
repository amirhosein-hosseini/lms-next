'use client'
import styles from "./styles.module.scss";
import cartimage from "../../public/Images/cartitemimage.png"
import { BlueButton } from "../button/Button";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { getAllCartList } from "@/api/cart/cart";
import Link from "next/link";

const CartPage = () => {

  const [cartList , setCartList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCartList();
        setCartList(data?.data?.cart);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);





  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <p>سبد خرید شما</p>
      </div>
      <div className={styles.cart__items}>
        {cartList?.items?.map((item) => (
          <div className={styles.item}>
            <div className={styles.item__right}>
              <div className={styles.item__right__image}>
                <img src={item?.image} alt="image" />
              </div>
              <div className={styles.item__right__desc}>
                <p>{item?.title}</p>
              </div>
            </div>
            <div className={styles.item__left}>
              <div className={styles.item__left__price}>
                <p>{item?.price}</p>
              </div>
              <div className={styles.item__left__delete}>
                <img src="../../images/delete.png" alt="icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cart__discount}>
        <input type="text" placeholder="کد تخفیف خود را وارد کنید"></input>
        <button>اعمال کردن</button>
      </div>
      <div className={styles.cart__pay}>
        <div className={styles.title}>
          <p>جمع کل سبد خرید</p>
        </div>
        <div className={styles.price}>
          <p>{cartList?.amounts?.total} تومان</p>
        </div>
        <div className={styles.button}>
          <Link href={"/payment"}>
            <BlueButton>ادامه جهت تسویه</BlueButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
