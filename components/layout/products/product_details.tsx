import React, { useState } from "react";

const ProductDetails = () => {
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="py-9 px-4 2xl:container md:py-12 md:px-6 lg:py-16 lg:px-20 2xl:mx-auto ">
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        {/* <!-- Description Div --> */}

        <div className="  w-full items-center sm:w-96 md:w-8/12 lg:w-6/12">
          <p className=" text-base font-normal leading-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
            Home / Furniture / Wooden Stool
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-7 text-gray-800 lg:text-4xl lg:leading-9">
            Wooden Stool
          </h2>

          <div className=" mt-5 flex flex-row  justify-between">
            <div className=" flex flex-row space-x-3">
              <svg
                className=" cursor-pointer"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20Z"
                  fill="#1F2937"
                />
              </svg>
              <svg
                className=" cursor-pointer"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20Z"
                  fill="#1F2937"
                />
              </svg>
              <svg
                className=" cursor-pointer"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20Z"
                  fill="#1F2937"
                />
              </svg>
              <svg
                className=" cursor-pointer"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20Z"
                  fill="#1F2937"
                />
              </svg>
              <svg
                className=" cursor-pointer"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20ZM9.99976 15.1C10.1601 15.0959 10.3186 15.1338 10.4598 15.21L14.2298 17.21L13.5098 13C13.4818 12.8392 13.4936 12.6741 13.5442 12.5189C13.5947 12.3638 13.6825 12.2234 13.7998 12.11L16.7998 9.17996L12.5998 8.55996C12.4457 8.52895 12.3012 8.46209 12.1778 8.3648C12.0545 8.2675 11.9558 8.14251 11.8898 7.99996L9.99976 4.24996L8.10976 7.99996C8.03741 8.14366 7.93145 8.26779 7.80089 8.3618C7.67032 8.45581 7.51899 8.51692 7.35976 8.53996L3.15976 9.15996L6.15976 12.09C6.27704 12.2034 6.36478 12.3438 6.41533 12.4989C6.46588 12.6541 6.4777 12.8192 6.44976 12.98L5.72976 17.14L9.49976 15.14C9.65951 15.0806 9.83261 15.0667 9.99976 15.1Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
            <p className="cursor-pointer text-base font-normal leading-4 text-gray-700 duration-100 hover:text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
              22 reviews
            </p>
          </div>

          <p className=" mt-7 text-base font-normal leading-6 text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using. Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <p className=" mt-6 text-xl font-semibold leading-5 lg:text-2xl lg:leading-6 ">
            $ 790.89
          </p>

          <div className="mt-10 lg:mt-11">
            <div className="flex flex-row justify-between">
              <p className=" text-base font-medium leading-4 text-gray-600">
                Select quantity
              </p>
              <div className="flex">
                <span
                  onClick={minusCount}
                  className="flex h-7 w-7 cursor-pointer items-center justify-center border border-r-0 border-gray-300 pb-1 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                >
                  -
                </span>
                <input
                  id="counter"
                  aria-label="input"
                  className="h-full w-14 border border-gray-300 pb-1 text-center"
                  type="text"
                  value={count}
                  onChange={(e) => e.target.value}
                />
                <span
                  onClick={addCount}
                  className="flex h-7 w-7 cursor-pointer items-center justify-center border border-l-0 border-gray-300 pb-1 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 "
                >
                  +
                </span>
              </div>
            </div>
            <hr className=" my-2 w-full bg-gray-200" />
            <div className=" mt-4 flex flex-row items-center justify-between">
              <p className="text-base font-medium leading-4 text-gray-600">
                Dimensions
              </p>
              <svg
                onClick={() => setRotate(!rotate)}
                id="rotateSVG"
                className={
                  "transform cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 " +
                  (rotate ? "rotate-180" : "rotate-0")
                }
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L5 5L1 1"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <hr className=" mt-4 w-full bg-gray-200" />
          </div>

          <button className="mt-6 w-full bg-gray-800 py-5 text-base font-medium leading-4 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 lg:mt-12">
            Add to shopping bag
          </button>
        </div>

        {/* <!-- Preview Images Div For larger Screen--> */}

        <div className=" flex w-full flex-col  gap-4 sm:w-96 sm:gap-6 md:w-8/12 lg:w-6/12 lg:flex-row lg:gap-8">
          <div className=" flex w-full items-center justify-center bg-gray-100 lg:w-8/12">
            <img
              src="https://i.ibb.co/bRg2CJj/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1.png"
              alt="Wooden Chair Previw"
            />
          </div>
          <div className=" grid w-full grid-cols-2 gap-6 sm:grid-cols-4 lg:w-4/12 lg:grid-cols-1">
            <div className="flex items-center justify-center bg-gray-100 py-4">
              <img
                src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png"
                alt="Wooden chair - preview 1"
              />
            </div>
            <div className="flex items-center justify-center bg-gray-100 py-4">
              <img
                src="https://i.ibb.co/7zv1N5Q/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-2.png"
                alt="Wooden chair - preview 2"
              />
            </div>
            <div className="flex items-center justify-center bg-gray-100 py-4">
              <img
                src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png"
                alt="Wooden chair- preview 3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  w-full items-center justify-center">
        <div className="mt-10 grid w-full grid-cols-1 gap-y-12 sm:mt-14 sm:w-96 sm:gap-x-6 sm:gap-y-12 md:w-8/12 md:grid-cols-2 lg:w-full lg:grid-cols-2 lg:gap-28">
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.667 43.75H33.3337"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 31.25V43.75"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35.4167 6.25L37.5 20.8333C37.5 27.1083 31.9042 31.25 25 31.25C18.0958 31.25 12.5 27.1083 12.5 20.8333L14.5833 6.25H35.4167Z"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 20.8333C14.3032 19.4813 16.4962 18.7505 18.75 18.7505C21.0038 18.7505 23.1968 19.4813 25 20.8333C26.8032 22.1853 28.9962 22.9161 31.25 22.9161C33.5038 22.9161 35.6968 22.1853 37.5 20.8333"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-9 text-xl font-semibold leading-5 text-gray-800 lg:mt-10">
              Great for drinks
            </p>
            <p className="text-normal mt-4 text-base leading-6 text-gray-600">
              Here are all the great cocktail recipes you should know how to
              make, from the margarita to the whiskey sour. Cheers!{" "}
            </p>
          </div>
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.833 6.66659C17.574 7.42209 14.5766 9.03575 12.1515 11.3402C9.72641 13.6447 7.96204 16.556 7.04139 19.7722C6.12073 22.9884 6.07733 26.3923 6.91568 29.6309C7.75403 32.8696 9.44359 35.8249 11.8091 38.1905C14.1747 40.556 17.13 42.2456 20.3686 43.0839C23.6073 43.9223 27.0112 43.8789 30.2274 42.9582C33.4436 42.0375 36.3549 40.2732 38.6594 37.8481C40.9638 35.423 42.5775 32.4255 43.333 29.1666C43.333 28.6141 43.1135 28.0842 42.7228 27.6935C42.3321 27.3028 41.8022 27.0833 41.2497 27.0833H33.333C32.9542 28.5395 32.1975 29.8699 31.1394 30.9397C30.0813 32.0095 28.7594 32.7809 27.3074 33.1757C25.8554 33.5705 24.3249 33.5747 22.8708 33.1879C21.4166 32.8011 20.0905 32.0371 19.0265 30.9731C17.9625 29.9091 17.1984 28.583 16.8117 27.1288C16.4249 25.6747 16.4291 24.1442 16.8239 22.6922C17.2187 21.2402 17.99 19.9183 19.0599 18.8602C20.1297 17.8021 21.4601 17.0453 22.9163 16.6666V8.33326C22.8904 8.08643 22.8158 7.84721 22.6968 7.62944C22.5777 7.41168 22.4166 7.21971 22.2229 7.06468C22.0291 6.90964 21.8064 6.79463 21.5678 6.72629C21.3293 6.65795 21.0795 6.63766 20.833 6.66659Z"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.25 7.29163C33.8953 8.22305 36.2979 9.736 38.2809 11.719C40.264 13.7021 41.7769 16.1047 42.7083 18.75H33.3333C32.6946 18.0019 31.998 17.3054 31.25 16.6666V7.29163Z"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-9 text-xl font-semibold leading-5 text-gray-800 lg:mt-10">
              Durable hardware
            </p>
            <p className="text-normal mt-4 text-base leading-6 text-gray-600">
              Product durability is a key aspect of achieving a circular
              economy. ... Moreover, enhancing the durability of individual
              hardware components{" "}
            </p>
          </div>
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.583 14.5834H35.4164V27.0834C35.4164 28.741 34.7579 30.3307 33.5858 31.5028C32.4137 32.6749 30.824 33.3334 29.1663 33.3334H20.833C19.1754 33.3334 17.5857 32.6749 16.4136 31.5028C15.2415 30.3307 14.583 28.741 14.583 27.0834V14.5834Z"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.75 6.25V14.5833"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.25 6.25V14.5833"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 33.3334V37.5C25 38.6051 25.439 39.6649 26.2204 40.4463C27.0018 41.2277 28.0616 41.6667 29.1667 41.6667H35.4167"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-9 text-xl font-semibold leading-5 text-gray-800 lg:mt-10">
              Eco-friendly
            </p>
            <p className="text-normal mt-4 text-base leading-6 text-gray-600">
              {" "}
              They re-use, recycle and reduce waste disposal in their lives.
              They conserve energy and natural resources
            </p>
          </div>
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.667 16.6666H33.3337V33.3333H16.667V16.6666Z"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37.4997 8.33337H12.4997C10.1985 8.33337 8.33301 10.1989 8.33301 12.5V37.5C8.33301 39.8012 10.1985 41.6667 12.4997 41.6667H37.4997C39.8009 41.6667 41.6663 39.8012 41.6663 37.5V12.5C41.6663 10.1989 39.8009 8.33337 37.4997 8.33337Z"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33.333 33.3334L40.208 40.2084"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33.333 16.6666L40.208 9.79163"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.667 16.6666L9.79199 9.79163"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.667 33.3334L9.79199 40.2084"
                stroke="#4B5563"
                strokeWidth="3.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-9 text-xl font-semibold leading-5 text-gray-800 lg:mt-10">
              Minimal Design
            </p>
            <p className="text-normal mt-4 text-base leading-6 text-gray-600">
              Minimalist interior design is very similar to modern interior
              design and involves using the bare essentials{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
