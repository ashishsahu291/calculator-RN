import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Styles } from "../styles/GlobalStyles";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TouchableOpacity } from "react-native";

const Button = ({ title, onPress, isBlue, isGrey }) => {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGrey
          ? Styles.btnGray
          : theme === "light"
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGrey
            ? Styles.smallTextLight
            : theme === "dark"
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
