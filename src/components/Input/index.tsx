import React from "react";
import { View, TextInput, ViewStyle, StyleProp } from "react-native";
import styles from "./styles";

const Input: React.FC<{
  placeholder: string;
  style?: StyleProp<ViewStyle>;
}> = ({ placeholder, children, style }) => {
  return (
    <View style={[styles.inputSelection, style]}>
      {children}
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default Input;
