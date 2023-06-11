import { useState, useEffect } from "react";
import Values from "values.js";
import { IValues } from "./types";
import SingleColor from "./components/SingleColor";

function App() {
  const [color, setColor] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [list, setList] = useState<IValues[]>(new Values("#f15025").all(10));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!color) {
      return;
    }
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
      console.log(list);
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
