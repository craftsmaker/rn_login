import React from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: constants.statusBarHeight,
    paddingHorizontal: 30,
  },
});

const Container: React.FC<{ style?: StyleProp<ViewStyle> }> = ({
  children,
  style,
}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Container;
