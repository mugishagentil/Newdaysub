import React, {useState, useEffect} from "react";

function Countpro(){
        const [count, setCount] = useState(0);
        const [color, setColor] = useState("yellow")

        useEffect(() => {
            document.title = `count: ${count} ${color}`;
        }, [count]);

        function addCount(){
            setCount(c => c + 1)
        }
        function DecreaseButton(){
            setCount(c => c - 1)
        }
        function changeColorButton(){
            setColor(c => c === "purple" ? "orange" : "green");
        }

    return(
        <>
            <p style={{color:color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={DecreaseButton}>Substract</button>
            <button onClick={changeColorButton}>Change color</button>
        </>
    )
}
export default Countpro