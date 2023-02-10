import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
   container: {
      marginVertical: 20,
      flexDirection: 'row',
      alignItems: 'center'
   },
  text: {
    color: colors.blue,
    fontWeight: '500'
  },
  line: {
    backgroundColor: colors.lightGray,
    height: 1,
    flex: 1,
    marginVertical: 8
  }/**/
});