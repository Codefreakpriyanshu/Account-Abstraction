import React from 'react'
import Navbar from '../components/Navbar'
import Tshirt from '../assets/imgs/Sample-image.png'

import ProductDisplay from '../components/ProductDisplay';
import Footer from '../components/Footer';
import './CSS/pages.css'
export default function ProductPage() {
  return (
    <div className='ProductPage'>
      <Navbar />
      <div className="product-type-info">
        Men / T-Shirts / <span>Automotive Style</span>
      </div>
      <div className="Product-Info d-flex">
        <div className="Product-images">
          <div className='product-pic d-flex'>
            <img src={Tshirt} alt="" />
            <img src={Tshirt} alt="" />
          </div>
          <div className='product-pic d-flex'>
            <img src="" alt="Image" />
            <img src="" alt="Image" />
          </div>
        </div>
        <div className='ProductSideNavbar'>
          <div className="Product-name">
            Corolla DX <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
              <path d="M1.38477 5.8C1.38477 1.88889 4.56658 1 6.38477 1C8.65749 1 10.4757 2.77778 11.3848 4.11111C12.2939 2.77778 14.112 1 16.3848 1C18.2029 1 21.3848 1.88889 21.3848 5.8C21.3848 11.6667 11.3848 17 11.3848 17C11.3848 17 1.38477 11.6667 1.38477 5.8Z" stroke="#121212" stroke-width="2" />
            </svg>
          </div>
          <div>Automotive Style T-shirt</div>
          <div className="Product-Price">Rs.999 <span>(incl. of all taxes)</span></div>
          <div className="Product-Details">Regular-fit T-shirt in a soft, rib-knit cotton blend with a round neckline.</div>
          <div className="Net-Quantity d-flex">
            Net Quantity : <button>+</button> <div className="Product-Count">2</div> <button>-</button>
          </div>
          <div className="Product-Color">
            <div></div> White
          </div>
          <div className="Product-Sizes">
            Sizes <br />
            <div className="Product-Size-options">
              <button type="button">s</button>
              <button type="button">M</button>
              <button type="button">L</button>
              <button type="button">XL</button>
              <button type="button">XXL</button>
            </div>
            <div className="Size-Query">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M15.6652 4.09777L11.9019 0.334835C11.7958 0.228681 11.6698 0.144473 11.5311 0.0870217C11.3924 0.0295702 11.2438 0 11.0937 0C10.9436 0 10.795 0.0295702 10.6563 0.0870217C10.5177 0.144473 10.3917 0.228681 10.2856 0.334835L0.334805 10.2858C0.22866 10.3919 0.14446 10.5179 0.0870139 10.6566C0.0295675 10.7953 0 10.9439 0 11.094C0 11.2441 0.0295675 11.3927 0.0870139 11.5314C0.14446 11.6701 0.22866 11.7961 0.334805 11.9022L4.09812 15.6652C4.20424 15.7713 4.33023 15.8555 4.4689 15.913C4.60756 15.9704 4.75619 16 4.90628 16C5.05637 16 5.205 15.9704 5.34366 15.913C5.48233 15.8555 5.60832 15.7713 5.71444 15.6652L15.6652 5.71424C15.7713 5.60811 15.8555 5.4821 15.913 5.34343C15.9704 5.20475 16 5.05611 16 4.906C16 4.7559 15.9704 4.60726 15.913 4.46858C15.8555 4.3299 15.7713 4.2039 15.6652 4.09777ZM4.90592 14.8573L1.14332 11.0936L3.42888 8.80787L5.31018 10.6901C5.36327 10.7432 5.42629 10.7853 5.49566 10.814C5.56502 10.8427 5.63936 10.8575 5.71444 10.8575C5.78952 10.8575 5.86386 10.8427 5.93322 10.814C6.00259 10.7853 6.06561 10.7432 6.1187 10.6901C6.17179 10.637 6.2139 10.5739 6.24263 10.5046C6.27136 10.4352 6.28615 10.3608 6.28615 10.2858C6.28615 10.2107 6.27136 10.1363 6.24263 10.067C6.2139 9.99759 6.17179 9.93456 6.1187 9.88147L4.23668 8L5.71444 6.52211L7.59574 8.40429C7.70296 8.51152 7.84837 8.57176 8 8.57176C8.15163 8.57176 8.29704 8.51152 8.40426 8.40429C8.51147 8.29707 8.57171 8.15164 8.57171 8C8.57171 7.84836 8.51147 7.70293 8.40426 7.59571L6.52224 5.71424L8 4.23635L9.8813 6.11853C9.93439 6.17162 9.99741 6.21374 10.0668 6.24247C10.1361 6.27121 10.2105 6.28599 10.2856 6.28599C10.3606 6.28599 10.435 6.27121 10.5043 6.24247C10.5737 6.21374 10.6367 6.17162 10.6898 6.11853C10.7429 6.06544 10.785 6.00241 10.8137 5.93304C10.8425 5.86367 10.8573 5.78932 10.8573 5.71424C10.8573 5.63915 10.8425 5.5648 10.8137 5.49543C10.785 5.42606 10.7429 5.36303 10.6898 5.30994L8.8078 3.42847L11.0934 1.14271L14.8567 4.90636L4.90592 14.8573Z" fill="#121212" />
                </svg>Size Guide
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17" fill="none">
                  <path d="M21.2245 2.72567V14.3405C21.2245 14.7805 21.0626 15.2026 20.7745 15.5138C20.4864 15.8249 20.0956 15.9997 19.6881 15.9997H2.7874C2.37992 15.9997 1.98912 15.8249 1.70099 15.5138C1.41285 15.2026 1.25098 14.7805 1.25098 14.3405V2.72567M21.2245 2.72567C21.2245 2.2856 21.0626 1.86356 20.7745 1.55239C20.4864 1.24122 20.0956 1.06641 19.6881 1.06641H2.7874C2.37992 1.06641 1.98912 1.24122 1.70099 1.55239C1.41285 1.86356 1.25098 2.2856 1.25098 2.72567M21.2245 2.72567L12.112 9.53858C11.8551 9.73054 11.5501 9.83337 11.2377 9.83337C10.9254 9.83337 10.6204 9.73054 10.3635 9.53858L1.25098 2.72567" stroke="#121212" stroke-linecap="round" stroke-linejoin="round" />
                </svg>Size out of stock?
              </div>
            </div>
          </div>
          <button className='Add-To-Bag-button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 8C4.48986 8 4.32029 8.08194 4.19526 8.22781C4.07024 8.37367 4 8.5715 4 8.77778V19.2778C4 20.7478 5.07333 22 6.33333 22H17.6667C18.9267 22 20 20.8085 20 19.3385V8.77778C20 8.5715 19.9298 8.37367 19.8047 8.22781C19.6797 8.08194 19.5101 8 19.3333 8H4.66667Z" stroke="#FAF9F8" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.5 8V6.5C7.5 5.30653 7.97411 4.16193 8.81802 3.31802C9.66193 2.47411 10.8065 2 12 2C13.1935 2 14.3381 2.47411 15.182 3.31802C16.0259 4.16193 16.5 5.30653 16.5 6.5V8" stroke="#FAF9F8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>Add To Bag
          </button>
          <div className="Product-Delivery-time">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path d="M8.03125 7.10048C8.03125 6.92262 8.10191 6.75204 8.22767 6.62627C8.35344 6.5005 8.52402 6.42984 8.70188 6.42984C8.87975 6.42984 9.05033 6.5005 9.17609 6.62627C9.30186 6.75204 9.37252 6.92262 9.37252 7.10048V11.1243C9.37252 11.3022 9.30186 11.4727 9.17609 11.5985C9.05033 11.7243 8.87975 11.7949 8.70188 11.7949C8.52402 11.7949 8.35344 11.7243 8.22767 11.5985C8.10191 11.4727 8.03125 11.3022 8.03125 11.1243V7.10048ZM8.70188 3.79492C8.52402 3.79492 8.35344 3.86558 8.22767 3.99135C8.10191 4.11711 8.03125 4.28769 8.03125 4.46556C8.03125 4.64342 8.10191 4.814 8.22767 4.93977C8.35344 5.06554 8.52402 5.13619 8.70188 5.13619C8.87975 5.13619 9.05033 5.06554 9.17609 4.93977C9.30186 4.814 9.37252 4.64342 9.37252 4.46556C9.37252 4.28769 9.30186 4.11711 9.17609 3.99135C9.05033 3.86558 8.87975 3.79492 8.70188 3.79492Z" fill="#121212" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.73161 0C4.31905 0 0.742188 3.5816 0.742188 8C0.742188 12.4184 4.31905 16 8.73161 16C13.1442 16 16.721 12.4184 16.721 8C16.721 3.5816 13.1442 0 8.73161 0ZM2.34007 8C2.34007 9.69739 3.01346 11.3253 4.21211 12.5255C5.41075 13.7257 7.03647 14.4 8.73161 14.4C10.4267 14.4 12.0525 13.7257 13.2511 12.5255C14.4497 11.3253 15.1231 9.69739 15.1231 8C15.1231 6.30261 14.4497 4.67475 13.2511 3.47452C12.0525 2.27428 10.4267 1.6 8.73161 1.6C7.03647 1.6 5.41075 2.27428 4.21211 3.47452C3.01346 4.67475 2.34007 6.30261 2.34007 8Z" fill="#121212" />
            </svg>Delivery Time : 2-7 days
          </div>
          <div className="Product-Reviews">
            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="16" viewBox="0 0 92 16" fill="none">
              <path d="M15.8609 6.02694C15.8012 5.82893 15.6861 5.65411 15.5304 5.52495C15.3747 5.3958 15.1855 5.31822 14.9873 5.30219L10.6872 4.91415C10.6612 4.91149 10.6363 4.90151 10.6153 4.88529C10.5943 4.86908 10.5779 4.84722 10.5678 4.82205L8.88786 0.642693C8.81005 0.452036 8.68027 0.289463 8.51466 0.175193C8.34904 0.0609235 8.1549 0 7.95638 0C7.75786 0 7.56372 0.0609235 7.39811 0.175193C7.23249 0.289463 7.10271 0.452036 7.02491 0.642693L5.34493 4.82205C5.33486 4.84722 5.31845 4.86908 5.29744 4.88529C5.27643 4.90151 5.25161 4.91149 5.2256 4.91415L0.925489 5.30219C0.727221 5.31822 0.538081 5.3958 0.382395 5.52495C0.226709 5.65411 0.111599 5.82893 0.0518702 6.02694C-0.0113879 6.22522 -0.0169136 6.43863 0.0359918 6.64019C0.0888972 6.84176 0.197859 7.02242 0.349103 7.15935L3.61143 10.13C3.63141 10.1486 3.64624 10.1724 3.65439 10.1989C3.66253 10.2255 3.66368 10.2538 3.65772 10.281L2.67706 14.6982C2.63135 14.9016 2.64439 15.1145 2.71454 15.3102C2.78469 15.5058 2.90881 15.6753 3.07121 15.7974C3.23109 15.9205 3.42266 15.9908 3.62119 15.9992C3.81971 16.0075 4.01608 15.9535 4.18492 15.8442L7.88117 13.5039C7.9029 13.4898 7.92794 13.4824 7.95349 13.4824C7.97904 13.4824 8.00408 13.4898 8.02581 13.5039L11.7221 15.8442C11.8927 15.9532 12.0904 16.0071 12.2903 15.9989C12.4901 15.9908 12.6832 15.921 12.8452 15.7984C13.0071 15.6758 13.1306 15.5059 13.2001 15.3101C13.2696 15.1143 13.282 14.9013 13.2357 14.6982L12.2579 10.2795C12.252 10.2523 12.2531 10.224 12.2613 10.1974C12.2694 10.1708 12.2843 10.1471 12.3042 10.1285L15.5666 7.15784C15.717 7.02067 15.8252 6.84011 15.8776 6.63887C15.93 6.43764 15.9242 6.22473 15.8609 6.02694ZM14.9931 6.47386L11.7307 9.44456C11.5917 9.57082 11.4884 9.73428 11.4318 9.91734C11.3752 10.1004 11.3675 10.2961 11.4096 10.4834L12.3874 14.902C12.3946 14.9317 12.393 14.963 12.3828 14.9917C12.3726 15.0204 12.3543 15.0452 12.3303 15.0628C12.3085 15.081 12.2818 15.0915 12.2539 15.0927C12.2261 15.0939 12.1986 15.0858 12.1755 15.0696L8.47925 12.7293C8.32166 12.6293 8.1408 12.5764 7.95638 12.5764C7.77197 12.5764 7.5911 12.6293 7.43351 12.7293L3.73727 15.0696C3.71414 15.0858 3.68665 15.0939 3.65882 15.0927C3.63099 15.0915 3.60425 15.081 3.5825 15.0628C3.55848 15.0452 3.54015 15.0204 3.52994 14.9917C3.51974 14.963 3.51815 14.9317 3.52537 14.902L4.50313 10.4834C4.54523 10.2961 4.53757 10.1004 4.48099 9.91734C4.4244 9.73428 4.32104 9.57082 4.18203 9.44456L0.919703 6.47386C0.897392 6.45406 0.881367 6.42764 0.873748 6.39812C0.866129 6.3686 0.867275 6.33736 0.877035 6.30853C0.884338 6.27982 0.900174 6.25427 0.922265 6.23555C0.944356 6.21683 0.971564 6.20591 0.999978 6.20435L5.30081 5.81631C5.48494 5.79993 5.66125 5.73127 5.81066 5.61775C5.96007 5.50424 6.07686 5.35021 6.1484 5.17234L7.82838 0.992986C7.84006 0.967046 7.85857 0.945114 7.88175 0.929751C7.90493 0.914388 7.93182 0.90623 7.95927 0.90623C7.98673 0.90623 8.01362 0.914388 8.0368 0.929751C8.05998 0.945114 8.07849 0.967046 8.09017 0.992986L9.76437 5.17234C9.83567 5.34978 9.95203 5.50353 10.1009 5.61701C10.2497 5.73049 10.4254 5.7994 10.6091 5.81631L14.9099 6.20435C14.9383 6.20591 14.9655 6.21683 14.9876 6.23555C15.0097 6.25427 15.0255 6.27982 15.0328 6.30853C15.0429 6.33706 15.0445 6.36812 15.0374 6.39762C15.0303 6.42712 15.0149 6.45369 14.9931 6.47386Z" fill="#121212" />
              <path d="M34.7574 6.02694C34.6977 5.82893 34.5825 5.65411 34.4269 5.52495C34.2712 5.3958 34.082 5.31822 33.8838 5.30219L29.5836 4.91415C29.5576 4.91148 29.5328 4.90151 29.5118 4.88529C29.4908 4.86908 29.4744 4.84722 29.4643 4.82205L27.7843 0.642693C27.7065 0.452036 27.5768 0.289463 27.4111 0.175193C27.2455 0.0609235 27.0514 0 26.8529 0C26.6543 0 26.4602 0.0609235 26.2946 0.175193C26.129 0.289463 25.9992 0.452036 25.9214 0.642693L24.2414 4.82205C24.2313 4.84722 24.2149 4.86908 24.1939 4.88529C24.1729 4.90151 24.1481 4.91148 24.1221 4.91415L19.822 5.30219C19.6237 5.31822 19.4346 5.3958 19.2789 5.52495C19.1232 5.65411 19.0081 5.82893 18.9484 6.02694C18.8851 6.22522 18.8796 6.43863 18.9325 6.64019C18.9854 6.84176 19.0943 7.02242 19.2456 7.15935L22.5079 10.13C22.5279 10.1486 22.5427 10.1724 22.5509 10.1989C22.559 10.2255 22.5602 10.2538 22.5542 10.281L21.5735 14.6982C21.5278 14.9016 21.5409 15.1145 21.611 15.3102C21.6812 15.5058 21.8053 15.6753 21.9677 15.7974C22.1276 15.9205 22.3191 15.9908 22.5177 15.9992C22.7162 16.0075 22.9126 15.9535 23.0814 15.8442L26.7777 13.5039C26.7994 13.4898 26.8244 13.4824 26.85 13.4824C26.8755 13.4824 26.9006 13.4898 26.9223 13.5039L30.6185 15.8442C30.7891 15.9532 30.9869 16.0071 31.1867 15.9989C31.3866 15.9908 31.5797 15.921 31.7416 15.7984C31.9036 15.6758 32.0271 15.5059 32.0966 15.3101C32.1661 15.1143 32.1785 14.9013 32.1322 14.6982L31.1544 10.2795C31.1485 10.2523 31.1496 10.224 31.1578 10.1974C31.1659 10.1708 31.1807 10.1471 31.2007 10.1285L34.463 7.15784C34.6135 7.02067 34.7217 6.84011 34.7741 6.63887C34.8265 6.43764 34.8207 6.22473 34.7574 6.02694ZM33.8895 6.47386L30.6272 9.44456C30.4882 9.57082 30.3848 9.73428 30.3283 9.91734C30.2717 10.1004 30.264 10.2961 30.3061 10.4834L31.2839 14.902C31.2911 14.9317 31.2895 14.963 31.2793 14.9917C31.2691 15.0204 31.2508 15.0452 31.2267 15.0628C31.205 15.081 31.1783 15.0915 31.1504 15.0927C31.1226 15.0939 31.0951 15.0858 31.072 15.0696L27.3757 12.7293C27.2182 12.6293 27.0373 12.5764 26.8529 12.5764C26.6685 12.5764 26.4876 12.6293 26.33 12.7293L22.6338 15.0696C22.6106 15.0858 22.5831 15.0939 22.5553 15.0927C22.5275 15.0915 22.5007 15.081 22.479 15.0628C22.455 15.0452 22.4366 15.0204 22.4264 14.9917C22.4162 14.963 22.4146 14.9317 22.4219 14.902L23.3996 10.4834C23.4417 10.2961 23.4341 10.1004 23.3775 9.91734C23.3209 9.73428 23.2175 9.57082 23.0785 9.44456L19.8162 6.47386C19.7939 6.45405 19.7779 6.42764 19.7702 6.39812C19.7626 6.3686 19.7638 6.33736 19.7735 6.30853C19.7808 6.27982 19.7967 6.25427 19.8187 6.23555C19.8408 6.21683 19.868 6.20591 19.8965 6.20435L24.1973 5.81631C24.3814 5.79993 24.5577 5.73127 24.7071 5.61775C24.8566 5.50424 24.9733 5.3502 25.0449 5.17234L26.7249 0.992986C26.7365 0.967046 26.7551 0.945114 26.7782 0.929751C26.8014 0.914388 26.8283 0.90623 26.8558 0.90623C26.8832 0.90623 26.9101 0.914388 26.9333 0.929751C26.9565 0.945114 26.975 0.967046 26.9867 0.992986L28.6609 5.17234C28.7322 5.34978 28.8485 5.50353 28.9974 5.61701C29.1462 5.73049 29.3219 5.7994 29.5055 5.81631L33.8064 6.20435C33.8348 6.20591 33.862 6.21683 33.8841 6.23555C33.9062 6.25427 33.922 6.27982 33.9293 6.30853C33.9394 6.33706 33.941 6.36812 33.9339 6.39762C33.9268 6.42712 33.9114 6.45369 33.8895 6.47386Z" fill="#121212" />
              <path d="M53.6548 6.02694C53.5951 5.82893 53.48 5.65411 53.3243 5.52495C53.1686 5.3958 52.9795 5.31822 52.7812 5.30219L48.4811 4.91415C48.4551 4.91148 48.4303 4.90151 48.4093 4.88529C48.3883 4.86908 48.3718 4.84722 48.3618 4.82205L46.6818 0.642693C46.604 0.452036 46.4742 0.289463 46.3086 0.175193C46.143 0.0609235 45.9488 0 45.7503 0C45.5518 0 45.3577 0.0609235 45.1921 0.175193C45.0264 0.289463 44.8967 0.452036 44.8189 0.642693L43.1389 4.82205C43.1288 4.84722 43.1124 4.86908 43.0914 4.88529C43.0704 4.90151 43.0456 4.91148 43.0195 4.91415L38.7194 5.30219C38.5212 5.31822 38.332 5.3958 38.1763 5.52495C38.0207 5.65411 37.9055 5.82893 37.8458 6.02694C37.7826 6.22522 37.777 6.43863 37.8299 6.64019C37.8828 6.84176 37.9918 7.02242 38.143 7.15935L41.4054 10.13C41.4254 10.1486 41.4402 10.1724 41.4483 10.1989C41.4565 10.2255 41.4576 10.2538 41.4517 10.281L40.471 14.6982C40.4253 14.9016 40.4383 15.1145 40.5085 15.3102C40.5786 15.5058 40.7028 15.6753 40.8652 15.7974C41.025 15.9205 41.2166 15.9908 41.4151 15.9992C41.6137 16.0075 41.81 15.9535 41.9789 15.8442L45.6751 13.5039C45.6968 13.4898 45.7219 13.4824 45.7474 13.4824C45.773 13.4824 45.798 13.4898 45.8198 13.5039L49.516 15.8442C49.6866 15.9532 49.8843 16.0071 50.0842 15.9989C50.2841 15.9908 50.4772 15.921 50.6391 15.7984C50.801 15.6758 50.9245 15.5059 50.994 15.3101C51.0636 15.1143 51.0759 14.9013 51.0296 14.6982L50.0519 10.2795C50.0459 10.2523 50.0471 10.224 50.0552 10.1974C50.0634 10.1708 50.0782 10.1471 50.0982 10.1285L53.3605 7.15784C53.511 7.02067 53.6192 6.84011 53.6716 6.63887C53.7239 6.43764 53.7181 6.22473 53.6548 6.02694ZM52.787 6.47386L49.5247 9.44456C49.3857 9.57082 49.2823 9.73428 49.2257 9.91734C49.1691 10.1004 49.1615 10.2961 49.2036 10.4834L50.1813 14.902C50.1886 14.9317 50.187 14.963 50.1768 14.9917C50.1666 15.0204 50.1482 15.0452 50.1242 15.0628C50.1025 15.081 50.0757 15.0915 50.0479 15.0927C50.0201 15.0939 49.9926 15.0858 49.9694 15.0696L46.2732 12.7293C46.1156 12.6293 45.9347 12.5764 45.7503 12.5764C45.5659 12.5764 45.385 12.6293 45.2275 12.7293L41.5312 15.0696C41.5081 15.0858 41.4806 15.0939 41.4528 15.0927C41.4249 15.0915 41.3982 15.081 41.3764 15.0628C41.3524 15.0452 41.3341 15.0204 41.3239 14.9917C41.3137 14.963 41.3121 14.9317 41.3193 14.902L42.2971 10.4834C42.3392 10.2961 42.3315 10.1004 42.2749 9.91734C42.2183 9.73428 42.115 9.57082 41.976 9.44456L38.7136 6.47386C38.6913 6.45405 38.6753 6.42764 38.6677 6.39812C38.6601 6.3686 38.6612 6.33736 38.671 6.30853C38.6783 6.27982 38.6941 6.25427 38.7162 6.23555C38.7383 6.21683 38.7655 6.20591 38.7939 6.20435L43.0948 5.81631C43.2789 5.79993 43.4552 5.73127 43.6046 5.61775C43.754 5.50424 43.8708 5.3502 43.9423 5.17234L45.6223 0.992986C45.634 0.967046 45.6525 0.945114 45.6757 0.929751C45.6989 0.914388 45.7258 0.90623 45.7532 0.90623C45.7807 0.90623 45.8076 0.914388 45.8307 0.929751C45.8539 0.945114 45.8724 0.967046 45.8841 0.992986L47.5583 5.17234C47.6296 5.34978 47.746 5.50353 47.8948 5.61701C48.0437 5.73049 48.2194 5.7994 48.403 5.81631L52.7038 6.20435C52.7323 6.20591 52.7595 6.21683 52.7816 6.23555C52.8036 6.25427 52.8195 6.27982 52.8268 6.30853C52.8369 6.33706 52.8385 6.36812 52.8314 6.39762C52.8243 6.42712 52.8088 6.45369 52.787 6.47386Z" fill="#121212" />
              <path d="M72.5513 6.02694C72.4916 5.82893 72.3765 5.65411 72.2208 5.52495C72.0651 5.3958 71.876 5.31822 71.6777 5.30219L67.3776 4.91415C67.3516 4.91149 67.3268 4.90151 67.3058 4.88529C67.2847 4.86908 67.2683 4.84722 67.2583 4.82205L65.5783 0.642693C65.5005 0.452036 65.3707 0.289463 65.2051 0.175193C65.0395 0.0609235 64.8453 0 64.6468 0C64.4483 0 64.2542 0.0609235 64.0885 0.175193C63.9229 0.289463 63.7931 0.452036 63.7153 0.642693L62.0354 4.82205C62.0253 4.84722 62.0089 4.86908 61.9879 4.88529C61.9669 4.90151 61.942 4.91149 61.916 4.91415L57.6159 5.30219C57.4177 5.31822 57.2285 5.3958 57.0728 5.52495C56.9171 5.65411 56.802 5.82893 56.7423 6.02694C56.679 6.22522 56.6735 6.43863 56.7264 6.64019C56.7793 6.84176 56.8883 7.02242 57.0395 7.15935L60.3019 10.13C60.3218 10.1486 60.3367 10.1724 60.3448 10.1989C60.353 10.2255 60.3541 10.2538 60.3481 10.281L59.3675 14.6982C59.3218 14.9016 59.3348 15.1145 59.405 15.3102C59.4751 15.5058 59.5992 15.6753 59.7616 15.7974C59.9215 15.9205 60.1131 15.9908 60.3116 15.9992C60.5101 16.0075 60.7065 15.9535 60.8754 15.8442L64.5716 13.5039C64.5933 13.4898 64.6184 13.4824 64.6439 13.4824C64.6695 13.4824 64.6945 13.4898 64.7162 13.5039L68.4125 15.8442C68.5831 15.9532 68.7808 16.0071 68.9807 15.9989C69.1806 15.9908 69.3737 15.921 69.5356 15.7984C69.6975 15.6758 69.821 15.5059 69.8905 15.3101C69.96 15.1143 69.9724 14.9013 69.9261 14.6982L68.9484 10.2795C68.9424 10.2523 68.9436 10.224 68.9517 10.1974C68.9598 10.1708 68.9747 10.1471 68.9947 10.1285L72.257 7.15784C72.4074 7.02067 72.5157 6.84011 72.5681 6.63887C72.6204 6.43764 72.6146 6.22473 72.5513 6.02694ZM71.6835 6.47386L68.4212 9.44456C68.2822 9.57082 68.1788 9.73428 68.1222 9.91734C68.0656 10.1004 68.058 10.2961 68.1001 10.4834L69.0778 14.902C69.0851 14.9317 69.0835 14.963 69.0733 14.9917C69.063 15.0204 69.0447 15.0452 69.0207 15.0628C68.9989 15.081 68.9722 15.0915 68.9444 15.0927C68.9165 15.0939 68.8891 15.0858 68.8659 15.0696L65.1697 12.7293C65.0121 12.6293 64.8312 12.5764 64.6468 12.5764C64.4624 12.5764 64.2815 12.6293 64.1239 12.7293L60.4277 15.0696C60.4046 15.0858 60.3771 15.0939 60.3492 15.0927C60.3214 15.0915 60.2947 15.081 60.2729 15.0628C60.2489 15.0452 60.2306 15.0204 60.2204 14.9917C60.2102 14.963 60.2086 14.9317 60.2158 14.902L61.1936 10.4834C61.2357 10.2961 61.228 10.1004 61.1714 9.91734C61.1148 9.73428 61.0115 9.57082 60.8725 9.44456L57.6101 6.47386C57.5878 6.45406 57.5718 6.42764 57.5642 6.39812C57.5566 6.3686 57.5577 6.33736 57.5675 6.30853C57.5748 6.27982 57.5906 6.25427 57.6127 6.23555C57.6348 6.21683 57.662 6.20591 57.6904 6.20435L61.9912 5.81631C62.1754 5.79993 62.3517 5.73127 62.5011 5.61775C62.6505 5.50424 62.7673 5.35021 62.8388 5.17234L64.5188 0.992986C64.5305 0.967046 64.549 0.945114 64.5722 0.929751C64.5954 0.914388 64.6222 0.90623 64.6497 0.90623C64.6772 0.90623 64.7041 0.914388 64.7272 0.929751C64.7504 0.945114 64.7689 0.967046 64.7806 0.992986L66.4548 5.17234C66.5261 5.34978 66.6425 5.50353 66.7913 5.61701C66.9402 5.73049 67.1159 5.7994 67.2995 5.81631L71.6003 6.20435C71.6287 6.20591 71.6559 6.21683 71.678 6.23555C71.7001 6.25427 71.716 6.27982 71.7233 6.30853C71.7334 6.33706 71.735 6.36812 71.7279 6.39762C71.7208 6.42712 71.7053 6.45369 71.6835 6.47386Z" fill="#121212" />
              <path d="M91.4478 6.02694C91.3881 5.82893 91.273 5.65411 91.1173 5.52495C90.9616 5.3958 90.7725 5.31822 90.5742 5.30219L86.2741 4.91415C86.2481 4.91148 86.2232 4.90151 86.2022 4.88529C86.1812 4.86908 86.1648 4.84722 86.1548 4.82205L84.4748 0.642693C84.397 0.452036 84.2672 0.289463 84.1016 0.175193C83.936 0.0609235 83.7418 0 83.5433 0C83.3448 0 83.1506 0.0609235 82.985 0.175193C82.8194 0.289463 82.6896 0.452036 82.6118 0.642693L80.9318 4.82205C80.9218 4.84722 80.9054 4.86908 80.8844 4.88529C80.8633 4.90151 80.8385 4.91148 80.8125 4.91415L76.5124 5.30219C76.3141 5.31822 76.125 5.3958 75.9693 5.52495C75.8136 5.65411 75.6985 5.82893 75.6388 6.02694C75.5755 6.22522 75.57 6.43863 75.6229 6.64019C75.6758 6.84176 75.7848 7.02242 75.936 7.15935L79.1983 10.13C79.2183 10.1486 79.2332 10.1724 79.2413 10.1989C79.2494 10.2255 79.2506 10.2538 79.2446 10.281L78.264 14.6982C78.2183 14.9016 78.2313 15.1145 78.3015 15.3102C78.3716 15.5058 78.4957 15.6753 78.6581 15.7974C78.818 15.9205 79.0096 15.9908 79.2081 15.9992C79.4066 16.0075 79.603 15.9535 79.7718 15.8442L83.4681 13.5039C83.4898 13.4898 83.5149 13.4824 83.5404 13.4824C83.566 13.4824 83.591 13.4898 83.6127 13.5039L87.309 15.8442C87.4796 15.9532 87.6773 16.0071 87.8772 15.9989C88.0771 15.9908 88.2701 15.921 88.4321 15.7984C88.594 15.6758 88.7175 15.5059 88.787 15.3101C88.8565 15.1143 88.8689 14.9013 88.8226 14.6982L87.8449 10.2795C87.8389 10.2523 87.84 10.224 87.8482 10.1974C87.8563 10.1708 87.8712 10.1471 87.8911 10.1285L91.1535 7.15784C91.3039 7.02067 91.4122 6.84011 91.4645 6.63887C91.5169 6.43764 91.5111 6.22473 91.4478 6.02694ZM90.58 6.47386L87.3176 9.44456C87.1786 9.57082 87.0753 9.73428 87.0187 9.91734C86.9621 10.1004 86.9545 10.2961 86.9966 10.4834L87.9743 14.902C87.9815 14.9317 87.9799 14.963 87.9697 14.9917C87.9595 15.0204 87.9412 15.0452 87.9172 15.0628C87.8954 15.081 87.8687 15.0915 87.8409 15.0927C87.813 15.0939 87.7855 15.0858 87.7624 15.0696L84.0662 12.7293C83.9086 12.6293 83.7277 12.5764 83.5433 12.5764C83.3589 12.5764 83.178 12.6293 83.0204 12.7293L79.3242 15.0696C79.3011 15.0858 79.2736 15.0939 79.2457 15.0927C79.2179 15.0915 79.1912 15.081 79.1694 15.0628C79.1454 15.0452 79.1271 15.0204 79.1169 14.9917C79.1067 14.963 79.1051 14.9317 79.1123 14.902L80.09 10.4834C80.1321 10.2961 80.1245 10.1004 80.0679 9.91734C80.0113 9.73428 79.908 9.57082 79.7689 9.44456L76.5066 6.47386C76.4843 6.45405 76.4683 6.42764 76.4607 6.39812C76.453 6.3686 76.4542 6.33736 76.4639 6.30853C76.4713 6.27982 76.4871 6.25427 76.5092 6.23555C76.5313 6.21683 76.5585 6.20591 76.5869 6.20435L80.8877 5.81631C81.0718 5.79993 81.2482 5.73127 81.3976 5.61775C81.547 5.50424 81.6638 5.3502 81.7353 5.17234L83.4153 0.992986C83.427 0.967046 83.4455 0.945114 83.4687 0.929751C83.4918 0.914388 83.5187 0.90623 83.5462 0.90623C83.5736 0.90623 83.6005 0.914388 83.6237 0.929751C83.6469 0.945114 83.6654 0.967046 83.6771 0.992986L85.3513 5.17234C85.4226 5.34978 85.5389 5.50353 85.6878 5.61701C85.8367 5.73049 86.0124 5.7994 86.196 5.81631L90.4968 6.20435C90.5252 6.20591 90.5524 6.21683 90.5745 6.23555C90.5966 6.25427 90.6125 6.27982 90.6198 6.30853C90.6298 6.33706 90.6315 6.36812 90.6244 6.39762C90.6173 6.42712 90.6018 6.45369 90.58 6.47386Z" fill="#121212" />
              <path d="M10.5 5.5L8 0.5L6 5L0.5 6L4 10.5L3 15.5L8 13L12 15.5L13 15L12 10L15.5 6.5L15 6L10.5 5.5Z" fill="#121212" />
              <path d="M29.5 5.5L27 0L25 5L19 6L23 10.5L22 15.5L27 13L31 15.5L32 15L31 10L34.5 6.5L34 6L29.5 5.5Z" fill="#121212" />
              <path d="M48.5 5.5L46 0L44 5L38 6L42 10.5L41 15.5L46 13L50 15.5L51 15L50 10L53.5 6.5L53 6L48.5 5.5Z" fill="#121212" />
              <path d="M67.5 5.5L64.5 0L62.5 5L57 6L61 10.5L60 15.5L65 13L69 15.5L70 15L69 10L72.5 6.5L72 6L67.5 5.5Z" fill="#121212" />
              <path d="M79 15.5L84 13L83.5 0.5L81 5L76 6L80 10.5L79 15.5Z" fill="#121212" />
            </svg>
            <span>( 20 Reviews )</span>
          </div>
          <div className="refund-policy">
            15 Days Free Return Policy <br />
            Read More about <a href="">return and refund policy</a>
          </div>
          <hr />
          <div className="Product-CareGuide">
            Care Guide
            <ul>
              <li>Line dry</li>
              <li>Only non-chlorine bleach when needed</li>
              <li>Medium iron</li>
              <li>Machine wash at 30°</li>
              <li>Can be dry cleaned</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="Other-Section">
        Our Other Products 
      </div>
      <div className="Other-Products-Section d-flex"> 
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
        <ProductDisplay />
      </div>
      <Footer />
    </div>
  )
}
