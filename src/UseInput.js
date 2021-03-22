import React,{useState} from 'react';

const useInputs = (initialValue, validator) => {
    const [value, setVal] = useState(initialValue);
    
    const onChange = e =>{
        const {
            target : {value}
        } = e
        let willUpdate = true
        
        if(typeof validator === "function"){
            willUpdate = validator(value)
        }
        if(willUpdate){
            setVal(value)
        }
    }

    return {value, onChange}
}

const UseInput = () => {
    const maxLen = value => value.length <= 10;
    const needChar = value => value.includes('@');
    const name = useInputs("Mr.", maxLen);
    const email = useInputs("E-mail", needChar);

   return (
    <div>
      <h1>Input Hook</h1>
      {/* <input placeholder="이름"  value={name.value} onChange={name.onChange}/> */}
      <input placeholder="이름" {...name}/>
      <br />
      <input placeholder="이메일" {...email} />
      <p>{name.value}</p>
    </div>
  );
}

export default UseInput;
