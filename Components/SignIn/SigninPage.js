'use client'
import React from "react";
import styles from "./styles.module.scss";
import { BlueButton } from "../../Components/button/Button";

const SigninPage = () => {
  return (
    <div className={styles.signin}>
      <div className={styles.signin__wrapper}>
        <div className={styles.signin__wrapper__header}>
          <p className={styles.title}>ثبت نام در لایوآموز</p>
          <p className={styles.desc}>
            جهت ثبت نام در لایوآموز اطلاعات زیر را وارد کنید
          </p>
        </div>
        <div className={styles.signin__wrapper__form}>
          <form>
            <div className={styles.formgroup}>
              <label>نام</label>
              <input type="text"></input>
            </div>
            <div className={styles.formgroup}>
              <label>نام خانوادگی</label>
              <input type="text"></input>
            </div>
            <div className={styles.formgroup}>
              <label>تلفن همراه</label>
              <input type="text"></input>
            </div>
            <div className={styles.formtwogroup}>
              <div className={styles.formgroup}>
                <label>رمزعبور</label>
                <input type="password"></input>
              </div>
              <div className={styles.formgroup}>
                <label>تکرار رمزعبور</label>
                <input type="password"></input>
              </div>
            </div>
            <div className={styles.formbutton}>
              <BlueButton>ثبت نام</BlueButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
