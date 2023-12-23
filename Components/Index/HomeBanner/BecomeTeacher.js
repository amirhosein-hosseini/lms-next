'use client'
import "./HomeBanner.css";
import becometeacherimage from "../../../Public/Images/becometeacherimage.png";
import buttonarrow from "../../../Public/Images/buttonarrow.png";
import bcomebackgroundvector from "../../../Public/Images/becometeacherbackgroundvector.png";
import Image from 'next/image';

const BecomTeacher = () => {
    return(
        <div className="container become-teacher-wrapper flex justify-center items-center text-right pr-10 pt-3">
            <div className="become-teacher-left">
                <Image src={becometeacherimage} alt="image"/>
            </div>
            <div className="become-teacher-right">
                <p className="become-teacher-title text-white mb-8">
                    مدرس شوید   
                </p>
                <p className="become-teacher-desc text-white mb-8">
                    آیا شما علاقه مند هستید که بخشی از مدرسان ما باشید؟ شما می توانید با ثبت نام به عنوان یک مربی یا سازمان بخشی از جامعه ما باشید.
                </p>
                <button className="become-teacher-button bg-black text-white flex ml-auto flex-row-reverse itmes-center">
                    مشاهده جزییات
                    <Image className="mr-1" src={buttonarrow} alt="icon"/>
                </button>
            </div>
            <Image className="becomebacgroundvector" src={bcomebackgroundvector} alt="vector"/>
        </div>
    )
}

export default BecomTeacher;