import {
  StatusBar,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Square from "./square";
import Winner from "./winner";

import { useState } from "react";
export default function App() {
  const [square, setSquare] = useState(
    Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null))
  );
  const [game, setGame] = useState();
  const [next, setNext] = useState("x");
  const [isPressed, setIsPressed] = useState(false);
  const [win, setWin] = useState(true);
  const [idSquare, setIdSquare] = useState(0);
  const [idSquareJ, setIdSquareJ] = useState(0);
  const [winner, setWinner] = useState(null);

console.log("win",win);
  function newGame() {
    console.log("new game");
    setNext("x");
    setGame(null);
    setWinner(null)
    setSquare(
      Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null))
    ),
      setIsPressed(false),
      setWin(true);
  }
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        {square.map((item, index) => {
          return item.map((a, b) => {
            const keys =
              index +
              b +
              new Date().getTime() +
              Math.floor(Math.random() * 100000);
            return (
              <TouchableOpacity
                key={keys}
                style={styles.square}
                onPress={ () => {
                  if(win===true){

                    setIsPressed(true);
  
                    setIdSquare(index);
                    setIdSquareJ(b);
  
                    if (a === null) {
                      console.log("if null", a);
                      setGame("x");
                      setNext("o");
                    } else {
                      return;
                    }
                    if (game === "x") {
                      setGame("o");
                      setNext("x");
                    }
                    if (game === "o") {
                      setGame("x");
                    }
                  }
                }}
              >
                <Square
                  setSquare={setSquare}
                  item={a}
                  square={square}
                  game={game}
                  indexb={b}
                  index={index}
                  idSquareJ={idSquareJ}
                  isPressed={isPressed}
                  setIsPressed={setIsPressed}
                  idSquare={idSquare}
                ></Square>
              </TouchableOpacity>
            );

            // })
          });
        })}
        <Winner
        setGame={setGame}
          idSquareJ={idSquareJ}
          idSquare={idSquare}
          setWin={setWin}
          newGame={newGame}
          game={game}
          winner={winner}
          setWinner={setWinner}
          isPressed={isPressed}
          square={square}
        ></Winner>
      </View>
      <Text style={styles.text}>next player {next}</Text>
      <Button title="new game" onPress={() => newGame()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",

    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  square: {
    borderWidth: 1,

    width: 100,
    height: 100,
  },
  text: {
    fontSize: 50,
    top: -55,
    left: 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
