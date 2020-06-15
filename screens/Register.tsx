import React from "react";
import {View,Text,TextInput,Button} from "react-native";
import { StackNavigationProp }from "@react-navigation/stack";
import {RockStackParamList} from "../utils/types";

type ProfileScreenNavigationProp = StackNavigationProp<
  RockStackParamList,
  'Register'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function({navigation}: Props){
  return(
    <View>
      <Text>SIGN UP</Text>
      <Text>Welcome Home My Friend!</Text>
      <TextInput
        placeholder="Name"
      />
      <TextInput
        placeholder="Email"
      />
      <TextInput
        placeholder="Password"
      />
      <TextInput
        placeholder="Password..."
      />

      <Button title="sign up" color="purple" onPress={() => {}}/>

      <Text>Already have an account</Text>
      <Text>
        Please {" "}
        <Text style={{color: "blue"}} onPress={() => navigation.navigate("Login")}>Login</Text>
      </Text>
    </View>
  )
}