import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors"

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: 'right'
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: "underline"
    },
    titleContainer: {
        marginVertical: 54
    },
    footerText: {
        color: colors.blue,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 30
    }
    
})




