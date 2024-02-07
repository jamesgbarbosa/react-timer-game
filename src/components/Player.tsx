import { useRef, useState } from "react";

export function Player() {

    const [playerName, setPlayerName] = useState(null);
    const name = useRef();

    function handleChangeName() {
        setPlayerName(name.current.value)
    }

    return (
        <section id="player">
            <h2>Welcome {playerName ?? 'unknown'}</h2>
            <p>
                <input ref={name} type="text" />
                <button onClick={handleChangeName}>Set Name</button>
            </p>
        </section>
    );
}