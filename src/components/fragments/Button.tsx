"use client";

import { useState } from "react";

interface ButtonProps {
  buttonColor: string;
  width: number;
  textContent: string;
  buttonColorActive: string;
}

export default function Button({
  buttonColor,
  buttonColorActive,
  width,
  textContent,
}: ButtonProps) {
  const [buttonColorState, setButtonColorState] = useState(buttonColor);
  return (
    <div
      style={{
        backgroundColor: buttonColorState,
        width: width,
        height: 36,
        borderRadius: 5,
        cursor: "pointer",
        transition: "0.5s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid" + buttonColor,
      }}
      className="button"
      onClick={() => {
        setButtonColorState(buttonColorActive);
        setTimeout(() => {
          setButtonColorState(buttonColor);
        }, 250);
      }}
    >
      <p style={{ color: "white", fontSize: 20 }}>{textContent}</p>
    </div>
  );
}
