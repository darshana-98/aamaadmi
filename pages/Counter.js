import React , {useState,memo} from "react";
const Num =() =>{
  
  const [Num,setCount]=useState(1);
  console.log(Num,"Num");
  return(
    <div>
      
      <h3>{Num}</h3>
      <button onClick={()=>setCount(Num-1)}>-</button>
      <button onClick={()=>setCount(Num+1)}>+</button>
      
  
    </div>
  )
}
export default memo(Num);
