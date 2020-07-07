import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  form: {
    flexGrow: 1,
    flexBasis: 280,
    flexShrink: 0,
  },
  inputSelection: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 50,
    paddingVertical: 10,
  },
  checkboxSelection: {
    flex: 1,
    justifyContent: "flex-start",
  },
  icon: {
    fontSize: 25,
    color: colors.fadingColor,
  },
});
