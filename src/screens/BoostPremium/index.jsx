import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const BoostPremium = () => {
    return (
        <View style={styles.page}>
            <Text style={{
                color: '#262C55', fontSize: 15, fontWeight: '900',
                marginBottom: 20,
            }}>Premium Boost Listing</Text>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.title}>2 Bedroom Flat</Text>
                    <Text style={styles.line}></Text>
                    <Text style={styles.lightText}>Ogba</Text>
                </View>
                <View style={styles.row2}>
                    <Text style={styles.mediumText}>&#x20A6;500,000</Text>
                    <Text style={styles.line}></Text>
                    <Text style={styles.mediumText}>&#x20A6; 1,100,000</Text>
                    <Text style={styles.lightText2}>Total package</Text>
                </View>
            </View>
            <TextInput
                style={styles.input}
                value="3000"
                placeholder="Enter text here" />

            <View style={styles.btnContainer}>

                <Text style={styles.submit}>Boos Now</Text>
            </View>
        </View>
    )
}

export default BoostPremium

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    container: {
        marginBottom: 30,
        justifyContent: 'center',
        backgroundColor: '#3D79EF1A',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        gap: 6
    },
    row2: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 6
    },
    image: {
        height: 168
    },
    line: {
        width: 2,
        height: '100%',
        backgroundColor: '#262C554D'
    },
    title: {
        color: "#3D79EF",
        fontSize: 15,
        fontWeight: '900',
    },
    lightText: {
        color: '#262C55',
        fontSize: 12,
        fontWeight: '600'

    },
    lightText2: {
        color: '#333',
        fontSize: 12,
        fontWeight: '400'

    },
    mediumText: {
        color: "#262C55",
        fontWeight: '600',
        fontSize: 13
    },
    input: {
        borderColor: '#262C554D',
        borderWidth: 1,
        height: 46,
        width: '100%',
        color: '#000',
        borderRadius: 10,
    },
    btnContainer: {
        backgroundColor: '#262C55',
        width: '100%',
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 40
    },
    submit: {
        color: '#fff',
        fontSize: 16

    },

})