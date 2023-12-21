import React from 'react';
import bestProduct from '../assets/icons/best-product.png';
import { FaAngleRight } from "react-icons/fa6";
import "./CSS/components.css";

const BagCategories = () => {
    return (
        <div className='bag-category'>
            <h2 className='category-title'>CATEGORIES TO BAG</h2>
            <div className='category-list'>
                <div className='category'>
                    <div className='shop-btn'>
                        <button>
                            SHOP NOW
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
                <div className='category'>
                    <div className='shop-btn'>
                        <button>
                            SHOP NOW
                            <FaAngleRight />
                        </button>
                    </div>

                    {/* labels  */}
                    <div className='product-label-1'>
                        <img src={bestProduct} alt="" />
                    </div>
                    <div className='product-label-2'>
                        <img src={bestProduct} alt="" />
                    </div>
                </div>
                <div className='category'>
                    <div className='shop-btn'>
                        <button>
                            SHOP NOW
                            <FaAngleRight />
                        </button>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default BagCategories;