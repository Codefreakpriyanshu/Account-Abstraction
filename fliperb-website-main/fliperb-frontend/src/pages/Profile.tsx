import React from "react";
import "./CSS/pages.css";
import { SlPencil } from "react-icons/sl";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCubeOutline } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile-parent">
      <div>
        <h1 className="profile-header">WHO IS SHOPPING?</h1>

        <div className="profile-details">
          <div className="details-1">
            <div className="iconDiv">
              <SlPencil size={24} color="gray" />
            </div>
            <div className="data-1">
              <div className="profile-img"></div>
              <div>
                <p className="name">SWASTIK BOSE</p>
                <p className="email">swastikbose98@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="details-2">
            <div className="title">
              <p>ADDRESS</p>
              <div>
                <CiCirclePlus size={38} color="gray" />
              </div>
            </div>
            <p className="address">
              25, EAST KANTHALPARA, NANDAPALLY, BLOCK - A, NAIHATI, PIN - 743165
            </p>
            <p className="country">INDIA, WEST BENGAL</p>
          </div>
        </div>

        <div className="profile-insights">
          <p>PROFILE INSIGHTS</p>

          <div>
            <div className="insights">
              <div className="insight-details">
                <FaRegHeart size={24} color="gray" />
                <p>YOUR WISHLIST</p>
                <p>(10)</p>
              </div>

              <div className="insight-details">
                <IoCubeOutline size={28} color="gray" />
                <p>ORDERS</p>
                <p>(10)</p>
              </div>

              <div className="insight-details">
                <FaHeadphonesAlt size={28} color="gray" />
                <p>HELP CENTER</p>
                <div style={{ width: "30px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
