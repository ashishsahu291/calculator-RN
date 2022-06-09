import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { Styles } from "../styles/GlobalStyles";
import Button from "./Button";
import { keyboardData } from "../../data";
import { myColors } from "../styles/Colors";

const Keyboard = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);

  const handleNumberPress = (btnValue) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + btnValue);
    }
  };

  const handleOperation = (btnValue) => {
    setOperation(btnValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result > 99999
              ? [Styles.screenFirstNumber, { color: myColors.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 50, color: myColors.result },
                ]
          }
        >
          {result}
        </Text>
      );
    }

    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }

    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }

    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }

    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
            {operation}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        {keyboardData.firstRow.map((btn, index) => (
          <Button
            key={index}
            isGrey={btn.isGrey}
            isBlue={btn.isBlue}
            title={btn.title}
            onPress={() =>
              btn.title === "C" ? clear() : handleOperation(btn.title)
            }
          />
        ))}
      </View>
      <View style={Styles.row}>
        {keyboardData.secondRow.map((btn, index) => (
          <Button
            key={index}
            isGrey={btn.isGrey}
            isBlue={btn.isBlue}
            title={btn.title}
            onPress={() =>
              btn.isBlue
                ? handleOperation(btn.title)
                : handleNumberPress(btn.title)
            }
          />
        ))}
      </View>
      <View style={Styles.row}>
        {keyboardData.thirdRow.map((btn, index) => (
          <Button
            key={index}
            isGrey={btn.isGrey}
            isBlue={btn.isBlue}
            title={btn.title}
            onPress={() =>
              btn.isBlue
                ? handleOperation(btn.title)
                : handleNumberPress(btn.title)
            }
          />
        ))}
      </View>
      <View style={Styles.row}>
        {keyboardData.fourthRow.map((btn, index) => (
          <Button
            key={index}
            isGrey={btn.isGrey}
            isBlue={btn.isBlue}
            title={btn.title}
            onPress={() =>
              btn.isBlue
                ? handleOperation(btn.title)
                : handleNumberPress(btn.title)
            }
          />
        ))}
      </View>
      <View style={Styles.row}>
        {keyboardData.fivthRow.map((btn, index) => (
          <Button
            key={index}
            isGrey={btn.isGrey}
            isBlue={btn.isBlue}
            title={btn.title}
            onPress={() =>
              btn.isBlue
                ? getResult(btn.title)
                : btn.title === "⌫"
                ? setFirstNumber(firstNumber.slice(0, -1))
                : handleNumberPress(btn.title)
            }
          />
        ))}
      </View>
    </View>
  );
};

export default Keyboard;
