import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    let timer = useRef();
    const dialog = useRef();

    const [timeLeft, setTimeLeft] = useState(targetTime * 1000)
    const formattedTimeLeft = timeLeft <= 0 ? 0 : (timeLeft / 1000).toFixed(2)

    const isTimerActive = timeLeft > 0 && (timeLeft < targetTime * 1000)

    if (timeLeft <= 0 ) {
        clearInterval(timer.current)
        dialog.current.open();
    }

    function handleReset() {
        setTimeLeft(targetTime * 1000)
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeLeft((prev) => {
                return (prev - 10);
            })
        }, 10)
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current)
    }


    return <>
        <ResultModal onClose={handleReset} ref={dialog} targetTime={targetTime} timeLeft={formattedTimeLeft} />
        <section className="challenge">
            {/* {timeLeft} */}
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={isTimerActive ? handleStop : handleStart}>
                    {isTimerActive ? 'Stop Challenge' : 'Challenge'}
                </button>
            </p>
            <p className="">
                {isTimerActive ? 'Time is running...' : 'Timer Stopped'}
            </p>
        </section>
    </>

}