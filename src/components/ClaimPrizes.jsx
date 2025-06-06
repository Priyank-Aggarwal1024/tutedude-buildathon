import React from "react";
import "../styles/claimPrizes.css";
function ClaimPrizes({ navigateRegister }) {
  return (
    <section className="claim-prizes">
      <div className="w-40 w-40-1"></div>
      <div className="w-20"></div>
      <div className="w-10"></div>
      <div className="w-40 w-40-2"></div>
      <div className="w-40 w-40-3"></div>
      <div className="sun">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 80 80"
          fill="none"
        >
          <g clipPath="url(#clip0_561_1955)">
            <path
              d="M31.7238 10.5098L36.9372 29.9663M60.6415 3.15233L44.6531 30.845M49.2721 37.0879L68.7286 31.8745M76.0861 60.7922L48.3934 44.8038M42.1505 49.4228L47.3639 68.8793M18.4462 76.2368L34.4346 48.5441M10.3591 47.5146L29.8156 42.3012M3.00162 18.5969L30.6943 34.5853"
              stroke="#800080"
              strokeOpacity="0.87"
              strokeWidth="2"
            />
          </g>
          <defs>
            <clipPath id="clip0_561_1955">
              <rect
                width="64.4571"
                height="64.4571"
                fill="white"
                transform="translate(0.0703125 16.9053) rotate(-15)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="star1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <path
            d="M45.0542 19.2017C30.253 21.6362 21.6352 15.4529 19.2007 0.651818C21.6352 15.4529 15.4519 24.0708 0.650823 26.5053C15.4519 24.0708 24.0698 30.2541 26.5043 45.0552C24.0698 30.254 30.253 21.6362 45.0542 19.2017Z"
            stroke="#800080"
            strokeOpacity="0.87"
            strokeWidth="1.67308"
          />
        </svg>
      </div>
      <div className="star2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <path
            d="M45.0542 19.2017C30.253 21.6362 21.6352 15.4529 19.2007 0.651818C21.6352 15.4529 15.4519 24.0708 0.650823 26.5053C15.4519 24.0708 24.0698 30.2541 26.5043 45.0552C24.0698 30.254 30.253 21.6362 45.0542 19.2017Z"
            stroke="#800080"
            strokeOpacity="0.87"
            strokeWidth="1.67308"
          />
        </svg>
      </div>
      <div className="star3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <path
            d="M45.0542 19.2017C30.253 21.6362 21.6352 15.4529 19.2007 0.651818C21.6352 15.4529 15.4519 24.0708 0.650823 26.5053C15.4519 24.0708 24.0698 30.2541 26.5043 45.0552C24.0698 30.254 30.253 21.6362 45.0542 19.2017Z"
            stroke="#800080"
            strokeOpacity="0.87"
            strokeWidth="1.67308"
          />
        </svg>
      </div>
      <div className="claim-left-design  claim-left-design-horizontal ">
        {Array(6)
          .fill(1)
          .map((item, idx) => (
            <div key={idx}></div>
          ))}
      </div>
      <div className="claim-left-design  claim-left-design-vertical ">
        {Array(6)
          .fill(1)
          .map((item, idx) => (
            <div key={idx}></div>
          ))}
      </div>
      <div className="claim-right-design  claim-right-design-horizontal ">
        {Array(6)
          .fill(1)
          .map((item, idx) => (
            <div key={idx}></div>
          ))}
      </div>
      <div className="claim-right-design  claim-right-design-vertical ">
        {Array(6)
          .fill(1)
          .map((item, idx) => (
            <div key={idx}></div>
          ))}
      </div>

      <div className="claim-top">
        <div className="claim-heading">Claim the Grand Prize of ₹10,000!</div>
        <div className="claim-para-outer">
          <div className="claim-para">
            The Top 1st team will get cash prize of ₹10,000/-{" "}
          </div>
          <div className="claim-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="130"
              viewBox="0 0 130 130"
              fill="none"
            >
              <path
                d="M93.0922 67.6656C93.3188 74.1002 92.4941 80.5351 90.6504 86.717C90.2833 87.8291 89.9686 88.9596 89.6367 90.0722C89.2913 91.1977 88.8797 92.3023 88.4039 93.38C86.6478 97.0505 84.5204 100.533 82.0551 103.773C79.666 106.981 76.9635 109.944 73.9879 112.618C71.4051 115.011 68.6671 117.23 65.7919 119.261C63.9676 120.585 62.0247 121.737 59.9883 122.701C57.9162 123.598 55.7491 124.253 53.53 124.653C52.1517 124.896 52.2076 124.343 53.0401 123.282C53.5786 122.606 54.1597 121.965 54.78 121.363C55.501 120.497 56.3148 119.713 57.2066 119.024C57.593 118.651 58.0222 118.341 58.4423 118.04C58.8625 117.738 59.3167 117.49 59.7372 117.171C60.5607 116.532 61.4006 115.946 62.2154 115.299C63.0303 114.651 63.8103 113.985 64.5907 113.302C65.3711 112.619 66.1343 111.917 66.8286 111.145C68.3205 109.707 69.7521 108.206 71.1587 106.643C72.5653 105.081 74.0576 103.625 75.4027 102.053C77.0618 100.098 78.4927 97.9615 79.6673 95.6844C80.816 93.4043 81.8161 91.0531 82.6612 88.6456C84.5091 83.3043 85.4447 77.6953 85.4286 72.0545C85.4283 70.3038 85.3395 68.5548 85.1625 66.8141C85.0668 65.9413 85.0153 65.0605 84.8754 64.1959L84.482 61.6113C83.5062 56.3734 81.7041 51.3287 79.143 46.6654C77.0687 43.1991 74.5343 40.0314 71.6083 37.2481C71.0595 36.5708 70.3306 36.0845 69.7373 35.433C69.1439 34.7815 68.758 34.3091 68.4065 33.8725C68.1129 33.4492 67.8938 32.9787 67.7586 32.4809C67.5283 31.6636 67.5409 30.7955 67.7946 29.9821C67.8772 29.5916 67.9795 29.2055 68.101 28.8251C68.3333 28.2566 68.9009 28.054 69.7201 28.0225C70.9007 28.0632 72.062 28.3226 73.1452 28.7877C74.0403 29.3206 74.8812 29.9231 75.7662 30.5174L77.0754 31.4439L78.2943 32.4746C79.1243 33.1556 79.9055 33.8939 80.6322 34.6841C81.3727 35.4522 82.0408 36.3073 82.7356 37.154C83.4304 38.0006 84.0185 38.8985 84.6683 39.7885C85.2849 40.6797 85.8555 41.6019 86.3782 42.5516C86.9389 43.493 87.4015 44.4946 87.9087 45.4704C88.4159 46.4462 88.7542 47.4986 89.1452 48.5519C91.5242 54.6482 92.9219 61.0882 93.2865 67.6334L93.0922 67.6656Z"
                fill="#992E9D"
              />
              <path
                d="M64.6117 19.9711C63.5107 19.9892 62.4249 20.2427 61.4272 20.7145C60.6594 21.1146 60.0718 21.792 59.7846 22.608C59.5749 23.4979 59.4989 24.4133 59.5592 25.324C59.4784 27.3089 59.6758 29.2937 60.1456 31.2206C60.5837 33.3658 61.1446 35.5305 61.7767 37.6612C62.3787 39.5396 63.1221 41.3691 64.0005 43.1339L65.6452 46.4769C66.1547 47.5204 66.6077 48.5908 67.0023 49.6835C67.0984 50.125 66.522 51.1458 65.1015 51.309C63.4791 51.4629 61.8888 50.8141 60.8435 49.5718C60.0449 48.4434 59.309 47.2716 58.6391 46.0619C58.0256 44.8498 57.4623 43.6179 56.9493 42.3662C55.9053 39.8551 55.1007 37.2498 54.546 34.5849C54.2108 32.9781 53.7348 31.3691 53.2697 29.6635C52.9976 28.7381 52.7798 27.7974 52.6172 26.8461C52.5449 26.3617 52.5024 25.8732 52.4902 25.3832C52.4568 24.885 52.4675 24.3845 52.5222 23.8876C52.6598 21.4791 53.509 19.1612 54.9623 17.2275C56.4832 15.3615 58.5606 14.0296 60.8881 13.4281C63.3074 12.809 65.8116 12.6033 68.2945 12.8196C71.7534 13.1454 75.1805 13.7362 78.5458 14.5866C81.1123 15.1627 83.7295 15.4314 86.3128 16.0429C86.8861 16.1615 87.4479 16.3291 87.992 16.5438C89.998 17.4017 90.4382 18.2181 90.0833 19.9904C90.0221 20.3926 89.9372 20.791 89.8289 21.1834C89.3352 22.467 88.0232 23.246 86.664 23.0624C85.5464 23.0618 84.4307 22.986 83.3242 22.8354C82.2366 22.6604 81.1856 22.4155 80.0718 22.2313C77.9159 21.7936 75.7362 21.241 73.6492 20.8747C70.729 20.2087 67.7259 19.9643 64.7311 20.1489L64.6117 19.9711Z"
                fill="#992E9D"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="claim-bottom">
        <div
          className="claim-reserve button-animation-parent"
          onClick={navigateRegister}
        >
          Reserve your spot now!
          <div className="button-animation-div"></div>
        </div>
      </div>
    </section>
  );
}

export default ClaimPrizes;
