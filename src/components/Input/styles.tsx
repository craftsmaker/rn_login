import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  inputSelection: {
    borderColor: colors.fadingColor,
    borderBottomWidth: 1,
    marginVertical: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: "100%",
    paddingLeft: 10,
  },
});
