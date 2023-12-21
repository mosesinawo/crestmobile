import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import SubscriptionPlans from '../../components/subPlans'
import { useNavigation } from '@react-navigation/native';

const BoostListing = () => {

    const navigation = useNavigation()

    return (
        <>
            <ScrollView>
                <View style={styles.page}>
                    <Pressable onPress={() => navigation.navigate("Lands")} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="arrowleft" size={24} color="#262C55" />
                        <Text style={{ color: '#262C55', fontSize: 20, alignItems: 'center', fontWeight: 'bold' }}>
                            Boost Assets</Text>

                    </Pressable>
                    <Text style={{
                        color: '#262C55', fontSize: 15, fontWeight: '900',
                        marginBottom: 20, marginTop: 35
                    }}>Premium Listing</Text>
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
                        placeholder="Enter Amount"
                        placeholderTextColor="gray"
                    />

                    <View style={styles.btnContainer}>

                        <Text style={styles.submit}>Boost Now</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: '#262C551F', width: '100%', height: 10 }}></View>
                <SubscriptionPlans />
            </ScrollView>
        </>
    )
}

export default BoostListing

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginTop: 30
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
        borderColor: '#011B332E',
        borderWidth: 1,
        height: 46,
        width: '100%',
        color: '#000',
        borderRadius: 10,
        paddingLeft: 10
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