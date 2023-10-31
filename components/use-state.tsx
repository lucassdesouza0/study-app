import Link from "next/link";
import React, { useEffect, useState } from "react";
import CodeBlocksComp from "./code-block";

const PRICE_PER_ITEM: number = 5;

export function UseStateMultipleCallsLoop() {
  const [count, setCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setTotalPrice(count * PRICE_PER_ITEM);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
      }}
    >
      <p>
        In this case the we're just scheduling the state changes, but they only
        happen in the future
      </p>
      <CodeBlocksComp
        code={`const handleClick = () => {
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
          };`}
        language={"javascript"}
        showLineNumbers={true}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <button
          className="text-bg-primary px-4 py-2 text-white rounded"
          onClick={handleClick}
        >
          Click me to add 1
        </button>
        <p className="m-2">Count is: {count}</p>
        <p className="m-2">Total Price is: {totalPrice}</p>
      </div>
    </div>
  );
}

export function UseStateMultipleCallsWithPrevValue() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
      }}
    >
      <p>
        We want to make sure that we're using the most recent value for the
        operation, in this case we need to pass a callback to the setCount
        method that receives the previous value
      </p>
      <CodeBlocksComp
        code={`const handleClick = () => {
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
          };`}
        language={"javascript"}
        showLineNumbers={true}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <button
          className="text-bg-primary px-4 py-2 text-white rounded"
          onClick={handleClick}
        >
          Click me to add 4 (in sequence)
        </button>
        <p className="m-2">Count is: {count}</p>
      </div>
    </div>
  );
}

export function UseStateInformationDerivedWithUseEffect() {
  const [quantity, setQuantity] = React.useState(1);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleClick = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    setTotalPrice(quantity * PRICE_PER_ITEM);
  }, [quantity]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
      }}
    >
      <p>
        Normally in this situations we end up using useEffect to calculate the
        derived value after the state changes.
      </p>
      <CodeBlocksComp
        code={`        const PRICE_PER_ITEM = 5;

        const [quantity, setQuantity] = React.useState(1);
        const [totalPrice, setTotalPrice] = React.useState(0);
      
        const handleClick = () => {
          setQuantity(quantity + 1);
        };
      
        useEffect(() => {
          setTotalPrice(quantity * PRICE_PER_ITEM);
        }, [quantity]);`}
        language={"javascript"}
        showLineNumbers={true}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <button
          className="text-bg-primary px-4 py-2 text-white rounded"
          onClick={handleClick}
        >
          Add 1 item
        </button>
        <p className="m-2">Total price: {totalPrice}</p>
      </div>
    </div>
  );
}

export function UseStateInformationDerived() {
  const [quantity, setQuantity] = React.useState(1);
  const totalPrice = quantity * PRICE_PER_ITEM;

  const handleClick = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "10px",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
      }}
    >
      <p>
        But we can also calculate the derived value without using useEffect,
        because when the state changes the component will re-render and the
        derived value will be updated.
      </p>
      <CodeBlocksComp
        code={`        const [quantity, setQuantity] = React.useState(1);
        const totalPrice = quantity * PRICE_PER_ITEM;
      
        const handleClick = () => {
          setQuantity(quantity + 1);
        };`}
        language={"javascript"}
        showLineNumbers={true}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <button
          className="text-bg-primary px-4 py-2 text-white rounded"
          onClick={handleClick}
        >
          Add 1 item
        </button>
        <p className="m-2">Total price: {totalPrice}</p>
      </div>
    </div>
  );
}
