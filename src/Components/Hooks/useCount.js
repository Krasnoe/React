import { useState } from "react"; 

export function useCount() {
  const [count, setCount] = useState(1);

  const onChange = (event) => {
    let count1 = +event.target.value;
    if(count1 < 1){
      count1 = 1;
    } else if (count > 99) {
      count1 = 99;
      setCount(event.target.value);
    }
  }
  return { count, setCount, onChange };
}