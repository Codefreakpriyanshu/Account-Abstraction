import React from 'react';
import "./CSS/components.css";
import facebook from '../assets/icons/facebook.png';
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';
import FliperbLogo from './FliperbLogo';

export default function Footer() {
    return (
        <div>
            <FliperbLogo/>
            <div className="rectangle">
                <div className="FliperbLifestyle" >FLIPERB LIFESTYLE</div>
                <div className="Content" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
                <div className="connect">
                    <div className="Contact-List">
                        <div className="Contacts-List-1">
                            <ul>
                                <li>
                                    <a className="ContactUs">Contact us</a>
                                </li>
                                <li>
                                    <a href="" className="Privacy">Privacy policy</a>
                                </li>
                                <li>
                                    <a href="" className='Terms'>Terms of use</a>
                                </li>
                            </ul>
                        </div>
                        <div className="Contacts-List-2">
                            <ul>
                                <li>
                                    <a href="" className='Help'>Help center</a>
                                </li>
                                <li>
                                    <a href="" className='About'>About Us</a>
                                </li>
                                <li>
                                    <a href="" className='FAQ'>FAQs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="">
                            <div className="facebook">
                                <img src={facebook} alt="" />
                            </div>

                        </a>
                        <a href="">
                            <div className="instagram">
                                <img src={instagram} alt="" />
                            </div>

                        </a>
                        <a href="">
                            <div className="twitter">
                                <img src={twitter} alt="" />
                            </div>

                        </a>
                    </div>
                </div>
                <div className="declaration">
                    @2023 Fliberb Lifestyle, All rights reserved to
                </div>
                
            </div>
        </div>
    )
}
