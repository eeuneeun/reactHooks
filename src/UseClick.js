import React,{useEffect, useRef} from 'react';


const useClick = (onClick) =>{
    const el = useRef();
    useEffect(()=>{

        //componentDidMount() 일 경우 호출
        if(el.current){
            el.current.addEventListener("click", onClick);
        }
        
        //componentWillUnMount() 일 경우 호출
        return() =>{
            if(el.current){
                el.current.removeEventListener("click", onClick);
            }
        };
    }, []);
    return el;
}

const UseClick = () => {
    const showFocus = () => console.log("메시지!")
    const btn = useClick(showFocus);
    
    const target =useRef();
    useEffect(()=>{
        setTimeout(()=>target.current.focus(), 1000)
    })

    return (
        <div>
            <h1>Use Click</h1>
            <div>
                <input ref={target} placeholder="이 인풋창은 10초 뒤 포커스 됩니다!" />
                <br />
                <button ref={btn}>이 버튼을 누르면 콘솔창에 메시지가 뜹니다!</button>
            </div>
        </div>
    );
}

export default UseClick;
