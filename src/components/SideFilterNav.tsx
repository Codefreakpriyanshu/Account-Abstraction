import React from 'react';
import { FaAngleDown } from "react-icons/fa6";
import filter from '../assets/icons/filter.png';
import anime from '../assets/icons/anime.png';
import car from '../assets/icons/car.png';
import color from '../assets/icons/color.png';
import discount from '../assets/icons/discount.png';
import price from '../assets/icons/price.png';
import types from '../assets/icons/types.png';
import size from '../assets/icons/size.png';

const SideFilterNav = () => {
    return (
        <div className='filters'>
            <div className='filter-title'>
                <img src={filter} alt="" />
                <p>FILTERS</p>
            </div>
            <div className='filter-menu'>
                <img src={size} alt="" />
                <p>SIZE</p>
                <FaAngleDown className='angle-down' />
            </div>
            <div className='filter-menu'>
                <img src={types} alt="" />
                <p>TYPES</p>
                <FaAngleDown className='angle-down' />
            </div>
            <div className='filter-menu'>
                <img src={color} alt="" />
                <p>COLORS</p>
                <FaAngleDown className='angle-down' />
            </div>
            <div className='filter-menu'>
                <img src={anime} alt="" />
                <p>ANIME GENERES</p>
                <FaAngleDown className='angle-down' />
            </div>
            <div className='filter-menu'>
                <img src={car} alt="" />
                <p>AUTOMOTIVE STYLE</p>
                <FaAngleDown className='angle-down' />
            </div>
            <div className='filter-menu'>
                <img src={price} alt="" />
                <p>PRICE RANGE</p>
                <FaAngleDown className='angle-down' />
            </div>
            <div className='filter-menu'>
                <img src={discount} alt="" />
                <p>DISCOUNTS</p>
                <FaAngleDown className='angle-down' />
            </div>
            
        </div>
    );
};

export default SideFilterNav;