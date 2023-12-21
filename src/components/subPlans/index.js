import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { AppLoading } from 'expo-app-loading'
import { Inter_400Regular } from '@expo-google-fonts/inter'
import { useFonts, Merriweather_700Bold, Merriweather_900Black } from '@expo-google-fonts/merriweather';
import { Entypo } from '@expo/vector-icons';
import React from 'react'

const SubscriptionPlans = () => {
    let [fontsLoaded] = useFonts({
        Merriweather_700Bold
    });
    return (
        <View style={styles.container}>
            <View style={{ paddingLeft: 0 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom:20 }}>
                    <Text style={styles.header}>Subscription Plans</Text>
                    <View style={{
                        backgroundColor: '#f1a5c217', borderColor: '#F1A5C2', borderWidth: 1,
                        borderRadius: 8, paddingHorizontal: 15, paddingVertical: 6
                    }}>
                        <Text style={{ color: '#F1A5C2', fontWeight: '700', fontSize: 12 }}>View All</Text>
                    </View>
                </View>

            </View>
            <View style={styles.details}>
                <View style={{
                    paddingLeft: 20, borderBottomColor: '#3D79EF66',
                    borderBottomWidth: 1
                }}>
                    <Text style={{
                        color: '#3D79EF',
                        fontSize: 20, fontWeight: '900',
                        marginBottom: 5

                    }}>Bronze</Text>
                    <Text style={{ color: '#262C55', fontSize: 18, fontWeight: '700', marginBottom:10 }}>NGN3,000 &nbsp;
                        <Text style={{ fontSize: 12, fontWeight: '400' }}>Monthly</Text>
                    </Text>

                </View>

                <View style={{ paddingHorizontal: 0 }}>
                    <View style={styles.listingRow}>
                        <Entypo name="dot-single" size={40} color="#262C55" />
                        <Text style={styles.listingText}> 4 Standard Listings</Text>
                    </View>
                    <View style={styles.listingRow}>
                        <Entypo name="dot-single" size={40} color="#262C55" />
                        <Text style={styles.listingText}> 4 Premium Listings</Text>
                    </View>
                    <View style={styles.listingRow}>
                        <Entypo name="dot-single" size={40} color="#262C55" />
                        <Text style={styles.listingText}> 0 Premium Boost Listings</Text>
                    </View>
                    <View style={styles.listingRow}>
                        <Entypo name="dot-single" size={40} color="#262C55" />
                        <Text style={styles.listingText}> Unlimited in-app chat with clients</Text>
                    </View>

                </View>

                <View style={{
                    paddingHorizontal: 20, borderTopColor: '#3D79EF66',
                    borderTopWidth: 1, paddingTop: 20
                }}>
                    <Text style={{
                        backgroundColor: '#3D79EF',
                        color: '#fff', fontWeight: '600', fontSize: 18, textAlign: 'center',
                        paddingVertical: 15, borderRadius: 10
                    }}>Choose Bronze</Text>
                </View>
            </View>
        </View>
    )
}

export default SubscriptionPlans

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        
    },
    header: {
        fontWeight: '900',
        fontSize: 20,
        color: '#262C55',
        fontFamily: 'Merriweather_700Bold'
    },
    details: {
        borderColor: '#3D79EF66',
        borderWidth: 1,
        paddingTop: 20,
        paddingBottom: 30,
        borderRadius: 10,

    },
    listingText: {
        fontSize: 17,
        fontWeight: '400',
        color: '#262C55',
    },
    listingRow: {
        flexDirection: 'row',
        alignItems: 'center',

    }
})