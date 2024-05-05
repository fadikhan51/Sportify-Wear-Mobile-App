import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Button } from "react-native-paper";
const { width, height } = Dimensions.get("window");

export default InitialScreen_2 = () => {
  return (
    <View style={styles.default}>
      <View style={styles.absolute}>
        <Image
          style={styles.InitialScreen_1}
          source={require("../assets/Initial1.jpg")}
        />
      </View>
      <View style={styles.button}>
      <Button
        mode="contained"
        buttonColor="white"
        textColor="black"
        style={styles.login}
      >
        <Text style={styles.loginText}>Login</Text>
      </Button>
      <Button
        mode="outlined"
        textColor="white"
        rippleColor={"#fff"}
        style={styles.login}
      >
        <Text style={styles.loginText}>Sign Up</Text>
      </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  InitialScreen_1: {
    width: width,
    height: height,
    resizeMode: "cover",
  },
  default: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  absolute: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    position : 'absolute',
    bottom : 70,
    width : '100%',
    alignItems: 'center'
  },
  login: {
    width: "80%",
    padding: 2,
    margin: 5,
  },
  loginText: {
    fontSize: 15,
  },
});
