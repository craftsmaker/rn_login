import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

interface Props {
  title: string;
  color: string;
  backgroundColor: string;
}

const Button: React.FC<Props> = ({ title, color, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor, borderRadius: 6, marginTop: 10 },
      ]}
    >
      <Text style={{ color }}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default Button;
