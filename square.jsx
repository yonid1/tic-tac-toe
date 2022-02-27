import React, { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
export default function Square({
  idSquareJ,
  setIsPressed,
  isPressed,
  square,
  item,
  idSquare,
  game,
  setSquare,
}) {
  if (square[idSquare][idSquareJ] === null && isPressed) {
    setIsPressed(false);
    let items = [...square];
    items[idSquare][idSquareJ] = game;
    setSquare(items);
  }

  return <Text style={styles.text}>{item}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 90,
    top: -15,
    left: 15,
  },
});
