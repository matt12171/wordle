import Button from "react-bootstrap/Button";
import { useEffect } from "react";

export const Keyboard = (props) => {
  const styles = {
    button: {
      width: "5%",
      textAlign: "center",
      margin: "2px", // Add some spacing between buttons
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    row: {
      display: "flex",
      justifyContent: "center",
    },
  };

  // Example array of key values for each row
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      if (/[A-Z]/.test(key) && key.length === 1 && props.input.length < 5) {
        props.setInput(props.input + key.toLowerCase());
      } else if (key === "BACKSPACE") {
        props.setInput(props.input.slice(0, props.input.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [props.input, props.setInput]);

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {row.map((key) => (
            <Button
              key={key}
              variant="dark"
              style={styles.button}
              onClick={() => {
                props.setInput(props.input + key.toLowerCase());
              }}
            >
              {key}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};
