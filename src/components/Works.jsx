import { Tab } from '@headlessui/react';
import tour from '../img/tour.jpg';
import pulse from '../img/pulse.jpg';
import english from '../img/eng.jpg';
import windows from '../img/windows.jpg';
import notes from '../img/notes.jpg';
import weather from '../img/weather.jpg';

import { VscGithub } from "react-icons/vsc";
import { BsBrowserSafari } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useState } from 'react';

const Works = () => {
    // Состояние для отслеживания наведения
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <>
            <section className="works">
                <div className="container py-11 mx-auto text-center w-4/5">
                    <h1 className="works-title xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-4xl font-bold uppercase text-center ml-auto mr-auto">
                        Мои проекты
                    </h1>
                    <Tab.Group>
                        <Tab.List className='pt-5 flex lg:justify-center xs:block'>
                            <CenterMode/>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="works-wrap flex-wrap flex md:justify-around pt-7 justify-center">
                                    <div
                                        onMouseEnter={() => setHoveredIndex(0)} // Устанавливаем индекс на 0 при наведении
                                        onMouseLeave={() => setHoveredIndex(null)} // Сбрасываем индекс при уходе курсора
                                        className={`works-wrap__block relative my-3.5 ${hoveredIndex === 0 ? '' : ''}`}
                                    >
                                        <img src={tour} alt="" className="max-w-xs rounded-lg" />

                                        <div
                                        className={`works-wrap__block link absolute text-center w-full flex flex-col h-full bg-rgba(255,255,255,.75) bottom-0
                                                    transition-all duration-500 ease-in-out delay-150 backdrop-blur-md rounded-lg items-center justify-center 
                                                    ${hoveredIndex === 0 ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'}`}
                                        >
                                            <h1 className="works-wrap__block link-text font-bold lg:text-2xl text-lg text-black">
                                                Frontend проект
                                            </h1>
                	                        <div className="works-wrap_divlock link-title font-semibold text-black lg:text-xl leading-6">
                                                Сайт по 3д-туру
                                            </div>
                                            <div className="w-1/2 h-0.5 bg-black mx-auto mt-8"></div>

                                            <div className="works-wrap__block mt-4	 flex justify-center works-wrap">

                                            <div className="works-wrap__block link-front flex items-center">
                                                <VscGithub />
                                                <a href="https://github.com/NEETRUNNER/VIRTUAL_TOUR" target='_blank' rel="noopener noreferrer">
                                                    <p className="works-wrap__block text ml-1 text-lg">GitHub</p>
                                                </a>
                                            </div>
                                            <div className="works-wrap__block ml-2 link-front flex items-center">
                                                <BsBrowserSafari />
                                                <a href="https://3dtourdnepr.pp.ua/" target='_blank' rel="noopener noreferrer">
                                                    <p className="works-wrap__block text ml-1 text-lg">Сайт</p>
                                                </a>
                                            </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div
                                        onMouseEnter={() => setHoveredIndex(1)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className={`works-wrap__block relative my-3.5	 ${hoveredIndex === 1 ? '' : ''}`}
                                    >
                                        <img src={pulse} alt="" className="max-w-xs rounded-lg" />

                                        <div
                                        className={`works-wrap__block link absolute text-center w-full flex flex-col h-full bg-rgba(255,255,255,.75) bottom-0
                                                    transition-all duration-500 ease-in-out delay-150 backdrop-blur-md rounded-lg items-center justify-center 
                                                    ${hoveredIndex === 1 ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'}`}
                                        >
                                            <h1 className="works-wrap__block link-text font-bold lg:text-2xl	text-black">Frontend проект</h1>
                                            <div className="works-wrap__block link-title font-semibold text-black lg:text-xl leading-6">Сайт спортивной тематики</div>
                                            <div className="w-1/2 h-0.5 bg-black mx-auto mt-8"></div>

                                            <div className="works-wrap__block mt-4	 flex justify-center works-wrap">

                                            <div className="works-wrap__block link-front flex items-center">
                                                <VscGithub />
                                                <a href="https://github.com/NEETRUNNER/PULSE" target='_blank' rel="noopener noreferrer">
                                                    <p className="works-wrap__block text ml-1 text-lg">GitHub</p>
                                                </a>
                                            </div>
                                            <div className="works-wrap__block ml-2 link-front flex items-center">
                                                <BsBrowserSafari />
                                                <a href="https://neetrunner.github.io/PULSE/" target='_blank' rel="noopener noreferrer">
                                                    <p className="works-wrap__block text ml-1 text-lg">Сайт</p>
                                                </a>
                                            </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div
                                        onMouseEnter={() => setHoveredIndex(2)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className={`works-wrap__block relative my-3.5	 ${hoveredIndex === 2 ? '' : ''}`}
                                    >
                                        <img src={english} alt="" className="max-w-xs rounded-lg" />

                                        <div
                                        className={`works-wrap__block link absolute text-center w-full flex flex-col h-full bg-rgba(255,255,255,.75) bottom-0
                                                    transition-all duration-500 ease-in-out delay-150 backdrop-blur-md rounded-lg items-center justify-center 
                                                    ${hoveredIndex === 2 ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'}`}
                                        >
                                            <h1 className="works-wrap__block link-text font-bold lg:text-2xl	text-black">Frontend проект</h1>
                                            <div className="works-wrap__block link-title font-semibold text-black lg:text-xl leading-6">Сайт по курсу английского языка</div>
                                            <div className="w-1/2 h-0.5 bg-black mx-auto mt-8"></div>

                                            <div className="works-wrap__block mt-4	 flex justify-center works-wrap">

                                            <div className="works-wrap__block link-front flex items-center">
                                                <VscGithub />
                                                <a href="https://github.com/NEETRUNNER/ENGLISH" target='_blank' rel="noopener noreferrer">
                                                    <p className="works-wrap__block text ml-1 text-lg">GitHub</p>
                                                </a>
                                            </div>
                                            <div className="works-wrap__block ml-2 link-front flex items-center">
                                                <BsBrowserSafari />
                                                <a href="https://neetrunner.github.io/ENGLISH/" target='_blank' rel="noopener noreferrer">
                                                    <p className="works-wrap__block text ml-1 text-lg">Сайт</p>
                                                </a>
                                            </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div
                                        onMouseEnter={() => setHoveredIndex(3)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className={`works-wrap__block relative my-3.5 ${hoveredIndex === 3 ? '' : ''}`}
                                    >
                                        <img src={windows} alt="" className="max-w-xs rounded-lg" />

                                        <div
                                        className={`works-wrap__block link absolute text-center w-full flex flex-col h-full bg-rgba(255,255,255,.75) bottom-0
                                                    transition-all duration-500 ease-in-out delay-150 backdrop-blur-md rounded-lg items-center justify-center 
                                                    ${hoveredIndex === 3 ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'}`}
                                        >
                                            <h1 className="works-wrap__block link-text font-bold lg:text-2xl	text-black">Frontend проект</h1>
                                            <div className="works-wrap__block link-title font-semibold text-black lg:text-xl leading-6">Cайт для продажи окон</div>
                                            <div className="w-1/2 h-0.5 bg-black mx-auto mt-8"></div>

                                            <div className="works-wrap__block mt-4	 flex justify-center works-wrap">

                                            <div className="works-wrap__block link-front flex items-center">
                                                <VscGithub />
                                                <a href="https://github.com/NEETRUNNER/WINDOW" target='_blank' rel="noopener noreferrer">
                                                    <p className="works-wrap__block text ml-1 text-lg">GitHub</p>
                                                </a>
                                            </div>
                                            <div className="works-wrap__block ml-2 link-front flex items-center">
                                                <BsBrowserSafari />
                                                <a href="https://neetrunner.github.io/WINDOW/" target='_blank' rel="noopener noreferrer">
                                                    <p className="works-wrap__block text ml-1 text-lg">Сайт</p>
                                                </a>
                                            </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Tab.Panel>

                            <Tab.Panel>
                                <div className="works-wrap flex-wrap flex justify-center pt-7">
                                    <div
                                        onMouseEnter={() => setHoveredIndex(4)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className={`works-wrap__block relative my-3.5 ${hoveredIndex === 4 ? '' : ''}`}
                                    >
                                        <img src={notes} alt="" className="max-w-xs rounded-lg" />

                                        <div
                                        className={`works-wrap__block link absolute text-center w-full flex flex-col h-full bg-rgba(255,255,255,.75) bottom-0
                                                    transition-all duration-500 ease-in-out delay-150 backdrop-blur-md rounded-lg items-center justify-center 
                                                    ${hoveredIndex === 4 ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'}`}
                                        >
                                            <h1 className="works-wrap__block link-text font-bold lg:text-2xl text-black">Frontend проект</h1>
                                            <div className="works-wrap__block link-title font-semibold text-black lg:text-xl leading-6">Веб-приложение для заметок</div>
                                            <div className="w-1/2 h-0.5 bg-black mx-auto mt-8"></div>

                                            <div className="works-wrap__block mt-4	 flex justify-center works-wrap">

                                            <div className="works-wrap__block link-front flex items-center">
                                                <VscGithub />
                                                <a href="https://github.com/NEETRUNNER/NOTES_APP" target='_blank' rel="noopener noreferrer">
                                                    <p className="works-wrap__block text ml-1 text-lg">GitHub</p>
                                                </a>
                                            </div>
                                            <div className="works-wrap__block ml-2 link-front flex items-center">
                                                <BsBrowserSafari />
                                                <a href="https://neetrunner.github.io/NOTES_APP/" target='_blank' rel="noopener noreferrer">
                                                    <p className="works-wrap__block text ml-1 text-lg">Ссылка</p>
                                                </a>
                                            </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div
                                        onMouseEnter={() => setHoveredIndex(5)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className={`works-wrap__block xs:ml-0 md:ml-16 relative my-3.5 ${hoveredIndex === 5 ? '' : ''}`}
                                    >
                                        <img src={weather} alt="" className="max-w-xs rounded-lg" />

                                        <div
                                        className={`works-wrap__block link absolute text-center w-full flex flex-col h-full bg-rgba(255,255,255,.75) bottom-0
                                                    transition-all duration-500 ease-in-out delay-150 backdrop-blur-md rounded-lg items-center justify-center 
                                                    ${hoveredIndex === 5 ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'}`}
                                        >
                                            <h1 className="works-wrap__block link-text font-bold lg:text-2xl text-black">Frontend проект</h1>
                                            <div className="works-wrap__block link-title font-semibold text-black lg:text-xl leading-6">Веб-приложение по прогнозу погоды</div>
                                            
                                            <div className="w-1/2 h-0.5 bg-black mx-auto mt-8"></div>

                                            <div className="works-wrap__block mt-4 flex justify-center works-wrap">

                                            <div className="works-wrap__block link-front flex items-center">
                                                <VscGithub />
                                                <a href="https://github.com/NEETRUNNER/WEATHER_IN_CITIES" target='_blank' rel="noopener noreferrer">
                                                    <p className="works-wrap__block text ml-1 text-lg">GitHub</p>
                                                </a>
                                            </div>
                                            <div className="works-wrap__block ml-2 link-front flex items-center">
                                                <BsBrowserSafari />
                                                <a href="https://neetrunner.github.io/WEATHER_IN_CITIES/" target='_blank' rel="noopener noreferrer">
                                                    <p className="works-wrap__block text ml-1 text-lg">Ссылка</p>
                                                </a>
                                            </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>
        </>
    );
};

export default Works;

function CenterMode() {
    const settings = {
      className: "center",
      centerMode: false,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500
    };
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    return (
        <>
          {isMobile ? (
            <Slider {...settings}>
              <Tab className='min-h-16 min-w-48 bg-black text-white p-2.5 uppercase font-bold rounded-lg'>
                Веб-Сайты
              </Tab>
              <Tab className='min-h-16 min-w-48 bg-black text-white p-2.5 md:ml-3.5 uppercase font-bold rounded-lg xs:ml-0 xs:mt-0'>
                Веб-приложения
              </Tab>
            </Slider>
          ) : (
            <>
              <Tab className='min-h-16 min-w-48 bg-black text-white p-2.5 uppercase font-bold rounded-lg'>
                Веб-Сайты
              </Tab>
              <Tab className='min-h-16 min-w-48 bg-black text-white p-2.5 md:ml-3.5 xs:ml-3.5 uppercase font-bold rounded-lg sm:ml-0'>
                Веб-приложения
              </Tab>
            </>
          )}
        </>
      );
  }