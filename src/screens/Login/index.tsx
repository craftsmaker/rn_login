import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Feather, AntDesign } from "@expo/vector-icons";
import { RockStackParamList } from "../../utils/types";
import style from "../../styles/colors";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Container from "../../components/Container";
import GradientButton from "../../components/GradientButton";
import colors from "../../styles/colors";
import styles from "./styles";

type ProfileScreenNavigationProp = StackNavigationProp<
  RockStackParamList,
  "Login"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Login: React.FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <Form title="Login" message="Welcome to Home My Friend">
        <LocalForm />
        <Text style={{ textAlign: "center" }}>Don't have an account?</Text>
        <Text style={{ textAlign: "center" }}>
          Please{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() => navigation.navigate("Register")}
          >
            Signup
          </Text>
        </Text>
      </Form>
      <Button
        title="log in with facebook"
        color={style.facebookColor}
        backgroundColor={style.facebookBackgroundColor}
      />
      <Button
        title="log in with google"
        color={style.googleColor}
        backgroundColor={style.googleBackgroundColor}
      />
    </Container>
  );
};

function LocalForm() {
  return (
    <View style={styles.form}>
      <View style={styles.inputSelection}>
        <Input placeholder="Email">
          <Feather name="mail" style={styles.icon} />
        </Input>

        <Input placeholder="Password">
          <AntDesign name="lock" style={styles.icon} />
        </Input>
      </View>
      <View style={{ flex: 1 }}>
        <GradientButton title="Login" />
      </View>
      <View style={styles.checkboxSelection}>
        <Checkbox>Remember password</Checkbox>
        <Text style={{ flexGrow: 0, color: colors.fadingColor }}>
          Forget Password?
        </Text>
      </View>
    </View>
  );
}

export default Login;
