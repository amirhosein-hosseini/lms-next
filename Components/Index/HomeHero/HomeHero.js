'use client'
import homeherimage from "../../../Public/Images/homeheroimage.png";
import herodescshape from "../../../Public/Images/herosdescshape.png";
import herosearchicon from "../../../Public/Images/herosearchicon.png";
import homeherovectro from "../../../Public/Images/homeherovector.png";
import Image from 'next/image';
import styles from "./styles.module.scss";



const HomeHero = () => {
    return(
        <div className={styles.wrapper + " flex mt-16"}>
            <div className={styles.wrapper__left + " mr-8"}>
                <p className={styles.desc + " text-justify text-right"}>
                    خـــودآموزی ، کســــب تجربه ،
                    ورود به بازار کار با تـــــاپ لــرن            
                    با کـــمـــتــــــرین هـــزیـــــنه 
                    خودت حرفه ایــــ یاد بگیـر
                    <Image src={herodescshape} alt="icon" className="inline-block"/>
                </p>
                <div className={styles.input + " text-right ml-auto"}>
                    <input type="text" placeholder="چی میخوای یاد بگیری؟" className="text-right ml-auto"></input>
                    <Image src={herosearchicon} alt="icon" width={56} height={56}/>
                </div>
                <div className={styles.vector + " flex justify-center"}>
                    <Image src={homeherovectro} alt="vector" />
                </div>
            </div>
            <div className={styles.wrapper__right + " w-full overflow-hidden"}>
                <Image src={homeherimage} alt="image" className="w-full" />
            </div>
        </div>
    )
}

export default HomeHero;