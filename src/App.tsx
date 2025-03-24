import catPaw from '/cat-paw.png'
import './App.css'
import React from 'react';
import Typed from 'typed.js';

function MyComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ["My name is Wither.", "My name is Saduwub.", "My name is Nanako"],
        typeSpeed: 75,
        backSpeed: 50,
        backDelay: 800,
        startDelay: 0,
        loop: true,
        showCursor: false,
        cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

function App() {
  return (
    <>
      <div>
        <a href="https://www.saduwub.com" target="_blank">
          <img src={catPaw} className="logo temp" alt="Wither logo" />
        </a>
      </div>
      <div className="after">
                <h1 className="typed-heading">Welcome</h1>
                <MyComponent />
            </div>
      <p className="introduction">
        Enjoy your stay.
      </p>
    </>
  )
}

export default App
