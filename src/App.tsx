import catPaw from '/cat-paw.svg'
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
        <h1>Welcome To</h1>
        <h1 className="text-fuchsia-900"> Withering Dimension</h1>
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
        <div className="after">
            <NameAniComponent />
        </div>
    </>
    )
}

export default App
