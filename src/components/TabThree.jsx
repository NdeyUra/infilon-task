import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const TabThree = () => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);
    setInputValue(value);
  };

  const printHelloTask = (count, result = []) => {
    if (count <= 0) {
      return [...result, "STOP"];
    }
    return printHelloTask(count - 1, [...result, "Hello Task"]);
  };

  const handleSubmit = () => {
    if (inputValue === "" || inputValue < 0) {
      alert("Please enter a valid positive number");
      return;
    }

    const result = printHelloTask(inputValue);
    setOutput(result);
  };

  return (
    <div className="tab-content">
      <div className="recursion-task">
        <h2>Recursive Task</h2>
        <div className="input-container">
          <TextField
            label="Enter a number"
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            fullWidth
            InputProps={{ inputProps: { min: 0 } }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Print
          </Button>
        </div>

        <div className="output-container">
          {output.map((item, index) => (
            <div
              key={index}
              className={`output-item ${item === "STOP" ? "stop" : ""}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabThree;
