import { useEffect } from "react";
import './snoball.css'
import KUTE from 'kute.js'
import { useRef } from 'react';








export default function SnoBall() {
  
    const svg1Ref = useRef(null);
    const svg2Ref = useRef(null);
  
    useEffect(() => {
        console.log('useEffect called');
        const svg1Path = document.querySelector("#blob1 path");
        const svg2Path = document.querySelector("#blob2 path");
      
        if (svg1Path && svg2Path) {
          KUTE.fromTo(svg1Path, { path: svg2Path }, { duration: 20000, autoStart: true }).repeat(Infinity).start();
        }
      }, []);
      
      

    return (
      <div className="snoballContainer">
        

        <div className="snoballText">
            <p>PAGE UNDER CONSTRUCTION</p>
            <svg id="visual" viewBox="0 0 1903 680" width="1903" height="680" xmlns="http://www.w3.org/2000/svg"
    version="1.1">
    <rect x="0" y="0" width="1903" height="680" fill="#212121"></rect>
    <defs>
        <linearGradient id="grad1_0" x1="64.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#ff5c5d" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#ff5c5d" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad1_1" x1="64.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#ff5c5d" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#cf5250" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad1_2" x1="64.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#a14744" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#cf5250" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad1_3" x1="64.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#a14744" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#753b38" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad1_4" x1="64.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#4a2f2c" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#753b38" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad1_5" x1="64.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#4a2f2c" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#212121" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad2_0" x1="0%" y1="0%" x2="35.7%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#ff5c5d" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#ff5c5d" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad2_1" x1="0%" y1="0%" x2="35.7%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#cf5250" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#ff5c5d" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad2_2" x1="0%" y1="0%" x2="35.7%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#cf5250" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#a14744" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad2_3" x1="0%" y1="0%" x2="35.7%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#753b38" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#a14744" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad2_4" x1="0%" y1="0%" x2="35.7%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#753b38" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#4a2f2c" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <defs>
        <linearGradient id="grad2_5" x1="0%" y1="0%" x2="35.7%" y2="100%">
            <stop offset="-5.970588235294112%" stopColor="#212121" stopOpacity="1"></stop>
            <stop offset="105.97058823529412%" stopColor="#4a2f2c" stopOpacity="1"></stop>
        </linearGradient>
    </defs>
    <g transform="translate(1903, 0)">
        <path id="blob1" ref={svg1Ref}
            d="M0 442C-49.5 388.7 -99.1 335.4 -118.6 286.4C-138.2 237.4 -127.7 192.6 -181.7 181.7C-235.7 170.8 -354.2 193.8 -408.4 169.1C-462.5 144.5 -452.2 72.3 -442 0L0 0Z"
            fill="#362827"></path>
        <path id="blob2"
            d="M0 368.3C-41.3 323.9 -82.6 279.5 -98.9 238.7C-115.1 197.8 -106.4 160.5 -151.4 151.4C-196.5 142.4 -295.2 161.5 -340.3 141C-385.4 120.4 -376.9 60.2 -368.3 0L0 0Z"
            fill="#5f3532"></path>
        <path id="blob3"
            d="M0 294.7C-33 259.1 -66.1 223.6 -79.1 190.9C-92.1 158.3 -85.1 128.4 -121.2 121.2C-157.2 113.9 -236.2 129.2 -272.2 112.8C-308.3 96.3 -301.5 48.2 -294.7 0L0 0Z"
            fill="#8a413e"></path>
        <path id="blob4"
            d="M0 221C-24.8 194.4 -49.5 167.7 -59.3 143.2C-69.1 118.7 -63.9 96.3 -90.9 90.9C-117.9 85.4 -177.1 96.9 -204.2 84.6C-231.2 72.3 -226.1 36.1 -221 0L0 0Z"
            fill="#b84c4a"></path>
        <path id="blob5"
            d="M0 147.3C-16.5 129.6 -33 111.8 -39.5 95.5C-46.1 79.1 -42.6 64.2 -60.6 60.6C-78.6 56.9 -118.1 64.6 -136.1 56.4C-154.2 48.2 -150.7 24.1 -147.3 0L0 0Z"
            fill="#e75757"></path>
        <path id="blob6"
            d="M0 73.7C-8.3 64.8 -16.5 55.9 -19.8 47.7C-23 39.6 -21.3 32.1 -30.3 30.3C-39.3 28.5 -59 32.3 -68.1 28.2C-77.1 24.1 -75.4 12 -73.7 0L0 0Z"
            fill="#ff5c5d"></path>
    </g>
    <g transform="translate(0, 680)">
        <path id="blob7"
            d="M0 -442C67.9 -437.8 135.9 -433.7 159.2 -384.3C182.5 -335 161.2 -240.4 205.1 -205.1C248.9 -169.7 358 -193.5 408.4 -169.1C458.7 -144.8 450.4 -72.4 442 0L0 0Z"
            fill="#362827"></path>
        <path id="blob8"
            d="M0 -368.3C56.6 -364.9 113.2 -361.4 132.7 -320.3C152.1 -279.2 134.3 -200.4 170.9 -170.9C207.4 -141.4 298.3 -161.2 340.3 -141C382.3 -120.7 375.3 -60.3 368.3 0L0 0Z"
            fill="#5f3532"></path>
        <path id="blob9"
            d="M0 -294.7C45.3 -291.9 90.6 -289.1 106.1 -256.2C121.7 -223.3 107.5 -160.3 136.7 -136.7C166 -113.1 238.7 -129 272.2 -112.8C305.8 -96.6 300.2 -48.3 294.7 0L0 0Z"
            fill="#8a413e"></path>
        <path id="blob10"
            d="M0 -221C34 -218.9 67.9 -216.8 79.6 -192.2C91.3 -167.5 80.6 -120.2 102.5 -102.5C124.5 -84.8 179 -96.7 204.2 -84.6C229.4 -72.4 225.2 -36.2 221 0L0 0Z"
            fill="#b84c4a"></path>
        <path id="blob11"
            d="M0 -147.3C22.6 -145.9 45.3 -144.6 53.1 -128.1C60.8 -111.7 53.7 -80.1 68.4 -68.4C83 -56.6 119.3 -64.5 136.1 -56.4C152.9 -48.3 150.1 -24.1 147.3 0L0 0Z"
            fill="#e75757"></path>
        <path id="blob12"
            d="M0 -73.7C11.3 -73 22.6 -72.3 26.5 -64.1C30.4 -55.8 26.9 -40.1 34.2 -34.2C41.5 -28.3 59.7 -32.2 68.1 -28.2C76.5 -24.1 75.1 -12.1 73.7 0L0 0Z"
            fill="#ff5c5d"></path>
    </g>

    {/* <g transform="translate(1903, 0)">
        <path id="blob1" ref={svg2Ref}
            d="M0 442C-56.9 435.9 -113.8 429.9 -169.1 408.4C-224.5 386.8 -278.3 349.8 -300.5 300.5C-322.7 251.2 -313.4 189.5 -331.7 137.4C-350 85.2 -396 42.6 -442 0L0 0Z"
            fill="#362827"></path>
        <path id="blob2"
            d="M0 368.3C-47.4 363.3 -94.8 358.2 -141 340.3C-187.1 322.4 -231.9 291.5 -250.4 250.4C-268.9 209.3 -261.1 157.9 -276.4 114.5C-291.7 71 -330 35.5 -368.3 0L0 0Z"
            fill="#5f3532"></path>
        <path id="blob3"
            d="M0 294.7C-37.9 290.6 -75.9 286.6 -112.8 272.2C-149.7 257.9 -185.5 233.2 -200.3 200.3C-215.2 167.5 -208.9 126.4 -221.1 91.6C-233.3 56.8 -264 28.4 -294.7 0L0 0Z"
            fill="#8a413e"></path>
        <path id="blob4"
            d="M0 221C-28.4 218 -56.9 214.9 -84.6 204.2C-112.2 193.4 -139.2 174.9 -150.3 150.3C-161.4 125.6 -156.7 94.8 -165.8 68.7C-175 42.6 -198 21.3 -221 0L0 0Z"
            fill="#b84c4a"></path>
        <path id="blob5"
            d="M0 147.3C-19 145.3 -37.9 143.3 -56.4 136.1C-74.8 128.9 -92.8 116.6 -100.2 100.2C-107.6 83.7 -104.5 63.2 -110.6 45.8C-116.7 28.4 -132 14.2 -147.3 0L0 0Z"
            fill="#e75757"></path>
        <path id="blob6"
            d="M0 73.7C-9.5 72.7 -19 71.6 -28.2 68.1C-37.4 64.5 -46.4 58.3 -50.1 50.1C-53.8 41.9 -52.2 31.6 -55.3 22.9C-58.3 14.2 -66 7.1 -73.7 0L0 0Z"
            fill="#ff5c5d"></path>
    </g>

    
    <g transform="translate(0, 680)">
        <path id="blob7"
            d="M0 -442C11.3 -326.2 22.5 -210.5 85.3 -206C148.1 -201.6 262.4 -308.4 312.5 -312.5C362.6 -316.7 348.5 -218.1 359.4 -148.9C370.3 -79.7 406.1 -39.8 442 0L0 0Z"
            fill="#362827"></path>
        <path id="blob8"
            d="M0 -368.3C9.4 -271.9 18.8 -175.4 71.1 -171.7C123.4 -168 218.7 -257 260.5 -260.5C302.2 -263.9 290.4 -181.7 299.5 -124.1C308.6 -66.4 338.4 -33.2 368.3 0L0 0Z"
            fill="#5f3532"></path>
        <path id="blob9"
            d="M0 -294.7C7.5 -217.5 15 -140.3 56.9 -137.4C98.8 -134.4 175 -205.6 208.4 -208.4C241.8 -211.1 232.3 -145.4 239.6 -99.2C246.8 -53.1 270.8 -26.6 294.7 0L0 0Z"
            fill="#8a413e"></path>
        <path id="blob10"
            d="M0 -221C5.6 -163.1 11.3 -105.2 42.7 -103C74.1 -100.8 131.2 -154.2 156.3 -156.3C181.3 -158.3 174.3 -109 179.7 -74.4C185.1 -39.8 203.1 -19.9 221 0L0 0Z"
            fill="#b84c4a"></path>
        <path id="blob11"
            d="M0 -147.3C3.8 -108.7 7.5 -70.2 28.4 -68.7C49.4 -67.2 87.5 -102.8 104.2 -104.2C120.9 -105.6 116.2 -72.7 119.8 -49.6C123.4 -26.6 135.4 -13.3 147.3 0L0 0Z"
            fill="#e75757"></path>
        <path id="blob12"
            d="M0 -73.7C1.9 -54.4 3.8 -35.1 14.2 -34.3C24.7 -33.6 43.7 -51.4 52.1 -52.1C60.4 -52.8 58.1 -36.3 59.9 -24.8C61.7 -13.3 67.7 -6.6 73.7 0L0 0Z"
            fill="#ff5c5d"></path>
    </g> */}
</svg>

        </div>
        
      </div>
        
        
        )

    }