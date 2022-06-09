import { StyleSheet, Text, View, Switch } from "react-native";
import { useState } from "react";
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/styles/Colors";
import Keyboard from "./src/components/Keyboard";
import { SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaProvider>
        <View
          style={
            theme === "light"
              ? styles.container
              : [styles.container, { backgroundColor: "#000" }]
          }
        >
          <Switch
            value={theme === "light"}
            onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <Keyboard />
        </View>
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
