import { Board } from "./Board";
import { Keyboard } from "./Keyboard";
import { useState } from "react";

export const Body = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <Board input={input} />
      <Keyboard setInput={setInput} input={input} />
    </div>
  );
};
