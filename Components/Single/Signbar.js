import { PurpleButton } from "../../Components/button/Button";
import styles from "./styles.module.scss";
import user from "../../Public/Images/sign-user.png";
'use client'
import video from "../../Public/Images/sign-video.png";
import clock from "../../Public/Images/sign-clock.png";
import grade from "../../Public/Images/sign-grade.png";
import desc from "../../Public/Images/desc.png";
import date from "../../Public/Images/sign-date.png";
import teacher from "../../Public/Images/sign-teacher.png";
import stars from "../../Public/Images/stars.png";
import { Link } from "react-router-dom";
import Image from 'next/image';

const SignBar = () => {
  return (
    <div className={styles.Signbar + " flex flex-col"}>
      <div className={styles.Signbar__price + " text-right"}>
        <div className={styles.price + " flex flex-col"}>
          <p className={styles.RealPrice}>
            قیمت:<span>۳۴۹,۵۰۰</span>
            <span className={styles.money}>تومان</span>
          </p>
          <p className={styles.discount}>
            <span>۶۹۹,۰۰۰</span>تومان
          </p>
        </div>
      </div>
      <div
        className={
          styles.Signbar__buttons + " flex flex-col justify-center items-center"
        }
      >
        <PurpleButton>افزودن به سبد خرید</PurpleButton>
      </div>
      <div className={styles.Signbar__desc}>
        <ul className={"flex flex-col text-right"}>
          <li>
            <div className={styles.item + " flex text-right items-center"}>
              <Image src={user} alt="icon" />
              <p className={styles.item__desc + " text-right"}>
                مدرس دوره : <span>حسن خسروجردی</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.Signbar__teacher + " flex flex-col"}>
        <div className={styles.title}>
          <p>درباره مدرس دوره</p>
        </div>
        <div className={styles.item + " flex items-center"}>
          <div className={styles.item__image}>
            <Image src={teacher} alt="image" />
          </div>
          <div className={styles.item__desc + " flex flex-col"}>
            <p className={styles.title}>فرزاد معصومی</p>
            <p className={styles.desc}>برنامه نویس</p>
          </div>
        </div>
      </div>
      <div
        className={
          styles.Signbar__resume + " flex justify-between items-center"
        }
      >
        <div className={styles.stars}>
          <Image src={stars} alt="icon" />
        </div>
        <div className={styles.button}>
          <button>مشاهده روزمه</button>
        </div>
      </div>
    </div>
  );
};

export default SignBar;
