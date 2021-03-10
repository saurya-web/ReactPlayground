import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"

function Clock() {
  const styles = { even: { color: "blue" }, odd: { color: "red" } };

  const [time, setTime] = useState(new Date());
  const count = useSelector(state => state.increaseDecreaseReducer)

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
    //return () => {
    //    console.log("clean up ran." + new Date().toLocaleTimeString())
    //}
  });
  return (
    <p>
      <h3 style={time.getSeconds() % 2 === 0 ? styles.even : styles.odd}>
        Time Now Is {time.toLocaleTimeString()}
        &nbsp;Count: {count}
      </h3>
    </p>
  );
}

export default Clock;
