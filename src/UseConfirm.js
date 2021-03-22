import React,{useEffect, useRef} from 'react';


const useConfirm  = (msg = "", onConfirm, onCancel) =>{
    if(onConfirm && typeof onConfirm !== "function"){
        return;
    }
    const confirmAction = () => {
        if(window.confirm(msg)){
            onConfirm();
        }else{
            onCancel();
        }
    }
    return confirmAction;
}

const UseConfirm  = () => {
    const del = () => console.log("del")
    const abort = () => console.log("abort")
    const confirmDel = useConfirm("진짜로 삭제하시겠습니까?", del, abort )
    return (
        <div>
            <h1>Use Confirm</h1>
            <div>
                <button onClick={confirmDel}>Delete World</button>
            </div>
        </div>
    );
}

export default UseConfirm;
