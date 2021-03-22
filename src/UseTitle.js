import React,{useEffect, useState} from 'react';


const useTitle = (initialTitle) =>{
    const [title, setTitle] = useState(initialTitle); 
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]); 
    return setTitle;
}

const UseTitle = () => {
    const titleUpdater = useTitle("로딩중!")
    setTimeout(() => titleUpdater("로딩끝!"), 2000);
    return (
        <div>
            <h1>Use Title</h1>
            <div>
                아주 나이스한 페이지 입니다!
            </div>
        </div>
    );
}

export default UseTitle;
