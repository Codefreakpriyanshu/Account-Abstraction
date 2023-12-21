import React from 'react'
import "./CSS/components.css";

export default function FliperbLogo() {
    return (
        <div className = "container">
            <div className="fliperb-icon-footer">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 200 200" fill="none">
                    <path d="M0 80C0 42.2876 0 23.4315 11.7157 11.7157C23.4315 0 42.2876 0 80 0H120C157.712 0 176.569 0 188.284 11.7157C200 23.4315 200 42.2876 200 80V120C200 157.712 200 176.569 188.284 188.284C176.569 200 157.712 200 120 200H80C42.2876 200 23.4315 200 11.7157 188.284C0 176.569 0 157.712 0 120V80Z" fill="#ADB5BD" />
                    <path d="M132.669 137.697C130.665 138.642 128.696 139.554 126.744 140.502C126.278 140.729 126.074 140.689 125.843 140.183C123.458 134.951 121.077 129.717 118.628 124.514C117.253 121.595 115.346 119.077 112.579 117.308C110.328 115.869 107.831 115.188 105.202 114.901C104.02 114.772 102.835 114.795 101.651 114.754C101.046 114.732 100.858 114.936 100.86 115.547C100.877 123.273 100.87 130.999 100.869 138.725C100.869 138.846 100.854 138.969 100.872 139.087C100.959 139.666 100.676 139.847 100.147 139.785C100.028 139.771 99.906 139.783 99.7854 139.783C89.0315 139.782 78.2777 139.782 67.5238 139.781C66.6681 139.781 66.667 139.78 66.667 138.968C66.6667 120.619 66.6665 102.27 66.6668 83.9206C66.6668 82.8871 66.6688 82.8844 67.6855 82.8842C73.374 82.883 79.0625 82.884 84.751 82.8798C84.8112 82.8798 84.8723 82.8839 84.9337 82.8876C85.2692 82.908 85.391 82.6158 85.0929 82.4607C80.4099 80.0247 77.8669 76.0953 77.1443 70.9395C76.7568 68.1745 77.0533 65.4783 78.3576 62.96C79.4623 60.8272 81.1605 59.5095 83.61 59.3448C84.8219 59.2633 85.9588 59.6232 87.0108 60.2109C89.1727 61.4188 90.7427 63.2439 92.1182 65.2483C94.1197 68.1648 95.6027 71.3524 96.9177 74.6238C97.1167 75.1187 97.6405 75.1714 97.818 74.6685C97.836 74.6176 97.8542 74.5671 97.8739 74.518C99.1931 71.2242 100.698 68.0248 102.726 65.0996C103.888 63.423 105.21 61.893 106.909 60.7171C110.854 57.9863 115.109 59.4756 116.734 63.7257C118.811 69.1569 117.787 74.1938 114.301 78.7669C113.69 79.569 112.978 80.2643 112.197 80.8987C111.639 81.3521 111.901 82.3016 112.618 82.3556C116.583 82.6539 120.424 83.4241 123.882 85.5126C127.994 87.9954 130.261 91.612 130.56 96.4528C130.737 99.3143 130.282 102.028 128.865 104.531C127.19 107.488 124.579 109.379 121.554 110.76C120.402 111.286 119.215 111.725 118.001 112.09C117.983 112.095 117.964 112.1 117.946 112.105C117.603 112.192 117.553 112.552 117.871 112.706C120.945 114.195 123.17 116.565 124.909 119.452C126.772 122.544 128.152 125.874 129.682 129.13C130.845 131.605 131.974 134.095 133.118 136.578C133.457 137.312 133.457 137.312 132.669 137.697ZM120.886 103.853C121.858 102.581 122.456 101.166 122.658 99.5629C123.094 96.1131 121.974 93.3482 119.106 91.3543C116.698 89.6801 113.943 89.0732 111.075 88.9576C107.86 88.828 104.647 89.0014 101.436 89.1795C100.985 89.2045 100.865 89.3821 100.866 89.8099C100.876 95.665 100.877 101.52 100.863 107.375C100.862 107.935 101.077 108.109 101.614 108.105C104.187 108.09 106.76 108.097 109.333 108.104C110.68 108.107 112.024 108.061 113.353 107.824C116.253 107.305 118.875 106.25 120.886 103.853ZM93.0683 115.894C93.0682 115.371 93.0695 114.848 93.0679 114.325C93.0652 113.46 93.0644 113.457 92.1953 113.457C86.6069 113.455 81.0185 113.455 75.4301 113.454C74.5374 113.454 74.5394 113.456 74.5394 114.371C74.5398 120.287 74.5396 126.202 74.5388 132.118C74.5387 132.967 74.5368 132.97 75.3607 132.97C80.9491 132.97 86.5374 132.97 92.1258 132.968C93.0343 132.968 93.0682 132.932 93.0683 132.011C93.0687 126.679 93.0683 121.347 93.0683 115.894ZM83.7618 106.788C86.576 106.787 89.3901 106.787 92.2042 106.782C92.9935 106.781 93.0661 106.711 93.0665 105.918C93.0691 100.787 93.0685 95.6567 93.0664 90.5261C93.0661 89.7978 92.9773 89.6996 92.2266 89.6918C91.3627 89.6827 90.4986 89.7141 89.6345 89.7129C84.891 89.706 80.1474 89.6919 75.4038 89.6874C74.6104 89.6867 74.5413 89.7709 74.5411 90.5489C74.5404 95.6795 74.5402 100.81 74.5395 105.941C74.5394 106.768 74.5511 106.784 75.3796 106.785C78.1335 106.788 80.8873 106.788 83.7618 106.788ZM106.379 67.5964C104.234 70.7419 102.707 74.1783 101.35 77.7209C100.935 78.8043 101.547 79.7836 102.705 79.7101C105.57 79.5283 108.183 78.6885 110.278 76.6118C112.143 74.7626 113.082 72.4737 113.324 69.8951C113.478 68.255 113.318 66.6349 112.557 65.1368C111.832 63.7107 110.9 63.4637 109.56 64.307C108.257 65.1261 107.326 66.3108 106.379 67.5964ZM89.2685 79.293C90.6143 79.6624 92.0011 79.7172 93.3807 79.8114C94.013 79.8546 94.1236 79.7038 93.9118 79.1149C92.5152 75.2315 90.9085 71.4447 88.6244 67.9855C87.7137 66.6063 86.697 65.307 85.3031 64.3687C83.9102 63.431 82.9264 63.6897 82.1723 65.1823C81.3215 66.8664 81.2112 68.6829 81.495 70.4812C82.207 74.9918 84.7232 77.9931 89.2685 79.293Z" fill="#FFFAFF" />
                </svg>
            </div>
        </div>
    )
}