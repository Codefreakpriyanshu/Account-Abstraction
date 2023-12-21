import React from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import "./CSS/components.css";
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

const OffersForYou = () => {

   /*  const swiperParams = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            clickable: true,
        },
        spaceBetween: 30,
        slidesPerView: 5,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    }; */

    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description for Product 1',
            image: 'https://example.com/product1.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description for Product 2',
            image: 'https://example.com/product2.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description for Product 2',
            image: 'https://example.com/product2.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description for Product 2',
            image: 'https://example.com/product2.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description for Product 2',
            image: 'https://example.com/product2.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description for Product 2',
            image: 'https://example.com/product2.jpg',
        },
        // Add more products as needed
    ];

    return (
        <div className='your-offers'>
            <div>
                <h2 className='offers-title'>Limited time offers</h2>
            </div>
            <div className='offer-parent'>
                <div>
                    <p className='time-title'>LIMITED TIME DEALS</p>
                    <div className='countdown'>
                        <div className='time'>
                            <p className='time-num'>10</p>
                            <p className='time-text'>h</p>
                        </div>
                        <div className='time'>
                            <p className='time-num'>58</p>
                            <p className='time-text'>m</p>
                        </div>
                        <div className='time'>
                            <p className='time-num'>30</p>
                            <p className='time-text'>s</p>
                        </div>
                    </div>
                </div>
                <div className='offer-product-list'>
                    <button className='prev-btn'>
                        <FaAngleLeft />
                    </button>
                    <div className='offer-products'>
                        <div className='product-item'>
                            <div className='product-img'></div>
                            <p>Men’s black</p>
                        </div>
                        <div className='product-item'>
                            <div className='product-img'></div>
                            <p>Men’s black</p>
                        </div>
                        <div className='product-item'>
                            <div className='product-img'></div>
                            <p>Men’s black</p>
                        </div>
                        <div className='product-item'>
                            <div className='product-img'></div>
                            <p>Men’s black</p>
                        </div>
                        <div className='product-item'>
                            <div className='product-img'></div>
                            <p>Men’s black</p>
                        </div>

                    </div>
                    <button className='next-btn'>
                        <FaAngleRight />
                    </button>
                </div>

                {/* try  */}
                {/* <div className='offer-product-list'>
                    <div className="swiper-button-prev">
                        <button className='prev-btn'>
                            <FaAngleLeft />
                        </button>
                    </div>
                    <Swiper {...swiperParams}>
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className='product-item'>
                                    <div className='product-img'></div>
                                    <p>Men’s black</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-next">
                        <button className='next-btn'>
                            <FaAngleRight />
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default OffersForYou;