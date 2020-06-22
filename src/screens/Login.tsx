import React from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,CheckBox} from "react-native";
import { StackNavigationProp }from "@react-navigation/stack";
import {RockStackParamList} from "../utils/types";
import style from "../styles/colors";
import {LinearGradient} from "expo-linear-gradient";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
import GradientButton from "../components/GradientButton";
import colors from "../styles/colors";

type ProfileScreenNavigationProp = StackNavigationProp<
  RockStackParamList,
  'Login'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};


const Login:React.FC<Props> = ({navigation}) => {
  return(
    <View style={{borderColor: "red",borderWidth: 2,flex:1,paddingVertical: 40,paddingHorizontal: 30}}>
      <Form title="Login" message="Welcome to Home My Friend">
        <LocalForm/>
        <Text style={{textAlign: "center"}}>Don't have an account?</Text>
        <Text style={{textAlign: "center"}}>
          Please {" "}
          <Text  style={{color: "blue"}} onPress={() => navigation.navigate("Register")}>Signup</Text>
        </Text>
      </Form>
      <Button title="log in with facebook" color={style.facebookColor} backgroundColor={style.facebookBackgroundColor}/>
      <Button title="log in with google" color={style.googleColor} backgroundColor={style.googleBackgroundColor}/>
    </View>
  )
}

export default Login;

function LocalForm(){
  return(
    <View style={{flex: 1, borderColor: "blue",borderWidth: 1}}>
        <View style={{flexGrow:1,flexShrink:0,flexBasis: 50,paddingVertical: 10}}>
          <Input placeholder="Email"/>
          <Input placeholder="Password"/>
        </View>
        <View style={{flex:1}}>
          <GradientButton title="Login"/>
        </View>
        <View style={{flex:1,justifyContent: "flex-start", borderColor: "purple",borderWidth: 2}}>
          <View style={{flexGrow:0,flexDirection: "row"}}>
            <CheckBox/>
            <Text style={{color: colors.fadingColor}}>Remember Password</Text>
          </View>
          <Text style={{flexGrow:0,color: colors.fadingColor}}>
            Forget Password?
          </Text>
        </View>    
      </View>
  )
}