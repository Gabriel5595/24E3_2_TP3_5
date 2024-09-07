import { useState } from "react"

export default function Counter() {
    
    const [number, setNumber] = useState(0)

    function add() {
        let newNumber = number + 1
        setNumber(newNumber)
    }

    function reset() {
        setNumber(0)
    }
    
    return (
        <div>
            <h1>Counter</h1>
            <h3>{number}</h3>
            <button onClick={() => add()}>Add number</button>
            <button onClick={() => reset()}>Reset</button>
        </div>
    )
}