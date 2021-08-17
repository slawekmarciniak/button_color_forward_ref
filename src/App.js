import React, { useRef, useLayoutEffect } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const styledButton = useRef(null);

  useLayoutEffect(() => {
    styledButton.current.style.backgroundColor = "red";
  });

  // useEffect(() => {
  //   styledButton.current.style.backgroundColor = "red";
  // }, []);

  const addButtonColor = () => {
    styledButton.current.style.color = "white";
  };
  const removeButtonColor = () => {
    styledButton.current.style.color = "black";
  };

  return (
    <div className="App">
      <Button
        ref={styledButton}
        addColor={addButtonColor}
        removeColor={removeButtonColor}
      >
        HELLO
      </Button>
    </div>
  );
}

export default App;
