import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
   container: {
      marginBottom: 50,
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      width: "45%",
      borderRadius: 14,
      backgroundColor: colors.darkGray,
      padding: 16,
      marginBottom: 50
   },
  image: {
    width: 30,
    height: 30,
  }
});