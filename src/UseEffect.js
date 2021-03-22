import React,{useEffect, useState} from 'react';



const UseEffect = () => {

    const sayHello = () => {
        console.log("hello")
    }

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    useEffect(sayHello, [number1])

    // useEffect(()=>{
    //     sayHello();
    // })

    return (
        <div>
            <h1>Use Effect</h1>
            <div>
                <button onClick={() => setNumber1(number1 + 1)}>{number1}</button>
                <button onClick={() => setNumber2(number2 + 1)}>{number2}</button>
            </div>
        </div>
    );
}

export default UseEffect;
