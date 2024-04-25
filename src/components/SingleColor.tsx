import { useState, useEffect } from "react";
// import { rgbToHex } from "../util";
import { IValues } from "../types";

interface SingleColorProps {
  color: IValues;
  index: number;
}

/**
 * Represents a single color component.
 *
 * @param {Object} props - The component props.
 * @param {Color} props.color - The color object containing RGB, weight, and hex values.
 * @param {number} props.index - The index of the color component.
 * @returns {JSX.Element} The rendered SingleColor component.
 */
const SingleColor = ({ color, index }: SingleColorProps) => {
  const { rgb, weight, hex } = color;
  const [alert, setAlert] = useState<boolean>(false);

  /**
   * Converts the RGB array to a string representation of the color.
   *
   * @param {number[]} rgb - The RGB array representing the color.
   * @returns {string} The string representation of the color.
   */
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
