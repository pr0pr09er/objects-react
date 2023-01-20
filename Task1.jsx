import React from "react";
import { useState } from "react";

function Task1() {
  const [obj, setObj] = useState({
    prop1: "val1",
    prop2: "val2",
    prop3: "val3",
  });
  return (
    <div>
      <button
        onClick={() => {
          setObj({...obj, ...{prop1: "1"}});
        }}
      />
      <button
        onClick={() => {
          setObj({...obj, ...{prop2: "2"} });
        }}
      />
      <button
        onClick={() => {
          setObj({...obj, ...{prop3: "3"}});
        }}
      />
      {Object.values(obj).map((item) => (
        <span>{item}</span>
      ))}
    </div>
  );
}

export default Task1;
