import React,{useEffect, useRef} from 'react';

const useBeforeLeave = onBefore =>{
    // if(typeof onBefore !== "function"){
    //     return;
    // }
    const handle = (e) => {
        const {clientY} = e;
        if(clientY <= 0){
            onBefore();
        }
    }
    useEffect(()=>{
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle)
    }, []);
}

const UseBeforeLeave = () => {
    const begForLife = () => console.log("나가지마세용!")
    useBeforeLeave(begForLife);
    return (
        <div>
            <h1>Use Before Leave</h1>
            <div>
                마우스가 이 창을 떠나면 안내 멘트가 콘솔창에 뜹니다.
            </div>
        </div>
    );
}

export default UseBeforeLeave;
