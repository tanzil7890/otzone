import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    btn1: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: "lightgrey",
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginHorizontal: 20,
    }
});

export default styles;