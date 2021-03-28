import React,{useEffect, useState} from 'react';

const useScroll = () => {
    const [state, setState] = useState({
        x:0,
        y:0
    });
    const onScroll =(e)=>{
        console.log(e)
        setState({
            y :  window.scrollY, x : window.scrollX 
        })
    }
    useEffect(()=>{
        window.addEventListener("scroll", onScroll)
        return ()=> window.removeEventListener("scroll", onScroll);
    },[])

    return state;
}

const UseScroll = () => {
    const {y} = useScroll();
    return (
        <div>
            <h1 style={{position : "fixed", top:"0", right:"0", color : y > 100 ? "red" : "blue"}}>Use Scroll</h1>
        </div>
    );
}

export default UseScroll;
