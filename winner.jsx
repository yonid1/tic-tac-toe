import React from "react";
import { Text, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";

export default function Winner({
  square,
  setGame,
  idSquareJ,
  idSquare,
  game,
  isPressed,
  newGame,
  setWin,
  winner,
  setWinner
}) {
  useEffect(() => {
    if (square.every((e, i) => e[idSquareJ] === game)) {
      console.log("im king");
      setWinner(game);
    }
    if (square.every((e, i) => console.log("i", e))) {
      console.log("left");
      setWinner(game);
    }
    if (square.every((w, i) => w[i] === game)) {
      console.log("right side ");
      setWinner(game);
    }
    if (square.reverse().every((w, i) => w[i] === game)) {
      console.log("left side ");
      setWinner(game);
    }
    square.map((item, index) => {
      if (item.every((g) => g === game)) {
        console.log("includes");
        setWinner(game);
      }
    });
  }, [game]);
  if (winner != null) {
    setWin(false)
    return <Text style={styles.text}>Winner {winner}</Text>
  }
  return null;
}
const styles = StyleSheet.create({
  text: { fontSize: 50, color: "red", top: -60 },
});
