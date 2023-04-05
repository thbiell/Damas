import { StyleSheet, View, Pressable, Text, Image } from "react-native";


const dama = require(`../../assets/dama.png`);
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>
            Damas
        </Text>
        <Image source={dama} style={styles.image}/>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.buttonText}>2 Jogadores</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.buttonText}>VS Computador</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Game")}
      >
        <Text style={styles.buttonText}>VS Amigo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    height: 70,
    justifyContent: "center",
    width: 200,
    backgroundColor: "#D8BFD8",
    marginTop: 30
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText:{
    fontSize: 35,
    fontWeight: "bold",
    color: "#000000",
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 32,
    marginBottom: 16,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#4B0082",
  },
});

export default Home;
