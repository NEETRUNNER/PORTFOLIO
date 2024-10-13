import { act, useEffect, useState } from 'react';
import bg from '../img/bg_2.jpg'

const Main = ({active, setActive}) => {
    
    const scrollToSection = (section) => {
        setTimeout(() => {
            // После перехода плавно прокручиваем к секции
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setActive(!active)
            }
        }, 100); // Небольшая задержка для завершения перехода
    };

    useEffect(() => {
        const menu = document.querySelector('.header-ul');
        const burger = document.querySelector('.burger')
        const handleClickOutside = (e) => {
            // Проверяем, был ли клик ВНЕ меню и ВНЕ иконки бургера
            if (menu && !menu.contains(e.target) && !burger.contains(e.target)) {
                console.log('Клик вне меню');
                setActive(false); // Закрываем меню
            } else if (burger && burger.contains(e.target)) {
                console.log('Клик на бургер');
                setActive(active); // Открываем/закрываем меню при клике на бургер
            }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        // Очистка обработчика при размонтировании компонента
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [active]); // Добавляем зависимость на состояние "active"

  return (
    <>
    <section id='main' className='main h-screen bg-auto bg-center' style={{ backgroundImage: `url(${bg})` }}>

    <ul className={active ? "header-ul border-8 flex-col flex w-1/2 lg:w-3/12	 items-center justify-center h-full fixed text-center bg-white transition-all ease-in z-10" : "header-ul border-8 flex-col flex w-1/2 lg:w-2/12 items-center justify-center h-full fixed text-center bg-white ease-in transition-all -translate-x-full z-10"}>
        <li onClick={() => scrollToSection('main')} className="header-item uppercase cursor-pointer mb-7 text-xl hover:backdrop-opacity-10	 transition-all">Главная</li>
        <li onClick={() => scrollToSection('development')} className="header-item uppercase cursor-pointer mb-7 text-xl">Разработка сайта</li>
        <li className="header-item uppercase cursor-pointer mb-7 text-xl">Мои проекты</li>
        <li className="header-item uppercase cursor-pointer mb-7 text-xl">Связь со мной</li>
        <li onClick={() => scrollToSection('slider')} className="header-item uppercase cursor-pointer mb-7 text-xl">Мой стек</li>
    </ul>

        <div className="container max-h-full max-w-full flex items-center justify-center h-full flex-col">
            <div className="main-content mx-auto">
            <h1 className="main-title xs:text-2xl md:text-3xl lg:text-5xl xl:text-7xl uppercase font-extrabold text-white text-center">Стасовский Алексей</h1>
                <div className="main-text text-center mx-auto mt-8 text-white font-mono text-[30px] whitespace-nowrap overflow-hidden border-r-4 border-white animate-typing">
                    Frontend Developer</div>
            </div>
            <div className="main-wrap__btns xs:flex-col xs:items-center text-center mx-auto flex justify-center pt-12 xl:flex-row lg:flex-row">
                <button className="main-btn text-sm hover:-translate-y-2 transition font-medium uppercase rounded-lg ring-slate-800 w-40 h-14 bg-slate-50">Обо мне</button>
                <button className="main-btn text-sm xs:ml-0 sm:ml-8 hover:-translate-y-2 transition font-medium uppercase rounded-lg ring-slate-800 lg:ml-8 xs:mt-5 lg:mt-0 w-40 h-14 bg-slate-50">Мои проекты</button>
            </div>
        </div>
    </section>
    </>
  );
};

export default Main;
