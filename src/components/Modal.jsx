import { useContext, useState } from "react";
import { UserContext } from "../App";

export const Modal = () => {
  const { setIsClicked, modalRef, formRef, setMinute, setShort, setLong, setPomodoro, setBorderColor, setFont } = useContext(UserContext);
  const [selectedColor, setSelectedColor] = useState('');

  const closeModal = () => {
    setIsClicked(isClicked => !isClicked);
    modalRef.current.close();
  };

  const handleClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const formObj = Object.fromEntries(formData.entries());
    setMinute(formObj.pomodoro || 25);

    setShort(formObj.short ? formObj.short : 5);
    setLong(formObj.long ? formObj.long : 10);
    setPomodoro(formObj.pomodoro || 25);
    modalRef.current.close();
  };

  const handleColorChange = (color) => {
    setBorderColor(color);
    setSelectedColor(color);
  };

  const handleFontChange = (font) => {
    setFont(font);
  };

  return (
    <>
      <dialog className="modal" ref={modalRef}>
        <div className="modal-header">
          <span>Settings</span>
          <h2 onClick={closeModal}>X</h2>
        </div>
        <div className="modal-middle">
          <h3>TIME (MINUTES)</h3>
          <form className="modal-form" ref={formRef}>
            <div className="timeModal">
              <span>Pomodoro</span>
              <input type="number" name="pomodoro" defaultValue={25} />
            </div>
            <div className="timeModal">
              <span>Short Break</span>
              <input type="number" name="short" defaultValue={5} />
            </div>
            <div className="timeModal">
              <span>Long Break</span>
              <input type="number" name="long" defaultValue={10} />
            </div>
            <div className="submitButton">
              <button type="submit" onClick={handleClick}>Apply</button>
            </div>
          </form>
          <div className="colorSettings">
            <h3>COLOR</h3>
            <div className="color-picker">
              {['#F87070', '#70F3F8', '#D881F8'].map(color => (
                <div
                  key={color}
                  className={`color-box ${selectedColor === color ? 'checked' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                ></div>
              ))}
            </div>
          </div>
          <div className="fontSettings">
            <h3>FONT</h3>
            <div className="font-picker">
              <button style={{ fontFamily: 'Kumbh Sans' }} onClick={() => handleFontChange('font1')}>Aa</button>
              <button style={{ fontFamily: 'Roboto Slab' }} onClick={() => handleFontChange('font2')}>Aa</button>
              <button style={{ fontFamily: 'Space Mono' }} onClick={() => handleFontChange('font3')}>Aa</button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
