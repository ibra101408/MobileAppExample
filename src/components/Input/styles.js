import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        //paddingHorizontal: 20,
        marginBottom: 20,
    },
    inputContainer: {
        borderWidth: 0.7,
        borderColor: colors.gray,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        borderWidth: 0.1,
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontWeight: "500"
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16
    }
});