import catPaw from '/cat-paw.svg'
import towa from './assets/img/towa.png'
import waveLine from './assets/img/wave-line.png'
import kofi from './assets/img/ko-fi-icon.svg'
import plink from './assets/img/plink-wide-cat.gif'
import './App.css'
import TermsOfService from './assets/scripts/terms'
import PrivacyPolicy from './assets/scripts/privacy'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FaDiscord, FaGithub, FaTwitch, FaYoutube } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom'

// Sorry my code is messy af, I was in a hurry when making this site.
function NameAniComponent() {
    const element = useRef(null);

    useEffect(() => {
    const typed = new Typed(element.current, {
        strings: ['Wither', 'Saduwub', 'Nanako', 'a weeb', 'a gamer', 'a cat lover', 'a cat :3', 'a friend', 'the afker', 'the sleeper'],
        typeSpeed: 75,
        backSpeed: 50,
        backDelay: 800,
        startDelay: 10,
        loop: true,
        showCursor: false,
        cursorChar: '|',
    });

    return () => {
        typed.destroy();
    };
    }, []);

    return (
        <div>
            <p className='namesAni'>Call me&nbsp;</p>
            <span className='namesAni' ref={element} />
            <span className='namesAni cursor-blink'>|</span>
        </div>
    );
}

function Home() {
    useEffect(() => {
        const scrollToSection = () => {
            if (location.pathname === '/about') {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth',
                });
            }
            else if (location.pathname === '/projects') {
                window.scrollTo({
                    top: window.innerHeight * 2.1,
                    behavior: 'smooth',
                });
            }
            else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
        };

        scrollToSection();
    }, []);

    const scrollTo = (position: 'top' | 'about' | 'projects') => {
        if (position === 'top') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            window.history.pushState(null, '', '/');
        }
        else if (position === 'about') {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth',
            });
            window.history.pushState(null, '', '/about');
        }
        else {
            window.scrollTo({
                top: window.innerHeight * 2.1,
                behavior: 'smooth',
            });
            window.history.pushState(null, '', '/projects');
        }
    };

    const aniObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            else {
                entry.target.classList.remove('visible');
            }
        });
    });

    const projectElements = document.querySelectorAll('.projects');
    projectElements.forEach((element) => {
        aniObserver.observe(element);
    });

    const urlObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry === entries[0]) {
                window.history.pushState(null, '', '/');
            }
            else if (entry === entries[1]) {
                window.history.pushState(null, '', '/about');
            }
            else {
                window.history.pushState(null, '', '/projects');
            }
        });
    });

    const sectionElements = document.querySelectorAll('section');
    sectionElements.forEach((element) => {
        urlObserver.observe(element);
    });

    return (
        <>
            <section>
                <div className='flex'>
                    <a href='https://www.google.com/search?q=cats&udm=2' target='_blank'>
                        <img src={catPaw} className='logo temp' alt='Wither logo' />
                    </a>
                </div>
                <div className='triangle absolute top-0 left-0' />
                <div className='triangle-two absolute top-0 right-100' />
                <div className='absolute top-0 right-0 h-[58px] w-[400px] bg-rose-400' />
                <div>
                    <a href='https://ko-fi.com/saduwub' target='_blank' className='group'>
                        <img src={kofi} className='absolute top-1 right-1 w-[50px] h-[50px] group-hover:brightness-75' />
                        <span className='absolute top-4 right-16 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 z-10'>
                            Buy me a Ko-fi!
                        </span>
                    </a>
                </div>
                <h1 className='text-[3.2em]'>
                    Welcome To
                </h1>
                <h1 className='text-fuchsia-900 font-[TT-Backwards-Sans-Bold] tracking-[-0.05em] text-9xl'>
                    Withering Dimension
                </h1>
                <div className='flex top-1000 gap-4 mt-4'>
                    <a href='https://discord.gg/vh2gSBESnh' target='_blank'>
                        <FaDiscord size={50} className='hover:text-blue-400' />
                    </a>
                    <a href='https://github.com/IzawaNanako' target='_blank'>
                        <FaGithub size={50} className='hover:text-gray-400' />
                    </a>
                    <a href='https://www.twitch.tv/saduwub' target='_blank'>
                        <FaTwitch size={50} className='hover:text-purple-400' />
                    </a>
                    <a href='https://www.youtube.com/@Nanakowo' target='_blank'>
                        <FaYoutube size={50} className='hover:text-red-400' />
                    </a>
                </div>
                <div className='accessories'>
                    <img src={towa} className='absolute top-26 right-6 h-auto w-100' />
                    <img src={waveLine} className='absolute left-0 bottom-[-13em]' />
                </div>
                <div className='absolute top-0 left-0 p-4 flex flex-col space-y-4 text-gray-900 font-[Bold] text-xl'>
                    <button className='side-buttons px-4 py-2 h-full w-64 rounded-md' onClick={() => scrollTo('about')}>
                        About Me
                    </button>
                    <button className='side-buttons px-4 py-2 h-full w-64 rounded-md' onClick={() => scrollTo('projects')}>
                        Projects
                    </button>
                    <button className='side-buttons px-4 py-2 h-full w-64 rounded-md' onClick={() => alert('you should be glad that you aren\'t rickrolled')}>
                        WIP
                    </button>
                </div>
            </section>
            <section className='min-h-[100vh] max-h-[100vh]'>
                <div className='after h-400'>
                    <NameAniComponent />
                </div>
                <p className='relative top-[-20em] text-4xl text-left'>
                    Hey there! I'm Wither (or Saduwub / Nanako—whichever you prefer). I'm a tech enthusiast, gamer, and cat lover who enjoys building things—whether it's coding projects, Discord bots, or just cool ideas in general.

                    I have a passion for programming, especially working with TypeScript, React, and Discord bot development. When I’m not coding, you’ll probably find me watching anime, gaming, or just chilling.

                    This site is a small corner of the internet where I share my projects, ideas, and whatever else comes to mind. Feel free to look around, and if you want to connect, check out my socials! 
                </p>
            </section>
            <section className='min-h-[100vh] max-h-[100vh]'>
                <div className='projects flex h-400 justify-center items-center mx-auto gap-5'>
                    <div className='top-20 project-card bg-gray-900 text-white w-[400px] rounded-3xl'>
                        <h2 className='text-6xl m-[20px]'>
                            Nanaz The Neko
                        </h2>
                        <p className='text-2xl text-left m-[20px]'>
                            A Discord bot written using discord.js, designed to meet my preference of perfection, currently is capable of moderation, checking profiles and playing some simple games, more features to be added.
                        </p>
                    </div>
                    <div className='top-20 project-card bg-gray-900 text-white w-[400px] rounded-3xl'>
                        <h2 className='text-6xl m-[20px]'>
                            Withering Hearts
                        </h2>
                        <p className='text-2xl text-left m-[20px]'>
                            A Minecraft mod written in fabric for tweaks like removing the boudaries of attributes in my own server, potentially adding items and mobs in the future.
                        </p>
                    </div>
                    <div className='top-20 project-card bg-gray-900 text-white w-[400px] rounded-3xl'>
                        <h2 className='text-6xl m-[20px]'>
                            Withering Dimension
                        </h2>
                        <p className='text-2xl text-left m-[20px]'>
                            A website to showcase my works, and possibly more in the future, still in heavy development.
                        </p>
                    </div>
                </div>
            </section>
            <section className='min-h-[100vh] max-h-[100vh]'>
                <img src={plink} className='h-auto w-full' />
            </section>
            <Footer />
        </>
    );
}

function ErrorPage() {
    return (
        <>
            <h1 className='text-rose-700 text-8xl h-[60vh]'>
                Oops! Nothing was found, maybe you typed it wrong?
            </h1>
            <Footer />
        </>
    )
}

function Footer() {
    return (
        <>
            <footer className='text-white flex flex-col justify-between'>
                <div className='absolute h-[40vh] w-full bg-rose-950 z-[-1]' />
                <div className='mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-6'>
                    <div className='flex flex-wrap text-2xl justify-center space-x-4 md:space-x-6'>
                        <a href='/' className='hover:underline'>Home</a>
                        <a href='/about' className='hover:underline'>About Me</a>
                        <a href='/projects' className='hover:underline'>Projects</a>
                        <a href='/terms' className='hover:underline'>Terms of Service</a>
                        <a href='/privacy' className='hover:underline'>Privacy Policy</a>
                    </div>
                    {/*<p className='relative left-10 mt-2 md:mt-0 text-xs'>© {new Date().getFullYear()} Withering Dimension. All rights reserved.</p> */}
                </div>
                <div className='flex space-x-4 pr-8 pb-6'>
                    <a href='https://discord.gg/vh2gSBESnh' target='_blank'>
                        <FaDiscord size={30} className='hover:text-blue-400' />
                    </a>
                    <a href='https://github.com/IzawaNanako' target='_blank'>
                        <FaGithub size={30} className='hover:text-gray-400' />
                    </a>
                    <a href='https://www.twitch.tv/saduwub' target='_blank'>
                        <FaTwitch size={30} className='hover:text-purple-400' />
                    </a>
                    <a href='https://www.youtube.com/@Nanakowo' target='_blank'>
                        <FaYoutube size={30} className='hover:text-red-400' />
                    </a>
                </div>
            </footer>
        </>
    )
}

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Home />} />
            <Route path='/projects' element={<Home />} />
            <Route path='terms' element={<TermsOfService />} />
            <Route path='privacy' element={<PrivacyPolicy />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App
