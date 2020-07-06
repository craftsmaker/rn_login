import React from "react";
import { View, CheckBox, Text } from "react-native";
import colors from "../../styles/colors";

const Checkbox: React.FC<{ checked?: boolean }> = ({
  children,
  checked = false,
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <CheckBox value={checked} />
      <View style={{ justifyContent: "center" }}>
        <Text style={{ color: colors.fadingColor }}>{children}</Text>
      </View>
    </View>
  );
};

export default Checkbox;
