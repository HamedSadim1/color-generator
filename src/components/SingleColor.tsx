import React, { useState, useEffect } from "react";
// import { rgbToHex } from "../util";
import { IValues } from "../types";

interface SingleColorProps {
  color: IValues;
  index: number;
}

const SingleColor = ({ color, index }: SingleColorProps) => {
  const { rgb, weight, hex } = color;
  const [alert, setAlert] = useState<boolean>(false);

  const bcg = rgb.join(",");

  const hexValue = `#${hex}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      key={index}
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>

      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
