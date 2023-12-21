import React from 'react'
import "./CSS/components.css";

export default function Explore() {
    return (
        <>
            <div className="container">
                FLIPERB
                <div className="GenText">
                    GENERATION
                </div>
                <div className="Explore-Button">
                    <button onClick={()=>{}}>
                        EXPLORE <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_1_344)">
                                <path d="M6.11691 16.0659C5.72561 16.4572 5.72651 17.0919 6.11891 17.4821L6.18369 17.5465C6.57467 17.9353 7.20658 17.9343 7.59626 17.5442L14.4264 10.7071C14.8166 10.3165 14.8164 9.68363 14.4261 9.29325L7.58992 2.45711C7.1994 2.06658 6.56623 2.06658 6.17571 2.45711L6.11492 2.51789C5.7244 2.90842 5.7244 3.54158 6.11492 3.93211L11.4757 9.29289C11.8662 9.68342 11.8662 10.3166 11.4757 10.7071L6.11691 16.0659Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_344">
                                    <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 -1 20 20)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}
