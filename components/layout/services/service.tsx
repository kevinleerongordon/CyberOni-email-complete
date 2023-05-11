import React from 'react'
import Image from 'next/image'
import SubProjectGrid from "@/layouts/services/dynamicSubprojects"

import { ServiceWithID } from '@/data/sample_data/sample_services';

interface Props {
    service: ServiceWithID;
}

const ServiceComponent = ({ service }: Props) => {
  return (
      <div>
          

          
          <main className="flex flex-col justify-center items-center mt-32">
              <header className="container">
                 
                  <nav
                      className="flex fixed top-0 right-0 left-0 z-10 justify-between px-8 px-10 w-full shadow-md backdrop-blur-md md:justify-around bg-white/80 md:px-3">
                     
                      <div className="flex items-center">
                        
                          <a className="cursor-pointer">
                              <h3 className="text-2xl font-medium text-blue-500">
                                  <Image 
                                      height={10}
                                      width ={10}
                                      
                                      src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
                                      alt="Store Logo" />
                              </h3>
                          </a>
                      </div>

                     
                      <div
                          className="left-0 top-16 justify-center justify-items-start items-center px-5 py-3 w-full border-t md:space-x-8 md:justify-items-center md:flex md:pt-2 md:px-10 md:py-0 md:border-t-0">
                          <a
                              className="flex text-gray-600 transition-colors duration-300 cursor-pointer hover:text-blue-500">
                              Home
                          </a>

                          <a
                              className="flex font-semibold text-blue-600 text-gray-600 transition-colors duration-300 cursor-pointer">
                              Themes
                          </a>

                          <a
                              className="flex text-gray-600 transition-colors duration-300 cursor-pointer hover:text-blue-500">
                              Developers
                          </a>

                          <a
                              className="flex text-gray-600 transition-colors duration-300 cursor-pointer hover:text-blue-500">
                              Pricing
                          </a>

                          <a
                              className="flex text-gray-600 transition-colors duration-300 cursor-pointer hover:text-blue-500">
                              Blog
                          </a>

                          <a
                              className="flex text-gray-600 transition-colors duration-300 cursor-pointer hover:text-blue-500">
                              About Us
                          </a>
                      </div>

                    
                      <div className="flex hidden items-center space-x-5 md:flex">
                        
                          <a
                              className="flex text-gray-600 transition-colors duration-300 cursor-pointer hover:text-blue-500">
                              <svg
                                  className="fill-current h-5 w-5 mr-2 mt-0.5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                              >
                                  <path
                                      d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z" />
                              </svg>

                              Register
                          </a>

                        
                          <a
                              className="flex font-semibold text-blue-600 text-gray-600 transition-colors duration-300 cursor-pointer">
                              <svg
                                  className="fill-current h-5 w-5 mr-2 mt-0.5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  version="1.1"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24">
                                  <path
                                      d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
                              </svg>

                              Login
                          </a>
                      </div>

                    
                      <button
                          className="justify-self-end w-10 h-10 rounded-full md:hidden hover:bg-gray-100">
                          <svg
                              className="mx-auto"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              version="1.1"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24">
                              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                          </svg>
                      </button>
                  </nav>
              </header>

             
              <section
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  className="flex flex-wrap items-center px-4 pb-20 mx-auto -mx-3 w-full font-sans lg:max-w-screen-lg sm:max-w-screen-sm md:max-w-screen-md">
               
                  <div className="px-3 w-full lg:w-2/5">
                      <div
                          className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                          <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl">
                              Exclusive Agency For

                              <span className="text-5xl text-blue-500 leading-relaxeds"
                              >Technology
                              </span>

                              Provide Solution
                          </h2>

                          <p
                              className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                              Helping you maximize operations management with digitization
                          </p>
                      </div>

                      <div className="text-center lg:text-left">
                          <a
                              className="block visible px-8 py-4 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
                          >Key Features</a >

                          <a
                              className="block visible px-8 py-4 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500"
                          >How We Work?</a>
                      </div>
                  </div>

             
                  <div className="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
              
                      <div className="flex justify-center items-center">
                          <svg
                              className="block max-w-full h-auto align-middle lg:max-w-lg"
                              xmlns="http://www.w3.org/2000/svg"
                              height="400"
                              viewBox="0 0 524.67004 627.58314"
                              xmlnsXlink="http://www.w3.org/1999/xlink">
                              <path
                                  d="M369.04619,148.0378h51.762v17.04364c0,28.5682-23.19375,51.76195-51.76195,51.76195h-.00005v-68.80558h0Z"
                                  transform="translate(789.85437 364.88118) rotate(-180)"
                                  fill="#2f2e41" />
                              <polygon
                                  points="409.33502 185.02664 418.23482 225.05637 366.08305 216.39672 387.33502 178.53845 409.33502 185.02664"
                                  fill="#a0616a" />
                              <polygon
                                  points="409.33502 185.02664 418.23482 225.05637 366.08305 216.39672 387.33502 178.53845 409.33502 185.02664"
                                  opacity=".1" />
                              <rect
                                  x="359.33502"
                                  y="270.53845"
                                  width="50"
                                  height="74"
                                  transform="translate(768.67004 615.07691) rotate(-180)"
                                  fill="#a0616a" />
                              <path
                                  d="M441.83502,405.03845l-11,59s7,41-14,83l-14,43-21-3s13-32,13-46c0-14,3-68,3-68l-1.5-61.61811,45.5-6.38189Z"
                                  fill="#2f2e41" />
                              <path
                                  d="M378.83502,586.03845s24-9,26,4l-1,6s9,27-4,29c-13,2-25,5-26-1-1-6-.98425-13.48966,1.50787-18.74483,2.49213-5.25517,3.49213-19.25517,3.49213-19.25517Z"
                                  fill="#2f2e41" />
                              <g>
                                  <path
                                      d="M366.13446,395.88629l-5.84242,59.73162s-18.12633,37.43576-9.63539,83.61913l1.48898,45.19716,21.00587,2.95865s-3.58764-34.353,.30589-47.80069c3.89353-13.44769,16.0298-66.15169,16.0298-66.15169l18.5774-58.77007-41.93013-18.7841Z"
                                      fill="#2f2e41" />
                                  <path
                                      d="M376.31126,587.26662s-20.5502-15.31957-26.08672-3.38865l-.70811,6.04141s-16.1539,23.43185-4.22298,28.96837c11.93092,5.53652,22.62319,11.75548,25.25239,6.2703,2.62921-5.48519,4.69702-12.68375,3.76473-18.42469-.9323-5.74094,2.00069-19.46674,2.00069-19.46674Z"
                                      fill="#2f2e41" />
                              </g>
                              <path
                                  d="M429.83502,310.53845c23.51917,21.94757,25.26404,56.67346,11.5,98,0,0-44,30-76-8l-16-77,80.5-13Z"
                                  fill="#2f2e41" />
                              <path
                                  d="M390.33502,203.53845l25,4-2,63,28,56-36,18s-28-53-33-86c-5-33-2-57-2-57l20,2Z"
                                  fill="#6c63ff" />
                              <path
                                  d="M371.33502,205.53845l-25,4,2,63-6,58,14,16s28-53,33-86,2-57,2-57l-20,2Z"
                                  fill="#6c63ff" />
                              <path
                                  d="M401.33502,207.03845l5.5-1.5s19.5-2.5,22.5,5.5c3,8,2,55,2,55,0,0,5.16,57.68504-14.92,58.34252-20.08,.65748-16.08-47.34252-16.08-47.34252l1-70Z"
                                  fill="#6c63ff" />
                              <circle cx="400.60838" cy="170.13134" r="25.881" fill="#a0616a" />
                              <path
                                  d="M368.33502,209.03845l-5.5-1.5s-19.5-2.5-22.5,5.5-2,55-2,55c0,0-5.16,57.68504,14.92,58.34252s16.08-47.34252,16.08-47.34252l-1-70Z"
                                  fill="#6c63ff" />
                              <path
                                  d="M385.65786,205.75047c-5.55216-1.40863-11.84681,4.52132-14.06128,13.24853-.93243,3.47409-1.01931,7.12088-.2534,10.63535l-2.38571,9.92043-.17551-.00924-18.81824,44.34887c-4.37547,10.31165-3.91314,22.14968,1.66767,31.86201,3.3199,5.77765,7.67792,9.66177,12.79497,5.69682,8.49085-6.57912,14.03686-44.24916,16.56905-65.88826l5.85496-21.9959c2.35018-2.72464,4.01347-5.97257,4.85067-9.47191,2.2149-8.72385-.49107-16.93801-6.04318-18.34671Z"
                                  fill="#a0616a" />
                              <path
                                  d=" {fill with text}"
                                  fill="#2f2e41" />
                              <path
                                  d="M0,626.13577c0,.66003,.53003,1.19,1.19006,1.19H523.48004c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19H1.19006c-.66003,0-1.19006,.53003-1.19006,1.19Z"
                                  fill="#3f3d56" />
                              <g>
                                  <path
                                      d="M340.03771,.99983H134.36885c-23.32296,0-42.22995,18.90699-42.22995,42.22995V583.66267c0,23.32291,18.90695,42.22986,42.22986,42.22986h205.66894c23.32296,0,42.22995-18.90699,42.22995-42.22995V43.22978c0-23.32296-18.90699-42.22995-42.22995-42.22995Z"
                                      fill="#fff" />
                                  <path
                                      d="M340.03782,626.89209H134.36888c-23.83691,0-43.22998-19.39258-43.22998-43.22949V43.22998C91.1389,19.39307,110.53196,0,134.36888,0h205.66895c23.83691,0,43.22998,19.39307,43.22998,43.22998V583.6626c0,23.83691-19.39307,43.22949-43.22998,43.22949ZM134.36888,2c-22.73438,0-41.22998,18.49561-41.22998,41.22998V583.6626c0,22.73438,18.49561,41.22949,41.22998,41.22949h205.66895c22.73438,0,41.22998-18.49512,41.22998-41.22949V43.22998c0-22.73438-18.49561-41.22998-41.22998-41.22998H134.36888Z"
                                      fill="#3f3d56" />
                                  <path
                                      d="M75.14368,94.56643c-1.80561,0-3.27392,1.46831-3.27392,3.27392v26.1914c0,1.80561,1.46831,3.27392,3.27392,3.27392s3.27392-1.46831,3.27392-3.27392v-26.1914c0-1.80561-1.46831-3.27392-3.27392-3.27392Z"
                                      fill="#3f3d56" />
                                  <path
                                      d="M354.93558,87.46124h-82.66786c-3.50634,0-6.35907-2.85273-6.35907-6.35907s2.85273-6.35907,6.35907-6.35907h82.66786c3.50634,0,6.35907,2.85273,6.35907,6.35907s-2.85273,6.35907-6.35907,6.35907Z"
                                      fill="#e6e6e6" />
                                  <path
                                      d="M277.38221,137.46854h-80.3571c-2.02587,0-3.67427-1.64841-3.67427-3.67428s1.64841-3.67351,3.67427-3.67351h80.3571c2.02587,0,3.67351,1.64765,3.67351,3.67351,0,2.02587-1.64764,3.67427-3.67351,3.67427Z"
                                      fill="#6c63ff" />
                                  <ellipse
                                      cx="78.32235"
                                      cy="92.07002"
                                      rx="64.899"
                                      ry="63.53157"
                                      fill="#6c63ff" />
                                  <path
                                      d="M100.34912,60.02429c-8.64008,15.73267-17.28021,31.46545-25.92029,47.19818-5.50665-9.72955-10.98322-19.47626-16.50342-29.19818-1.90643-3.3576-7.09204-.33765-5.18079,3.02832,6.39911,11.2699,12.73193,22.57727,19.13104,33.84717,1.09412,1.92694,4.09796,1.97168,5.18085,0,9.49115-17.28241,18.9823-34.56482,28.47345-51.84717,1.8598-3.38647-3.31964-6.41742-5.18085-3.02832Z"
                                      fill="#fff" />
                                  <rect
                                      x="117.61763"
                                      y="14.65784"
                                      width="46.49807"
                                      height="5.96129"
                                      rx=".31021"
                                      ry=".31021"
                                      fill="#e6e6e6" />
                                  <circle
                                      cx="318.33631"
                                      cy="15.8501"
                                      r="4.76903"
                                      fill="#e6e6e6" />
                                  <circle
                                      cx="331.45115"
                                      cy="15.8501"
                                      r="4.76903"
                                      fill="#e6e6e6" />
                                  <circle
                                      cx="344.56599"
                                      cy="15.8501"
                                      r="4.76903"
                                      fill="#e6e6e6" />
                                  <path
                                      d="M133.86826,157.13577c0,.66003,.53003,1.19,1.19006,1.19h204.28998c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19H135.05832c-.66003,0-1.19006,.53003-1.19006,1.19Z"
                                      fill="#3f3d56" />
                                  <g>
                                      <path
                                          d="M319.7578,250.66658h-122.59803c-2.02587,0-3.67427-1.64842-3.67427-3.67428s1.64841-3.67351,3.67427-3.67351h122.59803c2.02587,0,3.67351,1.64765,3.67351,3.67352,0,2.02587-1.64764,3.67427-3.67351,3.67427Z"
                                          fill="#6c63ff" />
                                      <path
                                          d="M319.7578,303.66658h-122.59803c-2.02587,0-3.67427-1.64842-3.67427-3.67428s1.64841-3.67351,3.67427-3.67351h122.59803c2.02587,0,3.67351,1.64765,3.67351,3.67352,0,2.02587-1.64764,3.67427-3.67351,3.67427Z"
                                          fill="#6c63ff" />
                                      <path
                                          d="M319.7578,356.66658h-122.59803c-2.02587,0-3.67427-1.64842-3.67427-3.67428s1.64841-3.67351,3.67427-3.67351h122.59803c2.02587,0,3.67351,1.64765,3.67351,3.67352,0,2.02587-1.64764,3.67427-3.67351,3.67427Z"
                                          fill="#6c63ff" />
                                      <circle cx="159.97525" cy="246.53845" r="9" fill="#6c63ff" />
                                      <path
                                          d="M158.97516,261.53845v-2c7.44385,0,13.5-6.05615,13.5-13.5s-6.05615-13.5-13.5-13.5v-2c8.54688,0,15.5,6.95312,15.5,15.5s-6.95312,15.5-15.5,15.5Z"
                                          fill="#3f3d56" />
                                      <circle cx="159.97525" cy="299.53845" r="9" fill="#6c63ff" />
                                      <path
                                          d="M158.97516,314.53845v-2c7.44385,0,13.5-6.05566,13.5-13.5,0-7.44385-6.05615-13.5-13.5-13.5v-2c8.54688,0,15.5,6.95312,15.5,15.5s-6.95312,15.5-15.5,15.5Z"
                                          fill="#3f3d56" />
                                      <circle cx="159.97525" cy="352.53845" r="9" fill="#6c63ff" />
                                      <path
                                          d="M158.97516,367.53845v-2c7.44385,0,13.5-6.05566,13.5-13.5s-6.05615-13.5-13.5-13.5v-2c8.54688,0,15.5,6.95312,15.5,15.5s-6.95312,15.5-15.5,15.5Z"
                                          fill="#3f3d56" />
                                  </g>
                              </g>
                              <path
                                  d=" {fill with text}"
                                  fill="#a0616a" />
                              <polygon
                                  points="405.38874 228.05282 384.33502 243.01874 394.86188 309.31266 408.0646 326.38767 423.44391 321.0686 427.94066 289.72998 422.64886 259.42289 405.38874 228.05282"
                                  fill="#6c63ff" />
                          </svg>
                      </div>
                  </div>
              </section>

             
              <section
                  className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
                  style={{
                      backgroundImage: "url(https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&w=880&q=80)",
                  }}>
                  <h1 className="mt-20 mb-10 text-5xl font-semibold text-white">
                      This is Parallax Effect
                  </h1>

                  <span className="my-20 font-bold text-center text-white/90">
                      <a
                          href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
                          target="_blank" rel="noopener noreferrer"
                          className="text-white/90 hover:text-white">
                          Convetert to SASS
                      </a>

                      <hr className="my-4" />

                      <a
                          href="https://unsplash.com/photos/8Pm_A-OHJGg"
                          target="_blank" rel="noopener noreferrer"
                          className="text-white/90 hover:text-white">
                          Image Source
                      </a>

                      <hr className="my-4" />

                      <p>
                          <a
                              href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/templates/parallax-landing-page.html"
                              target="_blank" rel="noopener noreferrer"
                              className="text-white/90 hover:text-white">
                              Source Code
                          </a>
                          |
                          <a
                              href="https://egoistdeveloper.github.io/my-tailwind-components/./src/templates/parallax-landing-page.html"
                              target="_blank" rel="noopener noreferrer"
                              className="text-white/90 hover:text-white">
                              Full Preview
                          </a>
                      </p>
                  </span>
              </section>

             
              <section className="p-20 space-y-8">
                  <h1 className="my-20 text-4xl text-center">Tempor sit labore nostrud</h1>

                  <p>
                      fill with text
                  </p>

                  <p>
                      fill with text
                  </p>

                  <p>
                      fill with text
                  </p>
              </section>
           
          </main>
          <div>
              <SubProjectGrid subProjects={service.sub_projects} />
          </div>
</div>
  )
}

export default ServiceComponent