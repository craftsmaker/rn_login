import React from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";

const Input: React.FC<{ placeholder: string }> = ({
  placeholder,
  children,
}) => {
  return (
    <View style={styles.inputSelection}>
      {children}
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default Input;
