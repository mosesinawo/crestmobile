import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modal: {
      
        backgroundColor: '#262C5533',
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
    },
    container: {
        marginTop:"auto",
        backgroundColor: '#fff',
        height: '55%',
        width: '100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#3D79EF66',
        borderBottomWidth: 2,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    body: {
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 20
    },
    text: {
        color: '#262C55',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 31,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: "#3D79EF1A",
        borderColor: '#3D79EF99',
        borderWidth: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        marginTop: 20
    },
    buttonContainerActive: {
        backgroundColor: "#3D79EF",
        borderColor: '#3D79EF99',
        borderWidth: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        marginTop: 20
    },
    button: {
        color: '#3D79EF',
        fontSize: 15,
        fontWeight: '600',
    },
    buttonActive: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
    }
})