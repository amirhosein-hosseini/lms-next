'use client'
import styles from "./styles.module.scss";
import telegram from "../../public/Images/telegram.png"
// import whatsapp from "../../assets/Images/big-whatsapp.png";
// import telephone from "../../assets/Images/big-telephone.png";
// import mail from "../../assets/Images/big-mail.png";
import Image from 'next/image';
const Social = () => {
    return(
        <div className={styles.socialwrapper}>
            <div className={styles.social}>
                <p className={styles.social__title}>
                    اطلاعات تماس
                </p>
                <p className={styles.social__desc}>
                    راه های ارتباطی جهت مشاوره پیش از خرید محصولات
                </p>
                <div className={styles.social__items}>
                    <div className={styles.item}>
                        <div className={styles.item__image}>
                            <Image src={telegram} alt="icon"/>
                        </div>
                        <div className={styles.item__descwrapper}>
                            <p className={styles.item__title}>
                                تلگرام
                            </p>
                            <p className={styles.item__desc}>
                                09011680954
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item__image}>
                            <Image src={telegram} alt="icon"/>
                        </div>
                        <div className={styles.item__descwrapper}>
                            <p className={styles.item__title}>
                                تلگرام
                            </p>
                            <p className={styles.item__desc}>
                                09011680954
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item__image}>
                            <Image src={telegram} alt="icon"/>
                        </div>
                        <div className={styles.item__descwrapper}>
                            <p className={styles.item__title}>
                                تلگرام
                            </p>
                            <p className={styles.item__desc}>
                                09011680954
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item__image}>
                            <Image src={telegram} alt="icon"/>
                        </div>
                        <div className={styles.item__descwrapper}>
                            <p className={styles.item__title}>
                                تلگرام
                            </p>
                            <p className={styles.item__desc}>
                                09011680954
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Social;