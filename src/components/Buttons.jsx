import { useContext } from "react"
import { UserContext } from "../App"

export const Buttons = () => {
  const { setIsShort, setIsLong, short, setMinute, setSecond, long, pomodoro, setIsPomodoro } = useContext(UserContext)

  const handleShortClick = () => {
    console.log("Short Break Çalıştı");
    setIsShort(true)
    setMinute(short)
    setSecond("00")
  }
  const handleLongClick = () => {
    console.log("Long Break Çalıştı");
    setIsLong(true)
    setMinute(long)
    setSecond("00")
  }
  const handlePomodoroClick = () => {
    console.log("Pomodoro Çalıştı");
    setIsPomodoro(true)
    setMinute(pomodoro)
    setSecond("00")
  }
  return (
    <>
      <div className="btns">
        <a onClick={handlePomodoroClick} >pomodoro</a>
        <a onClick={handleShortClick} >short break</a>
        <a onClick={handleLongClick} >long break</a>
      </div>
    </>
  )
}