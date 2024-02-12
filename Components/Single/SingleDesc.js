'use client'
import styles from "./styles.module.scss";
import singleimage from "../../Public/Images/singleimage.png";
import Image from 'next/image';
import SingleDescItem from "./SingleDescItem";

const SingleDesc = ({data}) => {


    return(
        <div className={styles.SingleDesc + " p-6"}>
            {data?.image && 
                <div className={styles.SingleDesc__image}>
                    <img src={data?.image} alt="image" />
                </div>
            }

            <div className={styles.SingleDesc__desc}>
                <p className={styles.title}>
                    {data?.title}
                </p>
                <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.description }}></div>
            </div>
            {/* <div className={styles.SingleDesc__benefit + " flex flex-col"}>
                <p className={styles.title}>
                    برخی از مزایای استفاده از لاراول : 
                </p>
                <ul>
                    <li>
                        یادگیری آسان و بروز
                    </li>
                    <li>
                        یادگیری آسان و بروز
                    </li>
                    <li>
                        یادگیری آسان و بروز
                    </li>
                    <li>
                        یادگیری آسان و بروز
                    </li>
                    <li>
                        یادگیری آسان و بروز
                    </li>
                </ul>
            </div> */}
            {data?.video_demo && 
                <div className={styles.SingleDesc__video}>
                    <p className={styles.title}>
                        ویدیو معرفی دوره
                    </p>
                    <div className={styles.videoWrapper}>
                        <video controls>
                            <source src={data?.video_demo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            }
            <div className={styles.SingleDesc__items}>
                {data?.faqs?.map((item) => (
                    <SingleDescItem data={item} />
                ))}
            </div>
        </div>
    )
}

export default SingleDesc;