import { View, Text, Image, StyleSheet } from "react-native";
import { Button, TextInput, IconButton } from 'react-native-paper';
import { useState } from "react";
import {MPLUSRounded1c_400Regular, MPLUSRounded1c_700Bold, useFonts} from '@expo-google-fonts/m-plus-rounded-1c'; 

export default LoginScreen = () => {

    const [fontsLoaded] = useFonts({
        MPLUSRounded1c_400Regular,
        MPLUSRounded1c_700Bold
      });

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [iconName, setIconName] = useState("eye");
    const [validIcon, setValidIcon] = useState("cross");
    const [validIconColor, setValidIconColor] = useState("red");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
        setIconName(secureTextEntry ? "eye-off" : "eye");
      };

    const setEmailTxt = (value) => {
        setEmail(value);
        const emailRegex = /^[a-zA-Z][\w\.-]+@[\w\.-]+\.\w+$/;
        if(emailRegex.test(value)){
            setValidIcon('check');
            setValidIconColor('#90ee90');
        }
        else{
            setValidIcon('close');
            setValidIconColor('#FF7F7F');
        }
    }

    const setPasswordTxt = (value) => {
        setPassword(value);
    }

  return (
    <View style={styles.default}>
      <View style={styles.logoDiv}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>

      <View style={styles.welcomeDiv}>
        <Text style={styles.heading}>Welcome!</Text>
        <Text style={styles.text}>Please login or signup to continue our app</Text>
      </View>

      <View>
        <TextInput
            style={styles.txtInput}
            selectionColor="black"
            cursorColor="black"
            activeOutlineColor="black"
            mode="outlined"
            label={"Email"}
            onChangeText={setEmailTxt}
            right={ email=="" ? "" : 
                <TextInput.Icon icon={validIcon} color={validIconColor}/>
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
            secureTextEntry = {secureTextEntry}
            right={
                <TextInput.Icon icon={iconName} color='black'
                onPress={toggleSecureEntry}
                />
            }
        />
      </View>
      <View style={styles.btnDiv}>
        <Button mode="contained" buttonColor="black" style={styles.connectButton}>
            Login
        </Button>
        <Text style={styles.orTxt}>or</Text>
        <Button mode="contained" icon="facebook" buttonColor="#1877F2" style={styles.connectButton}>
            Continue with Facebook
        </Button>
        <Button mode="outlined" icon="google" textColor="#5A5A5A" style={styles.connectButton}>
            Continue with Google
        </Button>
        <Button mode="outlined" icon = "twitter" textColor="#5A5A5A" style={styles.connectButton}>
            Continue with Twitter
        </Button>
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'MPLUSRounded1c_400Regular',
    },
  default: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoDiv: {
    marginBottom:30,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
  },
  welcomeDiv:{
    width:350,
    marginBottom: 20
  },
  heading: {
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom:5
  },
  text: {
    fontFamily: 'MPLUSRounded1c_400Regular',
    fontSize: 15,
    color: "#5A5A5A"
  },
  btnDiv: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:40
  },
  connectButton: {
    width:350,
    padding: 5,
    margin: 5
  },
  orTxt: {
    fontFamily: 'MPLUSRounded1c_700Bold',
    fontWeight:'bold',
    margin: 5,
    fontSize: 15
  },
  txtInput: {
    fontFamily: 'MPLUSRounded1c_400Regular',
    width: 350,
    margin:5,
    backgroundColor: 'white'
  }
});
