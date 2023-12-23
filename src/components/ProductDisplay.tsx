import React from 'react'
import Tshirt from '../assets/imgs/Sample-image.png'
import "./CSS/components.css"
export default function ProductDisplay() {
    return (
        <>
            <div className="Product-display">
                <img src={Tshirt} alt="" />
                <div className="Product-display-Style">
                    Racing - 964 <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
                        <path d="M1.38477 5.8C1.38477 1.88889 4.56658 1 6.38477 1C8.65749 1 10.4757 2.77778 11.3848 4.11111C12.2939 2.77778 14.112 1 16.3848 1C18.2029 1 21.3848 1.88889 21.3848 5.8C21.3848 11.6667 11.3848 17 11.3848 17C11.3848 17 1.38477 11.6667 1.38477 5.8Z" stroke="#121212" stroke-width="2" />
                    </svg>
                </div>
                <div className="Product-display-price">
                    Rs. 599.00
                </div>
            </div>
        </>
    )
}
