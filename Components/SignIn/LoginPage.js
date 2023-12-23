'use client'
import React from "react";
import styles from "./styles.module.scss";
import { BlueButton, OutlineButton } from "../../Components/button/Button";

const LoginPage = () => {
  return (
    <div className={styles.signin}>
      <div className={styles.signin__wrapper}>
        <div className={styles.signin__wrapper__header}>
          <p className={styles.title}>ورود به حساب کاربری</p>
          <p className={styles.desc}>
            جهت ورود به حساب کاربری لایوآموز خود اطلاعات زیر را وارد کنید.
          </p>
        </div>
        <div className={styles.signin__wrapper__form}>
          <form>
            <div className={styles.formgroup}>
              <label>تلفن همراه</label>
              <input type="text"></input>
            </div>
            <div className={styles.formgroup}>
              <label>گذرواژه</label>
              <input type="password"></input>
            </div>
            <div className={styles.formbutton}>
              <BlueButton>ورود</BlueButton>
            </div>
            <div className={styles.formbutton}>
              <p>گذرواژه خود را فراموش کرده اید؟</p>
              <BlueButton>ورود با گذرواژه یکبار مصرف</BlueButton>
            </div>
            <div className={styles.formgotosign}>
              <p>آیا حساب کاربری ندارید؟</p>
              <OutlineButton>ثبت نام</OutlineButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
