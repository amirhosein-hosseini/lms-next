"use client"
import styles from "./styles.module.scss";
import logo from "../../Public/Images/logo.png";
import basket from "../../Public/Images/basket.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Top = () => {

  const [openCategory, setOpenCategory] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileMenu , setOpenMobileMenu] = useState(false);

  const handleOpenCategory = () => {
    openCategory == false ? setOpenCategory(true) : setOpenCategory(false);
  };

  const handleCloseCategory = () => {
    openCategory == false ? setOpenCategory(true) : setOpenCategory(false);
  };

  const handleMobileCategoryClick = () => {
    if (isMobile) {
      setOpenCategory(!openCategory);
    }
  };

  const checkIsMobile = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const handleMobileMenu = () => {
    openMobileMenu == false ? setOpenMobileMenu(true) : setOpenMobileMenu(false);
  }

  useEffect(() => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
      <div className={styles.top}>
        <div className={styles.top__navopen} onClick={handleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
        <div className={styles.top__logo}>
          <Image src={logo} alt="logo" />
        </div>
        <ul className={styles.top__list} style={isMobile ? {transform: openMobileMenu ? "translateX(0%)" : "translateX(-100%)",} : {}}>
          <div className={styles.navclose} onClick={handleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/course">دوره ها</Link>
          </li>
          <li
           className={styles.top__list__category}
           onMouseEnter={handleOpenCategory}
           onMouseLeave={handleCloseCategory}
           onClick={handleMobileCategoryClick}
          >
            <span>دسته بندی ها</span>
          </li>
          <li
              className={styles.top__list__category__categories}
              style={isMobile ? { display: openCategory ? "grid" : "none" } : { display: openCategory ? "grid" : "none" }}
            >
              <div className={styles.top__list__category__categories__item}>
                <div
                  className={
                    styles.top__list__category__categories__item__title
                  }
                >
                  <p>مهندسی برق</p>
                </div>
                <ul
                  className={styles.top__list__category__categories__item__list}
                >
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                </ul>
              </div>
              <div className={styles.top__list__category__categories__item}>
                <div
                  className={
                    styles.top__list__category__categories__item__title
                  }
                >
                  <p>مهندسی برق</p>
                </div>
                <ul
                  className={styles.top__list__category__categories__item__list}
                >
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                </ul>
              </div>
              <div className={styles.top__list__category__categories__item}>
                <div
                  className={
                    styles.top__list__category__categories__item__title
                  }
                >
                  <p>مهندسی برق</p>
                </div>
                <ul
                  className={styles.top__list__category__categories__item__list}
                >
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                </ul>
              </div>
              <div className={styles.top__list__category__categories__item}>
                <div
                  className={
                    styles.top__list__category__categories__item__title
                  }
                >
                  <p>مهندسی برق</p>
                </div>
                <ul
                  className={styles.top__list__category__categories__item__list}
                >
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                </ul>
              </div>
              <div className={styles.top__list__category__categories__item}>
                <div
                  className={
                    styles.top__list__category__categories__item__title
                  }
                >
                  <p>مهندسی برق</p>
                </div>
                <ul
                  className={styles.top__list__category__categories__item__list}
                >
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                  <li>کنکور ارشد برق</li>
                </ul>
              </div>
            </li>
          <li>
            <Link href="/blog">وبلاگ</Link>
          </li>
          <li>
            <Link href="/contact">تماس با ما</Link>
          </li>
          <li>
            <Link href="/about">درباره ما</Link>
          </li>
        </ul>
        <div className={styles.top__sign}>
          <div className={styles.signbutton}>
            <Link href="/login">ورود / عضویت</Link>
          </div>
          <div className={styles.basket}>
            <Link href={"/cart"}>
              <Image src={basket} alt="" />
            </Link>
            <div className={styles.basketnumber}>
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
