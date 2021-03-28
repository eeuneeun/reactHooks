import React,{useEffect, useRef} from 'react';


const propsChk = (duration, delay) => {
    if(typeof duration !== "number" || typeof delay !== "number" ){
        return;
    }
}
const useFadein = (duration = 1, delay = 0) =>{
    propsChk(duration, delay);
    
    const el = useRef();
   useEffect(()=>{
    if(el.current){
        const {current} = el;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
    }
   },[])
   
   return { ref : el, style : {opacity: 0}};
}

const UseFadein = () => {
    const fadeinDiv = useFadein(5, 10);
    const fadeinP = useFadein(10, 1);
    return (
        <div>
            <h1>Use Fadein</h1>
            <div {...fadeinDiv}>
                페이드 인 효과1 !
            </div>
            <p {...fadeinP}>
                페이드 인 효과2 !
            </p>
        </div>
    );
}

export default UseFadein;
