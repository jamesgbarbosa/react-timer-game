export default function ResultModal({result}) {
    return <dialog className="result-modal">
        <h2>{result}</h2>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}