import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors"

export const styles = StyleSheet.create({
   container: {
    backgroundColor: colors.blue,
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 10,
    width: "100%"

   },
   title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center'
},
});