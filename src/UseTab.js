import React,{useState} from 'react';

const content = [
    {
        tab : "탭1",
        contents : "탭1번의 내용입니다!"
    },
    {
        tab : "탭2",
        contents : "탭2번의 내용입니다!"
    },
]

const useTabs=(initialTab, allTabs)=>{
    const [currentIdx, setCurrentIdx] = useState(initialTab);
    // if(!allTabs || Array.isArray(allTabs)){
    //     return;
    // }

    return{
        currenItem : allTabs[currentIdx],
        chageItem : setCurrentIdx
    };
}

const UseTab = () => {
    const {currenItem, chageItem } = useTabs(0, content)
   return (
    <div>
        <h1>Tab Hook</h1>
        <div>
            {content.map((section, idx) => (
                    <button key={idx} onClick={() => chageItem(idx)}>{section.tab}</button>
                )   
            )}
            <p>{currenItem.contents}</p>
        </div>

    </div>
  );
}

export default UseTab;
