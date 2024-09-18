import { useContext } from "react";
import { UserContext } from "../App";

export const Content = () => {
  const { setIsClicked, modalRef, minute, second, setSecond, setMinute, setState, state, borderColor } = useContext(UserContext);

  const handleClick = () => {
    setIsClicked(isClicked => !isClicked);
    modalRef.current.showModal();
  };

  const timer = () => {
    if (minute === "00" && second === "00") {
      setState(false);
    } else if (minute === 0 && second === "00") {
      setState(false);
    } else {
      setState(state => !state);
      if (second === 0 || second === "00") {
        setSecond(59);
        setMinute(minute => minute - 1);
      }
    }
  };

  return (
    <>
      <div className="box">
        <div className="content" style={{ border: `9px solid ${borderColor}` }} onClick={timer}>
          <span>{minute}:{second}</span>
          <h6 className={state === true ? "pause" : "start"}>{state === true ? "PAUSE" : "START"}</h6>
        </div>
        <div className="settingsBtn" onClick={handleClick}>
          <img src="settings.svg" alt="" />
        </div>
      </div>
    </>
  );
};
