import React, { useEffect, useRef, useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState([-8, 6, 3, 1, -10, -9, -3]);
  // console.log("currentIndex:", currentIndex);
  const [isRunning, setIsRunning] = useState(false);
  const [intervald, setIntevalId] = useState(0);
  const intervalCount = useRef(null);
  // console.log("count:", count);

  // find out maximum positive product of 2 elements

  const clickStartHandler = (buttonType) => {
    const arr1 = [-8, 6, 3, 1, 10, 9, -3];

    const sortedArray = arr.sort((a, b) => a - b);
    const clonedArray = [...arr];
    const desSprtedArray = clonedArray.sort((a, b) => b - a);
    console.log("clonedArray:", clonedArray);
    console.log("sortedArray:", sortedArray);
    // console.log("desSprtedArray:", desSprtedArray);
    const maxAss = sortedArray[0] * sortedArray[1];
    const maxDec = desSprtedArray[0] * desSprtedArray[1];
    console.log("maxDec:", maxDec);

    console.log("maxAss:", maxAss);

    console.log(maxAss > maxDec ? maxAss : maxDec);

    // const result = arr.reduce((acc, current) => {
    //   console.log("current:", current);
    //   console.log("acc:", acc);
    //   let acc = acc * current;

    //   if (acc * current > bigger) {
    //     bigger = acc * current;
    //   }
    //   console.log("bigger:", bigger);
    //   // return bigger;

    //   // })
    // }, 0);
    // console.log("result:", result);

    // console.log("8" * "-10");

    //   var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //   console.log("Clicked");
    //   // for (val of arr) {
    //   //   console.log("val:", val);

    //   // }
    // arr.map((val) => {
    //   if(val > count){

    //   }
    // }, 0)
    // // if (buttonType === "Start") {
    // for (val of arr) {
    //   console.log("val:", val);
    //   // if(val === count) {

    //   // }
    //   if (buttonType === "Pause") break;
    //   // setCount(val);
    // }
    // // } else {
    // // }
  };
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    // console.log("isRunning:", isRunning);
    if (isRunning) {
      intervalCount.current = setInterval(() => {
        setCurrentIndex((prev) => {
          // console.log("prev:", prev);

          return (prev + 1) % arr.length;
        });
      }, 2000);
    } else {
      clearInterval(intervalCount.current);
      setCurrentIndex((prev) => prev);
    }
  }, [isRunning]);

  const handleStartEvent = () => {
    setIsRunning(true);
    const arr1 = [-8, 6, 3, 1, -10, -9, -3];
    // console.log("arr1:", arr1);
    const sortedArray = arr1.sort((a, b) => a - b);

    const biggerMultiy =
      sortedArray[0] * sortedArray[1] >
      sortedArray[sortedArray.length - 1] * sortedArray[sortedArray.length - 2]
        ? sortedArray[0] * sortedArray[1]
        : sortedArray[sortedArray.length - 1] *
          sortedArray[sortedArray.length - 2];
    // console.log("biggerMultiy:", biggerMultiy);
  };
  const handlePauseEvent = (buttontype) => {
    if (buttontype === "Pause") {
      setIsRunning(false);
    } else {
      setIsRunning(false);
      setCurrentIndex(0);
    }
  };

  const handleClick = () => {
    // console.log("Clicked");
    // Currying
    // const curriedFunc = (a) => {
    //   return (b) => a * b;
    // };
    // const baseParam = curriedFunc(5);
    // const multiplyBy9 = baseParam(9);
    // console.log("multiplyBy6:", multiplyBy9);
    // Closure
    // const func = (a) => {
    //   const variable = "String";
    //   return (b) => {
    //     console.log("variable:", variable);
    //     console.log("count:", a + b);
    //   };
    // };
    // let closureFunc = func(3);
    // closureFunc(4);
    // closureFunc(7);
    // myFunction();
    // const myFunction = function () {
    //   console.log("Hoisted");
    // };
    // const higherOrderFunction = () => {
    //   return () => {
    //     console.log("Callback function");
    //   };
    // };
    // const callbackFunc = higherOrderFunction();
    // callbackFunc();
    // const object1 = {
    //   name: "ABC",
    //   age: 25,
    //   func: "func",
    //   address: {
    //     city: "Bengaluru",
    //   },
    // };
    // const object2 = {
    //   name: "ABC",
    //   age: 25,
    //   func: "func",
    //   address: {
    //     city: "Bengaluru",
    //   },
    // };
    // const freezedObj = Object.seal(object1);
    // freezedObj.func = "Now";
    // freezedObj.time = "Mow";
    // console.log("freezedObj:", freezedObj);
    // const deepCope = JSON.parse(JSON.stringify(object1));
    // deepCope.address.city = "Chennai";
    // console.log("deepCope:", deepCope);
    // const shallowCope = { ...object2 };
    // shallowCope.address.city = "Chennai";
    // console.log("shallowCope:", shallowCope);
    // console.log("object1:", object1);
    // console.log("object2:", object2);
    // const object2 = {
    //   name: "ABC",
    //   age: 25,
    //   func: "func",
    //   address: {
    //     city: "Bengaluru",
    //   },
    // };
    // const functionModify = (obj, a) => {
    //   obj.name = "Changes";
    //   a = 20;
    //   console.log(a);
    // };
    // const object2 = {
    //   name: "ABC",
    //   age: 25,
    //   func: "func",
    //   address: {
    //     city: "Bengaluru",
    //   },
    // };
    // let a = 10;
    // console.log("a:", a);
    // functionModify(object2, a);
    // console.log(object2);
  };

  // useEffect(() => {
  //   console.log("Mounted");
  //   return console.log("Unmounted");
  // }, []);

  const handleListClick = async (e) => {
    try {
      await promise().then((res) => console.log(res));
    } catch (error) {}
  };
  const handleDelete = (val) => {
    const filteredArray = currentIndex.filter((item) => item !== val);
    setCurrentIndex(filteredArray);
  };

  const promise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Blocked async code"), 3000);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button onClick={handleClick}>Start</button>
      <button onClick={() => handlePauseEvent("Pause")}>Pause</button>
      <button onClick={() => handlePauseEvent("Reset")}>Reset</button>

      <div>{arr[currentIndex]}</div>

      <ul style={{ cursor: "pointer" }} onClick={handleListClick}>
        {currentIndex.map((val) => {
          return (
            <>
              <li>
                {val} <button onClick={() => handleDelete(val)}>Delete</button>
              </li>
              ;
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default React.memo(App);
