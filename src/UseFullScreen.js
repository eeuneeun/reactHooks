import React,{useEffect, useRef, useState} from 'react';

const useFullScreen = () => {
   const element = useRef();
   const triggerFull = () =>{
        if(element.current){
            console.log("1")
            element.current.requestFullscreen()
        }
   }
   const exitFull = () => {
            console.log("2")
            document.exitFullscreen();
   }
   return {element, triggerFull, exitFull};
}

const UseFullScreen = () => {
    const {fullEl, triggerFull, exitFull} = useFullScreen();
    return (
        <div>
            <h1>Use Full Screen</h1>
            <div>
                <img ref={fullEl} src="http://archivenew.vop.co.kr/images/737571c74f46a88546f8cf6897011ba5/2011-09/30022744_boo0900.jpg" />
                <button onClick={triggerFull}>이미지 크게보기</button> 
                <button onClick={exitFull}>이미지 원래 크기로 보기</button> 
            </div>
        </div>
    );
}

export default UseFullScreen;
