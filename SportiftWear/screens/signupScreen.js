import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Button, Checkbox, TextInput, IconButton } from "react-native-paper";
import { useState } from "react";
import {
  MPLUSRounded1c_400Regular,
  MPLUSRounded1c_700Bold,
  useFonts,
} from "@expo-google-fonts/m-plus-rounded-1c";

export default SignupScreen = () => {
  const [fontsLoaded] = useFonts({
    MPLUSRounded1c_400Regular,
    MPLUSRounded1c_700Bold,
  });

  const [checked, setChecked] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfrmPass, setCnfrmPass] = useState("");

  const [validEmailIcon, setvalidEmailIcon] = useState("close");
  const [validEmailIconColor, setvalidEmailIconColor] = useState("red");

  const [validUserNameIcon, setvalidUserNameIcon] = useState("close");
  const [validUserNameIconColor, setvalidUserNameIconColor] = useState("red");

  const [invalidPass, setInvalidPass] = useState(false);
  const [invalidCnfrmPass, setInvalidCnfrmPass] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [iconName, setIconName] = useState("eye");

  const [enableSignup, setEnableSignup] = useState(true);

  const areValidFields = () => {
    return (
      (validEmailIcon == "check" ? true : false) &&
      (validUserNameIcon == "check" ? true : false) &&
      !invalidPass &&
      !invalidCnfrmPass &&
      checked
    );
  };

  const setEmailTxt = (value) => {
    setEmail(value);
    const emailRegex = /^[a-zA-Z][\w\.-]+@[\w\.-]+\.\w+$/;
    if (emailRegex.test(value)) {
      setvalidEmailIcon("check");
      setvalidEmailIconColor("#90ee90");
    } else {
      setvalidEmailIcon("close");
      setvalidEmailIconColor("#FF7F7F");
    }

    setEnableSignup(areValidFields());
  };

  const setUserNameTxt = (value) => {
    setUserName(value);

    const userNameRegex = /^[A-Za-z][A-Za-z0-9_]{5,25}$/;

    if (userNameRegex.test(value)) {
      setvalidUserNameIcon("check");
      setvalidUserNameIconColor("#90ee90");
    } else {
      setvalidUserNameIcon("close");
      setvalidUserNameIconColor("#FF7F7F");
    }

    setEnableSignup(areValidFields());
  };

  const setPasswordTxt = (value) => {
    setPassword(value);
    regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (regex.test(value)) {
      setInvalidPass(false);
    } else {
      setInvalidPass(true);
    }

    setEnableSignup(areValidFields());
  };

  const setCnfrmPassTxt = (value) => {
    setCnfrmPass(value);

    regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (regex.test(value) && value == password) {
      setInvalidCnfrmPass(false);
    } else {
      setInvalidCnfrmPass(true);
    }

    setEnableSignup(areValidFields());
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
    setIconName(secureTextEntry ? "eye-off" : "eye");
  };

  return (
    <ScrollView
      alwaysBounceVertical={false}
      automaticallyAdjustKeyboardInsets={true}
      contentContainerStyle={styles.default}
    >
      <View style={styles.logoDiv}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>

      <View style={styles.welcomeDiv}>
        <Text style={styles.heading}>Sign Up</Text>
        <Text style={styles.text}>Create a new account</Text>
      </View>

      <View>
        <TextInput
          style={styles.txtInput}
          selectionColor="black"
          cursorColor="black"
          activeOutlineColor="black"
          mode="outlined"
          label={"User Name"}
          onChangeText={setUserNameTxt}
          right={
            userName == "" ? (
              ""
            ) : (
              <TextInput.Icon
                icon={validUserNameIcon}
                color={validUserNameIconColor}
              />
            )
          }
        />

        <TextInput
          style={styles.txtInput}
          selectionColor="black"
          cursorColor="black"
          activeOutlineColor="black"
          mode="outlined"
          label={"Email"}
          onChangeText={setEmailTxt}
          right={
            email == "" ? (
              ""
            ) : (
              <TextInput.Icon
                icon={validEmailIcon}
                color={validEmailIconColor}
              />
            )
          }
        />

        <TextInput
          style={styles.txtInput}
          selectionColor="black"
          cursorColor="black"
          activeOutlineColor="black"
          mode="outlined"
          label={"Password"}
          onChangeText={setPasswordTxt}
          secureTextEntry={secureTextEntry}
          error={invalidPass}
          right={
            <TextInput.Icon
              icon={iconName}
              color="black"
              onPress={toggleSecureEntry}
            />
          }
        />

        <TextInput
          style={styles.txtInput}
          selectionColor="black"
          cursorColor="black"
          activeOutlineColor="black"
          error={invalidCnfrmPass}
          mode="outlined"
          label={"Confirm Password"}
          onChangeText={setCnfrmPassTxt}
          secureTextEntry={secureTextEntry}
          right={
            <TextInput.Icon
              icon={iconName}
              color="black"
              onPress={toggleSecureEntry}
            />
          }
        />
      </View>

      <View style={styles.terms}>
        <Checkbox
          status={checked ? "checked" : "indeterminate"}
          color="black"
          onPress={() => {
            setChecked(!checked);
            setEnableSignup(areValidFields());
          }}
        />
        <Text style={styles.termsTxt}>Accept the terms and conditions</Text>
      </View>

      <View style={styles.btnDiv}>
        <Button
          mode="contained"
          disabled={enableSignup}
          buttonColor="black"
          style={styles.connectButton}
        >
          Sign Up
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: "MPLUSRounded1c_400Regular",
  },
  default: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoDiv: {
    position: "relative",
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
  },
  welcomeDiv: {
    width: 350,
    marginBottom: 20,
  },
  heading: {
    fontFamily: "MPLUSRounded1c_700Bold",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 5,
  },
  text: {
    fontFamily: "MPLUSRounded1c_400Regular",
    fontSize: 15,
    color: "#5A5A5A",
  },
  txtInput: {
    fontFamily: "MPLUSRounded1c_400Regular",
    width: 350,
    margin: 5,
    backgroundColor: "white",
  },
  terms: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 350,
    marginTop: 10,
  },
  termsTxt: {
    fontFamily: "MPLUSRounded1c_700Bold",
    fontWeight: "bold",
    paddingLeft: 5,
  },
  btnDiv: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  connectButton: {
    width: 350,
    padding: 5,
    margin: 5,
  },
});
