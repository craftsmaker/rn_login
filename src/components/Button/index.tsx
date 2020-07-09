import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import styles from "./styles";

interface Props {
  title: string;
  color: string;
  backgroundColor: string;
  onPress?: (e: GestureResponderEvent) => void;
}

const Button: React.FC<Props> = ({
  title,
  color,
  backgroundColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor, borderRadius: 6, marginTop: 10 },
      ]}
      onPress={onPress}
    >
      <Text style={{ color }}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export default Button;
