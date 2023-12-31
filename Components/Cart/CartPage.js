'use client'
import styles from "./styles.module.scss";
import cartimage from "../../public/Images/cartitemimage.png"
import deleteimage from "../../public/Images/delete.png"
import { BlueButton } from "../button/Button";
import Image from 'next/image';

const CartPage = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <p>سبد خرید شما</p>
      </div>
      <div className={styles.cart__items}>
        <div className={styles.item}>
          <div className={styles.item__right}>
            <div className={styles.item__right__image}>
              <Image src={cartimage} alt="image" />
            </div>
            <div className={styles.item__right__desc}>
              <p>دوره مدار الکتریکی استاد هادی توسلی</p>
            </div>
          </div>
          <div className={styles.item__left}>
            <div className={styles.item__left__price}>
              <p>200،000 تومان</p>
            </div>
            <div className={styles.item__left__delete}>
              <Image src={deleteimage} alt="icon" />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item__right}>
            <div className={styles.item__right__image}>
              <Image src={cartimage} alt="image" />
            </div>
            <div className={styles.item__right__desc}>
              <p>دوره مدار الکتریکی استاد هادی توسلی</p>
            </div>
          </div>
          <div className={styles.item__left}>
            <div className={styles.item__left__price}>
              <p>200،000 تومان</p>
            </div>
            <div className={styles.item__left__delete}>
              <Image src={deleteimage} alt="icon" />
            </div>
          </div>
        </div>
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
          <p>400،000 تومان</p>
        </div>
        <div className={styles.button}>
          <BlueButton>ادامه جهت تسویه</BlueButton>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
