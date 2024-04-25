import { useState, useEffect } from "react";
import Values from "values.js";
import { IValues } from "./types";
import SingleColor from "./components/SingleColor";

/**
 * The main component of the color generator application.
 * Renders a form to input a color and displays a list of generated colors.
 */
function App() {
  const [color, setColor] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState<IValues[]>(new Values("#f15025").all(10));

  /**
   * Handles the form submission event.
   *
   * @param e - The form event object.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!color) {
      return;
    }
    try {
      // ? This is a new instance of the Values class from the values.js library that takes a color as an argument and generates 10 shades of that color
      const colors = new Values(color).all(10);
      // ? This is a setter function that will update the list state with the new colors
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  //? This is a useEffect that will run when the error state changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <>
      <section className="container">
        <h3>color generator</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="colorpicker" className={`${error ? "error" : null}`}>
            hex
          </label>
          <input
            type="color"
            id="colorpicker"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button
            className={`btn`}
            style={{
              backgroundColor: color && color,
            }}
            type="submit"
          >
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} color={color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
