import catPaw from '/cat-paw.svg'
import ayame from './assets/img/ayame.png'
import waveLine from './assets/img/wave-line.png'
import kofi from './assets/img/ko-fi-icon.svg'
import './App.css'
import React from 'react';
import Typed from 'typed.js';
import { FaDiscord, FaGithub, FaTwitch, FaYoutube } from 'react-icons/fa';

// Sorry my code is messy af, I was in a hurry when writing this site.
function NameAniComponent() {
    const el = React.useRef(null);

    React.useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ["Wither", "Saduwub", "Nanako", "a weeb", "a gamer", "a cat lover", "a friend", "the afker", "the sleeper"],
        typeSpeed: 75,
        backSpeed: 50,
        backDelay: 800,
        startDelay: 10,
        loop: true,
        showCursor: false,
        cursorChar: "|",
    });

    return () => {
        typed.destroy();
    };
    }, []);

    return (
    <div>
        <p className="namesAni">Call me&nbsp;</p>
        <span className="namesAni" ref={el} />
        <span className="namesAni cursor-blink">|</span>
    </div>
    );
}

function App() {
    return (
    <>
        <div className="flex">
            <a href="https://www.google.com/search?q=cats&udm=2" target="_blank">
                <img src={catPaw} className="logo temp" alt="Wither logo" />
            </a>
        </div>
        <div className="triangle absolute top-0 left-0" />
        <div className="triangle-two absolute top-0 right-100" />
        <div className="absolute top-0 right-0 h-[58px] w-[400px] bg-rose-400" />
        <div>
            <a href="https://ko-fi.com/saduwub" target="_blank">
                <img src={kofi} data-tooltip-target="tooltip-dark" className="absolute top-1 right-1 w-[50px] h-[50px]" />
                <div id="tooltip-dark" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    Buy me a coffee!
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </a>
        </div>
        <h1>Welcome To</h1>
        <h1 className="text-fuchsia-900 font-[TT-Backwards-Sans-Bold] tracking-[-0.05em]"> Withering Dimension</h1>
        <div className="flex gap-4 mt-4">
            <a href="https://discord.gg/vh2gSBESnh" target="_blank">
                <FaDiscord size={50} />
            </a>
            <a href="https://github.com/IzawaNanako" target="_blank">
                <FaGithub size={50} />
            </a>
            <a href="https://www.twitch.tv/saduwub" target="_blank">
                <FaTwitch size={50} />
            </a>
            <a href="https://www.youtube.com/@Nanakowo" target="_blank">
                <FaYoutube size={50} />
            </a>
        </div>
        { /*
        <div className="after">
            <NameAniComponent />
        </div>
        */ }
        <div className="accessories">
            <img src={ayame} className="absolute top-14.5 right-[-3em]" />
            <img src={waveLine} className="absolute left-0 bottom-[-13em]" />
        </div>
        <div className="absolute top-0 left-0 p-4 flex flex-col space-y-4 text-gray-900 font-[Bold] text-xl">
            <button className="side-buttons px-4 py-2 h-full w-64 rounded-md">
                Home
            </button>
            <button className="side-buttons px-4 py-2 h-full w-64 rounded-md">
                Projects
            </button>
            <button className="side-buttons px-4 py-2 h-full w-64 rounded-md">
                WIP
            </button>
        </div>
    </>
    )
}

export default App
