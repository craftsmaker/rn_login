import React from "react";
import {View,Text,TextInput,Button} from "react-native";
import { StackNavigationProp }from "@react-navigation/stack";
import {RockStackParamList} from "../utils/types";

type ProfileScreenNavigationProp = StackNavigationProp<
  RockStackParamList,
  'Login'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function({navigation}: Props){
  
  return(
    <View>
      <Text>Login</Text>
      <Text>Welcome to Home My Friend!</Text>
      <TextInput
         placeholder="Email"
      />
      <TextInput
        placeholder="Password"
      />
      <Button title="LOG IN" onPress={() => {}}/>
      <Text>Remember Password</Text>
      <Text>Forget Password</Text>
      <Text>Don't have an account?</Text>
      <Text>
        Please {" "}
        <Text  style={{color: "blue"}} onPress={() => navigation.navigate("Register")}>Signup</Text>
      </Text>
      
    </View>
  ) 
}