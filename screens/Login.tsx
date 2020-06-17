import React from "react";
import {View,Text,TextInput,Button,TouchableOpacity,StyleSheet,CheckBox} from "react-native";
import { StackNavigationProp }from "@react-navigation/stack";
import {RockStackParamList} from "../utils/types";
import style from "../styles/colors";
import {LinearGradient} from "expo-linear-gradient";

type ProfileScreenNavigationProp = StackNavigationProp<
  RockStackParamList,
  'Login'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const fadingColor = "#9C9C9C";

let styles = StyleSheet.create({
  inputSelection:{
      borderColor: fadingColor,
      borderBottomWidth: 1,
      marginVertical: 10,
      flex:1
  },
  input:{
    height: "100%",
    paddingLeft: 10
  }
})

export default function({navigation}: Props){
  
  return(
    <View style={{borderColor: "red",borderWidth: 2,flex:1}}>
      <Text style={{color:"#333",fontSize: 30,fontWeight: "bold"}}>Login</Text>
      <Text style={{color: fadingColor}}>Welcome to Home My Friend!</Text>
      <Form/>
      <Text style={{textAlign: "center"}}>Don't have an account?</Text>
      <Text style={{textAlign: "center"}}>
        Please {" "}
        <Text  style={{color: "blue"}} onPress={() => navigation.navigate("Register")}>Signup</Text>
      </Text>

      <TouchableOpacity style={{backgroundColor: style.facebookBackgroundColor}}>
        <Text style={{color: style.facebookColor}}>
          log in with facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: style.googleBackgroundColor}}>
        <Text style={{color: style.googleColor}}>
          log in with google
        </Text>
      </TouchableOpacity>
    </View>
  )
}


function Form(){
  return(
    <View style={{flex: 1, borderColor: "blue",borderWidth: 1}}>
        <View style={{flexGrow:1,flexShrink:0,flexBasis: 50,paddingVertical: 10}}>
          <View style={styles.inputSelection}>
            <TextInput
              style={styles.input}
              placeholder="Email"
            />
          </View>
          <View style={styles.inputSelection}>
            <TextInput
              style={styles.input}
              placeholder="Password"
            />
          </View>
        </View>
        <View style={{flex:1}}>
          <LinearGradient
            colors={[style.topGradientColor,style.bottomGradientColor]} 
            style={{flexGrow:0,backgroundColor: "purple",height: "60%", maxHeight: 100,justifyContent: "center"}}>
            <Text style={{color: "white",textAlign: "center"}}>Login</Text>
          </LinearGradient>
        </View>
        <View style={{flex:1,justifyContent: "flex-start", borderColor: "purple",borderWidth: 2}}>
          <View style={{flexGrow:0,flexDirection: "row"}}>
            <CheckBox/>
            <Text style={{color: fadingColor}}>Remember Password</Text>
          </View>
          <Text style={{flexGrow:0,color: fadingColor}}>
            Forget Password?
          </Text>
        </View>
      
      </View>
  )
}