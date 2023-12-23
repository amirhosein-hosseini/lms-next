'use client'
import styles from "./styles.module.scss";
import SingleDesc from "../../Components/Single/SingleDesc";
import desc from "../../Public/Images/desc.png";
import content from "../../Public/Images/content.png";
import message from "../../Public/Images/message.png";
import { Tag } from "../../Components/button/Button";
import SignBar from "../../Components/Single/Signbar";
import Image from 'next/image';

const SinglePage = () => {
  return (
    <div className={styles.singleWrapper + " flex flex-row-reverse"}>
      <div className={styles.singlepage + " flex flex-col"}>
        <div className={styles.singlepage__header}>
          <div
            className={
              styles.singlepage__header__top +
              " flex flex-col p-6 bg-white mb-8"
            }
          >
            <div
              className={
                styles.singlepage__header__top__title + " pb-12 pt-3 pb-3"
              }
            >
              <p>دوره جامع آموزش Laravel</p>
            </div>
            <div
              className={
                styles.singlepage__header__top__desc +
                " flex items-center pt-3 pb-3"
              }
            >
              <Tag>برنامه نویسی</Tag>
              <Tag>برنامه نویسی</Tag>
              <Tag>برنامه نویسی</Tag>
            </div>
          </div>
          <div
            className={
              styles.singlepage__header__nav +
              " p-6 flex items-center bg-white mb-5"
            }
          >
            <div className={styles.item + " flex items-center"}>
              <p>توضیحات</p>
              <Image src={desc} alt="icon" />
            </div>
            <div className={styles.item + " flex items-center"}>
              <p>محتوا</p>
              <Image src={content} alt="icon" />
            </div>
            <div className={styles.item + " flex items-center"}>
              <p>نظرات</p>
              <Image src={message} alt="icon" />
            </div>
          </div>
        </div>
        <SingleDesc />
      </div>
      <SignBar />
    </div>
  );
};

export default SinglePage;
