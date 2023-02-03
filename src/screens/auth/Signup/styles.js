import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors"

export const styles = StyleSheet.create({
   container: {
     // paddingVertical: 20,
      padding: 20
   },
   agreeRow: {
      flexDirection: "row",
      alignItems: "center"
   },
   agreeText: {
      color: colors.blue,
      marginHorizontal: -5
   },
   agreeTextBold: {
      color: colors.blue,
      fontWeight: "bold"
   },
   button: {
      marginVertical: 20,
   }
});