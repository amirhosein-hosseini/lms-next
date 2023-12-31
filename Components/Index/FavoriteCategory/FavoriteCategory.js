'use client'
import favoritecategroyimage from "../../../Public/Images/favoritecategoryimage.png";
import Image from 'next/image';
import styles from "./styles.module.scss";

const FavoriteCategory = () => {
    return(
        <div className={styles.favoritecategory}>
            <div className={styles.favoritecategory__header}>
                <p className="text-center text-white">
                    دسته بندی پرطرفدار
                </p>
            </div>
            <div className={styles.favoritecategory__items + " flex justify-between mt-8 mb-16"}>
                <div className={styles.item + " flex items-center justify-center flex-col bg-white p-8"}>
                    <div className={styles.item__image}>
                        <Image src={favoritecategroyimage} alt="image"/>
                    </div>
                    <div className={styles.item__desc}>
                        <p className="text-center">
                            زبان عمومی دکترا
                        </p>
                    </div>
                </div>
                <div className={styles.item + " flex items-center justify-center flex-col bg-white p-8"}>
                    <div className={styles.item__image}>
                        <Image src={favoritecategroyimage} alt="image"/>
                    </div>
                    <div className={styles.item__desc}>
                        <p className="text-center">
                            زبان عمومی دکترا
                        </p>
                    </div>
                </div>
                <div className={styles.item + " flex items-center justify-center flex-col bg-white p-8"}>
                    <div className={styles.item__image}>
                        <Image src={favoritecategroyimage} alt="image"/>
                    </div>
                    <div className={styles.item__desc}>
                        <p className="text-center">
                            زبان عمومی دکترا
                        </p>
                    </div>
                </div>
                <div className={styles.item + " flex items-center justify-center flex-col bg-white p-8"}>
                    <div className={styles.item__image}>
                        <Image src={favoritecategroyimage} alt="image"/>
                    </div>
                    <div className={styles.item__desc}>
                        <p className="text-center">
                            زبان عمومی دکترا
                        </p>
                    </div>
                </div>
                <div className={styles.item + " flex items-center justify-center flex-col bg-white p-8"}>
                    <div className={styles.item__image}>
                        <Image src={favoritecategroyimage} alt="image"/>
                    </div>
                    <div className={styles.item__desc}>
                        <p className="text-center">
                            زبان عمومی دکترا
                        </p>
                    </div>
                </div>
                <div className={styles.item + " flex items-center justify-center flex-col bg-white p-8"}>
                    <div className={styles.item__image}>
                        <Image src={favoritecategroyimage} alt="image"/>
                    </div>
                    <div className={styles.item__desc}>
                        <p className="text-center">
                            زبان عمومی دکترا
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCategory;