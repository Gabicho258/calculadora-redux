import React, { useState } from "react";
import "./Calculadora.css";
import { useDispatch, useSelector } from "react-redux";
import { setResultado } from "../redux/actions";

export const Calculadora = () => {
  const defaultStyle = {
    width: "6.5rem",
    height: "6.5rem",
  };
  const [expression, setExpression] = useState("0");
  const dispatch = useDispatch();
  const operationsHistory = useSelector(
    (state) => state.operationsReducer.resultados
  );
  // console.log(operationsHistory);
  const handleClick = (target) => {
    setExpression((expression === "0" ? "" : expression) + target.value);
  };
  const handleResult = () => {
    try {
      let result;
      if (expression.includes("+")) {
        const numbers = expression.split("+").map((value) => parseFloat(value));
        result = numbers[0] + numbers[1];
      }
      if (expression.includes("-")) {
        const numbers = expression.split("-").map((value) => parseFloat(value));
        result = numbers[0] - numbers[1];
      }
      if (expression.includes("x")) {
        const numbers = expression.split("x").map((value) => parseFloat(value));
        result = numbers[0] * numbers[1];
      }
      if (expression.includes("/")) {
        const numbers = expression.split("/").map((value) => parseFloat(value));
        result = numbers[0] / numbers[1];
      }
      if (isNaN(result)) {
        throw new Error("Syntax Error");
      }

      setExpression(result);
      // console.log(result);
      const oldResults = operationsHistory || [];
      dispatch(setResultado([...oldResults, expression + "=" + result]));
      console.log();
    } catch (error) {
      setExpression(error.message);
      setTimeout(() => {
        setExpression("0");
      }, 900);
    }
  };
  console.log(operationsHistory);
  return (
    <div className="calculadora">
      <div className="mainCalculator">
        <p className="result">{expression}</p>
        <input
          style={defaultStyle}
          type="button"
          value="C"
          onClick={() => {
            setExpression("0");
          }}
        />
        <input
          style={defaultStyle}
          type="button"
          value="/"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={defaultStyle}
          type="button"
          value="x"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={defaultStyle}
          type="button"
          value="DEL"
          onClick={() => {
            setExpression(expression.slice(0, expression.length - 1));
          }}
        />
        <input
          style={defaultStyle}
          type="button"
          value="7"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={defaultStyle}
          type="button"
          value="8"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={defaultStyle}
          type="button"
          value="9"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={defaultStyle}
          type="button"
          value="-"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={defaultStyle}
          type="button"
          value="4"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={defaultStyle}
          type="button"
          value="5"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={defaultStyle}
          type="button"
          value="6"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={defaultStyle}
          type="button"
          value="+"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={defaultStyle}
          type="button"
          value="1"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={defaultStyle}
          type="button"
          value="2"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={defaultStyle}
          type="button"
          value="3"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={{ ...defaultStyle, height: "13.5rem" }}
          type="button"
          value="="
          onClick={handleResult}
        />
        <input
          style={{ ...defaultStyle, width: "13.5rem", marginTop: "-7rem" }}
          type="button"
          value="0"
          onClick={({ target }) => handleClick(target)}
        />
        <input
          style={{ ...defaultStyle, marginTop: "-7rem" }}
          type="button"
          value="."
          onClick={({ target }) => handleClick(target)}
        />
      </div>
      <div className="history">
        <h1>Historial</h1>
        <div className="history__container">
          {operationsHistory
            ?.map((operation, i) => {
              return (
                <div className="operationHistory" key={i}>
                  {operation}
                </div>
              );
            })
            .reverse()}
        </div>
      </div>
    </div>
  );
};
