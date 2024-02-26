"use client"
import styles from "./styles.module.scss";
import logo from "../../Public/Images/logo.png";
import basket from "../../Public/Images/basket.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import UserDropDown from "./userDropDown";
import { getUserQuickInfo } from "@/api/user/user";

const Top = () => {

  const {isLoggedIn} = useAuth();
  const [openCategory, setOpenCategory] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openMobileMenu , setOpenMobileMenu] = useState(false);
  const [userDetail , setUserDetail] = useState(null);
  const [showUserDetail , setShowUserDetail] = useState(false);

  const handleOpenCategory = () => {
    openCategory == false ? setOpenCategory(true) : setOpenCategory(false);
  };

  const handleCloseCategory = () => {
    openCategory == false ? setOpenCategory(true) : setOpenCategory(false);
  };

  const handleShowUserDetail = () => {
    setShowUserDetail(!showUserDetail);
  }

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



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserQuickInfo();
        setUserDetail(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
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
            {isLoggedIn == false ?<Link className={styles.signbuttonbutton} href="/login">ورود / عضویت</Link>:
              <div className={styles.usersignwrapper}>
                <button onClick={handleShowUserDetail}>
                  {userDetail?.full_name}
                  {showUserDetail == true ?
                    <svg class="svg-icon" viewBox="0 0 20 20">
                      <path d="M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10"></path>
                    </svg> : 
                    <svg class="svg-icon" viewBox="0 0 20 20">
                      <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                    </svg>
                  }
                </button>
                {showUserDetail == true ? <UserDropDown data={userDetail} /> : ""}
              </div>
            }
          </div>
          <div className={styles.basket}>
            <Link href={"/cart"}>
              <Image src={basket} alt="" />
            </Link>
            <div className={styles.basketnumber}>
              <span>{userDetail?.count_cart_items}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
