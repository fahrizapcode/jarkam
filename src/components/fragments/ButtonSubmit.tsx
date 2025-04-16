"use client";

import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
  buttonColor: string;
  width: number;
  textContent: string;
  buttonColorActive: string;
  height: number;
  fontSize: number;
}

export default function Button({
  buttonColor,
  buttonColorActive,
  width,
  textContent,
  height,
  fontSize,
}: ButtonProps) {
  const [buttonColorState, setButtonColorState] = useState(buttonColor);
  return (
    <button
      style={{
        backgroundColor: buttonColorState,
        width: width,
        height: height,
        borderRadius: 5,
        cursor: "pointer",
        transition: "0.5s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid" + buttonColor,
        border: "none",
        outline: "none",
      }}
      className="button"
      onClick={() => {
        setButtonColorState(buttonColorActive);
        setTimeout(() => {
          setButtonColorState(buttonColor);
        }, 250);
      }}
    >
      <p style={{ color: "white", fontSize: fontSize }}>{textContent}</p>
    </button>
  );
}
