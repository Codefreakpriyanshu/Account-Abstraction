import React from 'react'
import "./CSS/components.css";
import floatingLogo from "../assets/imgs/circular-floating-logo.png";
export default function BrandLogo() {
  return (
    <>
    <div className="Logo-Section-Text">
    CHECK BRAND STOCK
    </div>
    <div className="LogoSection ">
      <div className="Section d-flex">
        <div className="BrandLogo" >
          <img src={floatingLogo}alt="LOGO"  />
        </div>
        <div className="BrandLogo" >
          <img src=""alt="LOGO"  />
        </div>
        <div className="BrandLogo" >
          <img src=""alt="LOGO"  />
        </div>
      </div>
      <div className="Section d-flex">
        <div className="BrandLogo" >
          <img src=""alt="LOGO"  />
        </div>
        <div className="BrandLogo" >
          <img src=""alt="LOGO"  />
        </div>
        <div className="BrandLogo" >
          <img src=""alt="LOGO"  />
        </div>
      </div>
      <div className="Section d-flex">
        <div className="BrandLogo" >
          <img src=""alt="LOGO"  />
        </div>
        <div className="BrandLogo" >
          <img src=""alt="LOGO"  />
        </div>
        <div className="BrandLogo" >
          <img src=""alt="LOGO"  />
        </div>
      </div>
    </div>
    </>
  )
}
