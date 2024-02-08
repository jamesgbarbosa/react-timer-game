import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";

const fRef = forwardRef(function ResultModal({ result, targetTime, timeLeft, onClose }, ref) {
    const dialog = useRef();
    const isUserLost = timeLeft <= 0;

    const score = Math.round((1 - timeLeft / targetTime) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })


    return createPortal(
        <dialog ref={dialog} onClose={onClose} className="result-modal">
            <h2>{isUserLost ? 'You Lost' : `Your score is ${score}`}</h2>
            <p>
                Your target time was {targetTime} seconds
            </p>
            <p>
                You stopped the timer at {timeLeft} seconds
            </p>
            <form method="dialog">
                <button onClick={onClose}>Close</button>
            </form>
        </dialog>, document.getElementById("modal"))
})

export default fRef;