import React,{useEffect, useRef} from 'react';


const usePreventLeave  = () =>{
    const listener = event => {
        event.preventDefault();
        console.log("111")
        event.returnValue="";
    }
    const enablePrevent = () => window.addEventListener("beforeunload",listener);
    const disablePrevent = () => window.removeEventListener("beforeunload",listener);
    return {enablePrevent, disablePrevent}
}

const UsePreventLeave  = () => {
    const {enablePrevent, disablePrevent} = usePreventLeave();
   
    return (
        <div>
            <h1>Use PreventLeave</h1>
            <div>
                <button onClick={enablePrevent}>창 닫기 보호</button>
                <button onClick={disablePrevent}>창 닫기 보호 해제</button>
            </div>
        </div>
    );
}

export default UsePreventLeave;
