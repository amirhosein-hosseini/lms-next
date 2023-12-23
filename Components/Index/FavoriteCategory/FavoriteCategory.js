'use client'
import "./FavoriteCategory.css";
import favoritecategroyimage from "../../../Public/Images/favoritecategoryimage.png";
import Image from 'next/image';

const FavoriteCategory = () => {
    return(
        <div className="container favorite-cateogry">
            <div className="favorite-category-header">
                <p className="text-center text-white">
                    دسته بندی پرطرفدار
                </p>
            </div>
            <div className="favorite-category-wrapper flex justify-between mt-8 mb-16">
                <div className="favorite-category-item flex items-center justify-center flex-col bg-white p-8">
                    <div className="favorite-category-item-image">
                        <Image src={favoritecategroyimage} alt="image"/>
                    </div>
                    <div className="favorite-category-item-desc">
                        <p className="text-center">
                            زبان عمومی دکترا
                        </p>
                    </div>
                </div>
                <div className="favorite-category-item flex items-center justify-center flex-col bg-white p-8">
                    <div className="favorite-category-item-image">
                        <Image src={favoritecategroyimage} alt="image"/>
                    </div>
                    <div className="favorite-category-item-desc">
                        <p className="text-center">
                            زبان عمومی دکترا
                        </p>
                    </div>
                </div>
                <div className="favorite-category-item flex items-center justify-center flex-col bg-white p-8">
                    <div className="favorite-category-item-image">
                        <Image src={favoritecategroyimage} alt="image"/>
                    </div>
                    <div className="favorite-category-item-desc">
                        <p className="text-center">
                            زبان عمومی دکترا
                        </p>
                    </div>
                </div>
                <div className="favorite-category-item flex items-center justify-center flex-col bg-white p-8">
                    <div className="favorite-category-item-image">
                        <Image src={favoritecategroyimage} alt="image"/>
                    </div>
                    <div className="favorite-category-item-desc">
                        <p className="text-center">
                            زبان عمومی دکترا
                        </p>
                    </div>
                </div>
                <div className="favorite-category-item flex items-center justify-center flex-col bg-white p-8">
                    <div className="favorite-category-item-image">
                        <Image src={favoritecategroyimage} alt="image"/>
                    </div>
                    <div className="favorite-category-item-desc">
                        <p className="text-center">
                            زبان عمومی دکترا
                        </p>
                    </div>
                </div>
                <div className="favorite-category-item flex items-center justify-center flex-col bg-white p-8">
                    <div className="favorite-category-item-image">
                        <Image src={favoritecategroyimage} alt="image"/>
                    </div>
                    <div className="favorite-category-item-desc">
                        <p className="text-center">
                            زبان عمومی دکترا
                        </p>
                    </div>
                </div>
                <div className="favorite-category-item flex items-center justify-center flex-col bg-white p-8">
                    <div className="favorite-category-item-image">
                        <Image src={favoritecategroyimage} alt="image"/>
                    </div>
                    <div className="favorite-category-item-desc">
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