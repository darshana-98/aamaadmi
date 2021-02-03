import React,{useState} from "react";
const Counter=()=>{
const [count, setCount] = useState(1) 
const handleCount = (value) => !(count === 0 && value === -1) ? setCount(count + value) : count;


return(
<div className="mt-2">
           
            <div className="button">
              <button className="button1" onClick={() => handleCount(-1)}>-</button>
             
            <input className="new-form" value={count}></input>
            
              <button className="button2" onClick={() => handleCount(1)} >+
                
              </button>
              <style jsx>{`
            .new-form{
                width:30px;
              text-align:center;
            }
            
            `}</style>
            </div>
          </div>
)}
export default Counter;

