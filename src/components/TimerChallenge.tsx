import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
    let timer = useRef();
    const [timeLeft, setTimeLeft] = useState(targetTime * 1000)
    const [isTimerStart, setIsTimerStart] = useState(false)
    const [result, setResult] = useState("")
    const formattedTimeLeft = timeLeft <= 0 ? 0 : (timeLeft / 1000).toFixed(2)

    function handleStart() {
        setIsTimerStart(true)
        setTimeLeft(targetTime * 1000)
        setResult("")

        timer.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0) {
                    setIsTimerStart(false)
                    clearInterval(timer.current)
                    setResult("You lost")

                }
                return (prev - 10);
            })

        }, 10)


    }

    function handleStop() {
        setResult("You lost")
        setIsTimerStart(false)
        clearInterval(timer.current)
    }


    return <section className="challenge">
        {/* debug */}
        <p>{result}</p>
        <code>{formattedTimeLeft} seconds left</code>
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={isTimerStart ? handleStop : handleStart}>
                {isTimerStart ? 'Stop Challenge' : 'Challenge'}
            </button>
        </p>
        <p className="">
            {isTimerStart ? 'Time is running...' : 'Timer Stopped'}
        </p>
    </section>
}