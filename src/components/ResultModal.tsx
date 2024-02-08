import { forwardRef } from "react"

const fRef = forwardRef(function ResultModal({result, targetTime, timeLeft}, ref) {
    return <dialog ref={ref} className="result-modal">
        <h2>{result}</h2>
        <p>
            Your target time was {targetTime} seconds
        </p>
        <p>
            You stopped the timer at {timeLeft} seconds
        </p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
})

export default fRef;