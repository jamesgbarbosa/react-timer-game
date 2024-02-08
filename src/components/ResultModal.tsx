import { forwardRef, useImperativeHandle, useRef } from "react"

const fRef = forwardRef(function ResultModal({result, targetTime, timeLeft, onClose}, ref) {
    const dialog = useRef(); 

    useImperativeHandle(ref, ()=> {
        return {
            open() {
                dialog.current.showModal();
            }
        }
     })


    return <dialog ref={dialog} onClose={onClose} className="result-modal">
        <h2>{result}</h2>
        <p>
            Your target time was {targetTime} seconds
        </p>
        <p>
            You stopped the timer at {timeLeft} seconds
        </p>
        <form method="dialog">
            <button onClick={onClose}>Close</button>
        </form>
    </dialog>
})

export default fRef;