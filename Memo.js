import React, { useState, useMemo } from "react";
import Todos from './Todos'

const Memo = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log(num);
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };


  const checkData = useMemo(() => {
    // return countNumber(myNum);
    return 1;
  }, [myNum]);

  return (
    <>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p> My new number : {checkData} </p>
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}
      </button>
      <Todos />
    </>
  );
};

export default Memo;
