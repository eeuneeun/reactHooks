import React,{useEffect, useState} from 'react';

const useNetwork = onChange =>{
    const [status, setStatus ] = useState(navigator.onLine);

    const handleChange = () => {
        if(typeof  onChange === "function"){
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    }

    useEffect(()=>{
       window.addEventListener("online", handleChange);
       window.addEventListener("offline", handleChange);
       
       return ()=>{
        window.removeEventListener("online", handleChange);
        window.removeEventListener("offline", handleChange);
       }
    }, []);

    return status;
  }

const UseNetwork = () => {
    const handleNetworkChange = (online) => {
        console.log( online ? "온라인" : "오프라인" )
    }
    const onLine = useNetwork(handleNetworkChange);
   
    return (
        <div>
            <h1>Use Network</h1>
            <div>{ onLine ? "online" : "offline" }</div>
        </div>
    );
}

export default UseNetwork;
