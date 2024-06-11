import React from "react";
import welcomeone from "../../../assets/images/welcomeone.png";
import { AiOutlineDown } from "react-icons/ai";
import styled from "styled-components";

// import welcometwo from "../../../assets/images/welcometwo.png";
// import welcomethree from "../../../assets/images/welcomethree.png";
// import welcomefour from "../../../assets/images/welcomefour.png";

export default function WelcomeSection() {
  return (
    <div className="flex justify-center mb-20 px-16">
      <div
        className="bg-[#E8FFDE]  rounded-md mb-5 w-[100%] md:p-10 p-4 gap-16 "
        
      >
        <div>
          <p className="font-bold text-[20px] mb-3">Welcome!</p>
          <p className="text-[#757575] text-[13px]">
            Book your appointment in a few simple steps. Choose a service, pick
            your date and time, and fill in your details. see you soon!
          </p>
        </div>
        <div className="mt-6 flex flex-row gap-4">
          {/* <div className="bg-white p-4 rounded-md"> 
              <div style={{display: "grid",
                placeItems: "center"
              }}>
                <div className="flex">

                <figure>
                    <img src={welcomeone} alt=""  width={25}/>
                </figure>
                <div className="ml-4 pl-4 border-l-2">
                    <p>Discovery call</p>
                    <p>(30 mins)</p>
                </div>
                </div>
          
              </div>
             
            </div> */}
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="flex bg-white rounded gap-5 p-2">
              <div className="flex align-center gap-4 ">
                <figure>
                  <img src={welcomeone} alt="" width={25} />
                </figure>
                <div className="pl-4 border-l-2">
                  <p>Discovery call</p>
                  <p>(30 mins)</p>
                </div>
              </div>
            </div>
            <div className="flex relative  bg-white rounded gap-5 p-2">
              <div className="flex align-center gap-4">
                <figure>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.3337 3.33366H20.667V2.00033C20.667 1.6467 20.5265 1.30756 20.2765 1.05752C20.0264 0.807468 19.6873 0.666992 19.3337 0.666992C18.98 0.666992 18.6409 0.807468 18.3908 1.05752C18.1408 1.30756 18.0003 1.6467 18.0003 2.00033V3.33366H10.0003V2.00033C10.0003 1.6467 9.85985 1.30756 9.6098 1.05752C9.35975 0.807468 9.02061 0.666992 8.66699 0.666992C8.31337 0.666992 7.97423 0.807468 7.72418 1.05752C7.47413 1.30756 7.33366 1.6467 7.33366 2.00033V3.33366H4.66699C3.60613 3.33366 2.58871 3.75509 1.83857 4.50523C1.08842 5.25538 0.666992 6.27279 0.666992 7.33366V23.3337C0.666992 24.3945 1.08842 25.4119 1.83857 26.1621C2.58871 26.9122 3.60613 27.3337 4.66699 27.3337H23.3337C24.3945 27.3337 25.4119 26.9122 26.1621 26.1621C26.9122 25.4119 27.3337 24.3945 27.3337 23.3337V7.33366C27.3337 6.27279 26.9122 5.25538 26.1621 4.50523C25.4119 3.75509 24.3945 3.33366 23.3337 3.33366ZM24.667 23.3337C24.667 23.6873 24.5265 24.0264 24.2765 24.2765C24.0264 24.5265 23.6873 24.667 23.3337 24.667H4.66699C4.31337 24.667 3.97423 24.5265 3.72418 24.2765C3.47413 24.0264 3.33366 23.6873 3.33366 23.3337V14.0003H24.667V23.3337ZM24.667 11.3337H3.33366V7.33366C3.33366 6.98004 3.47413 6.6409 3.72418 6.39085C3.97423 6.1408 4.31337 6.00033 4.66699 6.00033H7.33366V7.33366C7.33366 7.68728 7.47413 8.02642 7.72418 8.27647C7.97423 8.52652 8.31337 8.66699 8.66699 8.66699C9.02061 8.66699 9.35975 8.52652 9.6098 8.27647C9.85985 8.02642 10.0003 7.68728 10.0003 7.33366V6.00033H18.0003V7.33366C18.0003 7.68728 18.1408 8.02642 18.3908 8.27647C18.6409 8.52652 18.98 8.66699 19.3337 8.66699C19.6873 8.66699 20.0264 8.52652 20.2765 8.27647C20.5265 8.02642 20.667 7.68728 20.667 7.33366V6.00033H23.3337C23.6873 6.00033 24.0264 6.1408 24.2765 6.39085C24.5265 6.6409 24.667 6.98004 24.667 7.33366V11.3337Z"
                      fill="#FF784B"
                    />
                  </svg>
                </figure>
                <div className="pl-4 border-l-2">
                  <p>22 May 2024</p>
                </div>
              </div>
              <AiOutlineDown className="absolute top-0 right-0 m-2" />
            </div>
            <div className="flex relative bg-white rounded gap-5 p-2">
              <div className="flex align-center gap-4">
                <figure>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 0.374023C6.25002 0.374023 0.376023 6.25002 0.374023 13.5C0.376023 20.748 6.25002 26.623 13.5 26.627C20.75 26.623 26.624 20.747 26.625 13.5C26.625 6.25002 20.749 0.375023 13.5 0.374023ZM13.5 23.624C7.91002 23.613 3.38502 19.09 3.37502 13.5C3.37899 10.8158 4.44697 8.2427 6.34489 6.3446C8.24281 4.44649 10.8158 3.37826 13.5 3.37402C16.184 3.37799 18.757 4.44604 20.6547 6.34401C22.5525 8.24199 23.6203 10.815 23.624 13.499C23.614 19.089 19.091 23.614 13.5 23.622V23.624ZM6.62502 13.5C6.62502 13.2348 6.51967 12.9805 6.33213 12.7929C6.14459 12.6054 5.89024 12.5 5.62502 12.5C5.35981 12.5 5.10545 12.6054 4.91792 12.7929C4.73038 12.9805 4.62502 13.2348 4.62502 13.5C4.62502 13.7652 4.73038 14.0196 4.91792 14.2071C5.10545 14.3947 5.35981 14.5 5.62502 14.5C5.89024 14.5 6.14459 14.3947 6.33213 14.2071C6.51967 14.0196 6.62502 13.7652 6.62502 13.5ZM6.17902 16.572C6.00767 16.671 5.86953 16.8185 5.78209 16.996C5.69464 17.1736 5.66182 17.373 5.68778 17.5692C5.71373 17.7653 5.7973 17.9494 5.92791 18.098C6.05851 18.2467 6.23028 18.3532 6.42147 18.4042C6.61266 18.4552 6.81468 18.4483 7.00196 18.3844C7.18924 18.3206 7.35335 18.2026 7.47354 18.0454C7.59372 17.8882 7.66458 17.6989 7.67712 17.5014C7.68967 17.3039 7.64335 17.1072 7.54402 16.936C7.41049 16.7071 7.19183 16.5402 6.93574 16.4718C6.67966 16.4034 6.40692 16.4391 6.17702 16.571L6.17902 16.572ZM7.17902 8.69602C7.06511 8.62539 6.93815 8.57837 6.8057 8.55778C6.67325 8.53718 6.53802 8.54342 6.40803 8.57613C6.27804 8.60884 6.15595 8.66734 6.04902 8.74817C5.9421 8.829 5.85251 8.9305 5.78559 9.04664C5.71867 9.16278 5.67578 9.29119 5.65947 9.42423C5.64316 9.55727 5.65377 9.69224 5.69066 9.82111C5.72754 9.94997 5.78996 10.0701 5.8742 10.1744C5.95844 10.2786 6.06278 10.3649 6.18102 10.428C6.40988 10.5481 6.67631 10.5748 6.92447 10.5027C7.17263 10.4306 7.38324 10.2653 7.51216 10.0413C7.64108 9.81736 7.6783 9.55218 7.61601 9.30138C7.55371 9.05059 7.39775 8.83364 7.17902 8.69602ZM20.821 10.428C20.9408 10.3658 21.0468 10.2799 21.1325 10.1756C21.2182 10.0713 21.2819 9.95073 21.3197 9.82114C21.3576 9.69156 21.3688 9.55566 21.3528 9.42162C21.3367 9.28758 21.2936 9.15818 21.2262 9.04123C21.1588 8.92427 21.0684 8.82218 20.9604 8.74111C20.8525 8.66004 20.7292 8.60166 20.5981 8.56949C20.467 8.53733 20.3307 8.53205 20.1975 8.55397C20.0643 8.57589 19.9369 8.62455 19.823 8.69702C19.6056 8.83534 19.45 9.05223 19.3887 9.30246C19.3273 9.5527 19.3649 9.81697 19.4935 10.0402C19.6222 10.2634 19.8321 10.4283 20.0794 10.5006C20.3267 10.5728 20.5924 10.5468 20.821 10.428ZM10.061 19.455C9.8323 19.3364 9.56664 19.3106 9.31934 19.3828C9.07204 19.4551 8.86213 19.62 8.7333 19.8431C8.60447 20.0663 8.56664 20.3305 8.62769 20.5808C8.68873 20.8311 8.84394 21.0482 9.06102 21.187C9.29058 21.3175 9.56244 21.352 9.81729 21.2828C10.0721 21.2136 10.2893 21.0464 10.4213 20.8177C10.5533 20.589 10.5896 20.3174 10.5221 20.0621C10.4546 19.8068 10.2888 19.5886 10.061 19.455ZM10.061 7.54502C10.1748 7.47946 10.2746 7.39208 10.3546 7.28791C10.4346 7.18374 10.4933 7.06481 10.5273 6.93793C10.5613 6.81105 10.57 6.67871 10.5527 6.54849C10.5355 6.41827 10.4928 6.29272 10.427 6.17902C10.3283 6.00781 10.1811 5.86971 10.0039 5.78219C9.82674 5.69467 9.62758 5.66167 9.43164 5.68736C9.2357 5.71304 9.05178 5.79627 8.90315 5.9265C8.75451 6.05673 8.64784 6.22811 8.59662 6.41898C8.54541 6.60984 8.55195 6.81161 8.61543 6.99876C8.6789 7.1859 8.79645 7.35002 8.95321 7.47034C9.10997 7.59067 9.2989 7.6618 9.49609 7.67474C9.69329 7.68768 9.88989 7.64184 10.061 7.54302V7.54502ZM20.821 16.572C20.5913 16.4401 20.3187 16.4045 20.0628 16.4729C19.8068 16.5413 19.5884 16.7081 19.455 16.937C19.3322 17.1661 19.3033 17.4339 19.3744 17.6839C19.4455 17.9338 19.611 18.1464 19.8359 18.2765C20.0609 18.4066 20.3276 18.4442 20.5798 18.3812C20.8319 18.3182 21.0497 18.1597 21.187 17.939C21.3195 17.7091 21.3555 17.436 21.2871 17.1796C21.2187 16.9232 21.0515 16.7044 20.822 16.571L20.821 16.572ZM17.94 5.81202C17.7111 5.69225 17.4447 5.66565 17.1966 5.73779C16.9484 5.80992 16.7378 5.97521 16.6088 6.19907C16.4797 6.42292 16.4423 6.68801 16.5042 6.93887C16.5661 7.18973 16.7226 7.40693 16.941 7.54502C17.0549 7.61264 17.1811 7.65696 17.3122 7.67541C17.4434 7.69386 17.5769 7.68607 17.705 7.6525C17.8331 7.61894 17.9533 7.56025 18.0585 7.47986C18.1638 7.39947 18.252 7.29897 18.3181 7.1842C18.3842 7.06943 18.4269 6.94268 18.4436 6.81129C18.4603 6.67991 18.4507 6.54652 18.4154 6.41886C18.3802 6.2912 18.3199 6.17182 18.2381 6.06765C18.1563 5.96347 18.0547 5.87659 17.939 5.81202H17.94ZM21.38 12.5C21.1148 12.5 20.8605 12.6054 20.6729 12.7929C20.4854 12.9805 20.38 13.2348 20.38 13.5C20.38 13.7652 20.4854 14.0196 20.6729 14.2071C20.8605 14.3947 21.1148 14.5 21.38 14.5C21.6452 14.5 21.8996 14.3947 22.0871 14.2071C22.2747 14.0196 22.38 13.7652 22.38 13.5C22.38 13.2348 22.2747 12.9805 22.0871 12.7929C21.8996 12.6054 21.6452 12.5 21.38 12.5ZM13.5 4.62402C12.95 4.62402 12.5 5.07202 12.5 5.62402L12.035 12.967L9.03102 14.927C8.80135 15.0598 8.63381 15.2783 8.56526 15.5346C8.49672 15.7908 8.53278 16.0638 8.66552 16.2935C8.79826 16.5232 9.01681 16.6907 9.27308 16.7593C9.52934 16.8278 9.80235 16.7918 10.032 16.659L13.338 14.982C13.392 14.989 13.446 14.999 13.503 14.999C14.333 14.999 15.003 14.329 15.003 13.499L14.503 5.62302C14.503 5.35781 14.3977 5.10345 14.2101 4.91592C14.0226 4.72838 13.7682 4.62302 13.503 4.62302L13.5 4.62402ZM13.5 20.377C12.95 20.377 12.5 20.824 12.5 21.377C12.5 21.93 12.95 22.377 13.5 22.377C14.05 22.377 14.5 21.93 14.5 21.377C14.5 20.824 14.053 20.377 13.5 20.377ZM16.94 19.455C16.7684 19.5536 16.6299 19.7008 16.5421 19.8781C16.4542 20.0554 16.4209 20.2548 16.4464 20.4511C16.4719 20.6473 16.5551 20.8316 16.6854 20.9805C16.8156 21.1295 16.9872 21.2364 17.1783 21.2878C17.3693 21.3392 17.5714 21.3328 17.7588 21.2693C17.9463 21.2059 18.1106 21.0882 18.2312 20.9313C18.3517 20.7743 18.423 20.5852 18.4359 20.3877C18.4489 20.1902 18.403 19.9934 18.304 19.822C18.1712 19.5926 17.9529 19.4251 17.6968 19.3563C17.4408 19.2876 17.1679 19.323 16.938 19.455H16.94Z"
                      fill="#FF784B"
                    />
                  </svg>
                </figure>
                <div className="pl-4 pr-11 border-l-2">
                  <p>Africa/Lagos - WAT (+01:00)</p>
                </div>
              </div>
              <AiOutlineDown className="absolute top-0 right-0 m-2" />
            </div>
            <div className="relative flex w-[100%] bg-white rounded gap-5 p-2">
              <div className="flex align-center gap-4">
                <figure>
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0003 2.66699C23.3643 2.66699 29.3337 8.63633 29.3337 16.0003C29.3337 23.3643 23.3643 29.3337 16.0003 29.3337C8.63633 29.3337 2.66699 23.3643 2.66699 16.0003C2.66699 8.63633 8.63633 2.66699 16.0003 2.66699ZM16.0003 8.00033C15.6467 8.00033 15.3076 8.1408 15.0575 8.39085C14.8075 8.6409 14.667 8.98004 14.667 9.33366V16.0003C14.6671 16.3539 14.8076 16.693 15.0577 16.943L19.0577 20.943C19.3091 21.1859 19.6459 21.3203 19.9955 21.3172C20.3451 21.3142 20.6795 21.174 20.9267 20.9267C21.174 20.6795 21.3142 20.3451 21.3172 19.9955C21.3203 19.6459 21.1859 19.3091 20.943 19.0577L17.3337 15.4483V9.33366C17.3337 8.98004 17.1932 8.6409 16.9431 8.39085C16.6931 8.1408 16.3539 8.00033 16.0003 8.00033Z"
                      fill="#FF784B"
                    />
                  </svg>
                </figure>
                <div className="pl-4 border-l-2">
                  <p>06:15 pm</p>
                </div>
              </div>
              <AiOutlineDown className="absolute top-0 right-0 m-2" />
            </div>
            <div>
              <button className="bg-[#69BD45] text-white h-full py-3 px-24 rounded-md whitespace-nowrap">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
