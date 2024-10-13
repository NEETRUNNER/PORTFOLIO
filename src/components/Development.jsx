import html from '../img/html.svg'
import css from '../img/css3.svg'
import js from '../img/js.svg'
import tailwind from '../img/tailwind.svg'
import react from '../img/react.svg'
import webpack from '../img/webpack.svg'
import gulp from '../img/gulp.svg'
import bg from '../img/bg.jpg'

import { useState, useEffect } from 'react';

const Development = () => {

  return (
    <>
    <section id='development' className="development h-full bg-auto bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container py-6 xs:max-w-lg md:max-w-screen-md lg:max-w-screen-lg mx-auto w-11/12">

        <h1 className="development-title text-3xl xs:text-2xl sm:text-5xl md:text-4xl lg:text-5xl mx-auto py-7	text-center	text-white uppercase font-bold">Как разрабатывается сайт?</h1>
        <div className="development-wrap xs:flex-col md:flex-row flex items-center">
        <img src={html} alt="" className="xs:w-32 sm:w-32 md:w-48 md:h-48 lg:w-60 lg:h-60 object-contain max-w-full max-h-full animate-scale" />
          <p className="development-wrap__text font-medium sm:text-sm lg:text-xl	text-white rounded-lg max-w-full	bg-slate-800	min-h-44		p-5 flex items-center text-center">Чтобы создать структуру сайта мы используем язык гипертекстовой разметки HTML5, он даёт нам возможность создать текст, изображения, видео и прочее на сайте</p>
        </div>
        <div className="development-wrap xs:flex-col pt-3.5 flex items-center md:flex-row-reverse lg:flex-row-reverse">
          <img src={css} alt="" className="xs:w-32 sm:w-32 md:w-48 sm:text-sm md:h-48 lg:w-60 lg:h-60 object-contain max-w-full max-h-full animate-scale" />
          <p className="development-wrap__text font-medium sm:text-sm lg:text-xl	text-white rounded-lg max-w-full	bg-slate-800	min-h-44		p-5 flex items-center text-center">Чтобы стилизовать всю структуру которую мы создали используем язык стилизации CSS3, с помощью него делаем наш сайт более красивым и привлекательным</p>
        </div>
        <div className="development-wrap xs:flex-col md:flex-row pt-3.5	 flex items-center">
          <img src={js} alt="" className="xs:w-32 sm:h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 object-contain max-w-full max-h-full animate-scale" />
          <p className="development-wrap__text font-medium sm:text-sm lg:text-xl	text-white rounded-lg max-w-full	bg-slate-800	min-h-44 p-5 flex items-center text-center">Ни один сайт в современном мире не обходится без языка программирования JAVASCRIPT, он создан для того чтобы создавать интерактив на сайте, с помощью него создаются модальные окна, табы для переключения контента на сайте, отправка информации и форм на сервер и основной интерактив</p>
        </div>
        <div className="development-wrap xs:flex-col pt-3.5	 flex items-center md:flex-row-reverse lg:flex-row-reverse">
          <img src={react} alt="" className="xs:w-32 sm:h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 object-contain max-w-full max-h-full animate-scale" />
          <p className="development-wrap__text font-medium sm:text-sm lg:text-xl	text-white rounded-lg max-w-full bg-slate-800 min-h-44	 p-5 flex items-center text-center">И для того чтобы создать классный и оптимизированный сайт, мы используем библиотеку-фреймворк REACT, она даёт нам возможность создавать качественные и крутые сайты из тех технологий что описаны выше, этот фреймворк необязателен, если сайт изначально планируется небольшим по размеру и ресурсам</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Development;