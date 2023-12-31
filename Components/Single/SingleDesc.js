'use client'
import styles from "./styles.module.scss";
import singleimage from "../../Public/Images/singleimage.png";
import Image from 'next/image';
import SingleDescItem from "./SingleDescItem";

const SingleDesc = () => {
    return(
        <div className={styles.SingleDesc + " p-6"}>
            <div className={styles.SingleDesc__image}>
                <Image src={singleimage} alt="image" />
            </div>
            <div className={styles.SingleDesc__desc}>
                <p className={styles.title}>
                    دوره جامع آموزش Laravel
                </p>
                <p className={styles.desc}>
                    فریم ورک چیست ؟  فریـم ورک بستـری را برای بـرنامه نــویسان فراهــم می‌کند که استــفاده از کدهای از پیش ساخته شده را امکان‌پذیــر می‌کند. در واقـع مــی‌توان گفت هــدف اصـلی فریــم ورک‌ها، راحتی کار برنامه‌ نویسان و اجتناب از نوشتن کدهای تکراری است. لاراول یکی از محبوب‌ترین فریم ورک های PHP است. PHP فریم ورک‌هــای متعــددی دارد کــه از جمــله آن‌ها مــی‌توان به Yii ،Cakephp ،codeigniter ،Nette ،Symfonyاشاره کرد. در حــال حاضر اکثر برنامـه ‌نــویسان تحـت وبی که قصـد توسعه برنامه‌های کاربردی وب بر پایه معماری سه لایه (MVC) با PHP دارند، استـفاده از فریــم ورک لاراول را به دیگر فریم ورک‌ها ترجیح می‌دهند.
                    لاراول (Laravel) یک فریم ورک php مبتنی بر معماری MVC اسـت که تیــلور اوتول (Taylor Otwell) آن را ایجاد و توسعه بخشید. این فریم ورک، بسیار قدرتمند، کدباز و رایگان است. 
                </p>
            </div>
            <div className={styles.SingleDesc__benefit + " flex flex-col"}>
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
            </div>
            <div className={styles.SingleDesc__video}>
                <p className={styles.title}>
                    ویدیو معرفی دوره
                </p>
                <div className={styles.videoWrapper}>
                    <video controls>
                        <source src="../../public/Images/aboutvideo.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className={styles.SingleDesc__items}>
                <p className={styles.title}>
                    دانلود دوره ها
                </p>
                <SingleDescItem />
                <SingleDescItem />
                <SingleDescItem />
            </div>
        </div>
    )
}

export default SingleDesc;