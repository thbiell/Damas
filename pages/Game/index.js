import { View, StyleSheet, Text } from "react-native"
import CheckersTable from "../../components/CheckersTable";
import CheckersCell from "../../components/CheckersTable/CheckersCell";
import { clickedCell } from "../../reducer/gameReducer/gameSlice";
import { useDispatch } from "react-redux";

const Game = () => {
    
    return (
        <View style={styles.container}>
          <Text>
            GAME
          </Text>
          <CheckersTable />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F0F8FF",
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Game;

