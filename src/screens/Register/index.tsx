import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { RockStackParamList } from "../../utils/types";
import Container from "../../components/Container";
import Form from "../../components/Form";
import styles from "./styles";
import Input from "../../components/Input";
import GradientButton from "../../components/GradientButton";
import Checkbox from "../../components/Checkbox";

type ProfileScreenNavigationProp = StackNavigationProp<
  RockStackParamList,
  "Register"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Register: React.FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <Form title="SIGN UP" message="Welcome to Home My Friend">
        <LocalForm />
        <Text style={{ textAlign: "center" }}>Already have an account?</Text>
        <Text style={{ textAlign: "center" }}>
          Please{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </Form>
    </Container>
  );
};
function LocalForm() {
  return (
    <View style={styles.form}>
      <View style={styles.inputSelection}>
        <Input placeholder="Name" style={{ flexShrink: 0, flexBasis: 25 }}>
          <MaterialIcons name="person-outline" style={styles.icon} />
        </Input>
        <Input placeholder="Email" style={{ flexShrink: 0, flexBasis: 25 }}>
          <Feather name="mail" style={styles.icon} />
        </Input>
        <Input placeholder="Password" style={{ flexShrink: 0, flexBasis: 25 }}>
          <AntDesign name="lock" style={styles.icon} />
        </Input>
        <Input
          placeholder="Password retype"
          style={{ flexShrink: 0, flexBasis: 25 }}
        >
          <AntDesign name="lock" style={styles.icon} />
        </Input>
      </View>
      <View style={{ flex: 1 }}>
        <GradientButton title="Sign up" />
      </View>
      <View style={styles.checkboxSelection}>
        <Checkbox>Terms & Conditions</Checkbox>
      </View>
    </View>
  );
}

export default Register;
