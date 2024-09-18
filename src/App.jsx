import { createContext, useEffect, useRef, useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { Buttons } from './components/Buttons';
import { Content } from './components/Content';
import { Modal } from './components/Modal';

export const UserContext = createContext();

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const modalRef = useRef();
  const formRef = useRef();
  const [minute, setMinute] = useState("25");
  const [second, setSecond] = useState("00");
  const [state, setState] = useState(false);
  const [short, setShort] = useState(5);
  const [long, setLong] = useState(10);
  const [pomodoro, setPomodoro] = useState(25);
  const [isShort, setIsShort] = useState(false);
  const [isLong, setIsLong] = useState(false);
  const [isPomodoro, setIsPomodoro] = useState(false);
  const [istrue, setIsTrue] = useState(false);
  const [borderColor, setBorderColor] = useState('#F87070');
  const [font, setFont] = useState('defaultFont');

  useEffect(() => {
    document.body.className = font; 
  }, [font]);

  useEffect(() => {
    if (state === true) {
      const stopTime = setTimeout(() => {
        if (second >= 10) {
          setSecond(second => second - 1);
        } else if (second > 0) {
          setSecond(second => "0" + (second - 1));
        }
        if (second === "00") {
          setMinute(minute => minute - 1);
          setSecond(59);
        }
      }, 1000);
      if (minute === 0 && second === "00") {
        clearInterval(stopTime);
      }
      return () => clearTimeout(stopTime);
    }
  }, [minute, second, istrue, state]);

  return (
    <UserContext.Provider value={{
      isClicked, setIsClicked, modalRef,
      formRef, minute, setMinute, second,
      setSecond, state, setState, short,
      setShort, istrue, setIsTrue, isShort,
      setIsShort, isLong, setIsLong, long,
      setLong, pomodoro, setPomodoro,
      isPomodoro, setIsPomodoro, borderColor, setBorderColor,
      font, setFont
    }}>
      <div className='container'>
        <Header />
        <Buttons />
        <Content />
        <Modal />
      </div>
    </UserContext.Provider>
  );
}

export default App;
