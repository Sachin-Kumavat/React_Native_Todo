import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100vw"
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%"
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#46d22d',
        marginVertical: 5,
        color: "white",
        borderRadius: 10,
        width: "90%"
    },
    textStyle1: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 6,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    viewStyle: {
        backgroundColor: "#1e90ff",
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 12,
        alignItems: "center",
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        shadowColor: "red",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1
    },
    textStyle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "800",
        flex: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
        marginLeft: 10
    },
    editButtonStyle: {
        fontSize: 16,
        color: '#e76245',
        marginRight: 10
    },
    deleteButtonStyle: {
        fontSize: 16,
        color: '#841584'
    },
    inputStyle: {
        borderWidth: 2,
        borderColor: "blue",
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 16,
        width: "100%"
    },
    addButtonStyle: {
        backgroundColor: "#000",
        borderRadius: 6,
        paddingVertical: 8,
        marginVertical: 34,
        alignItems: "center"
    },
    addButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20
    }
});

export default styles;