
import styles from "./styles.module.scss";
import logo from "../../Public/Images/logo.png";
import basket from "../../Public/Images/basket.png";
import Image from "next/image";

const Top = () => {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.top__logo}>
          <Image src={logo} alt="logo" />
        </div>
        <ul className={styles.top__list}>
          <li>
            <a href="/production">صفحه اصلی</a>
          </li>
          <li className={styles.top__list__category}>
            <span>دسته بندی ها</span>
            <div className={styles.top__list__category__categories}>
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
            </div>
          </li>
          <li>
            <a href="/production">وبلاگ</a>
          </li>
          <li>
            <a href="/production">تماس با ما</a>
          </li>
          <li>
            <a href="/production">درباره ما</a>
          </li>
        </ul>
        <div className={styles.top__sign}>
          <div className={styles.signbutton}>
            <a href="./production">ورود / عضویت</a>
          </div>
          <div className={styles.basket}>
            <Image src={basket} alt="" />
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
