import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import React from 'react'
import { useNavigation } from '@react-navigation/native';

const EditAssetCont = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Pressable onPress={() => navigation.navigate("EditAsset")} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="arrowleft" size={24} color="#262C55" />
                    <Text style={{ color: '#262C55', fontSize: 20, alignItems: 'center', fontWeight: 'bold' }}>
                        Edit Assets</Text>

                </Pressable>
                <View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.label}>Upload Document</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Certificate of ownership"
                            placeholderTextColor="gray"
                        />

                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Deed of assignment"
                        placeholderTextColor="gray"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Survey Plan"
                        placeholderTextColor="gray"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Allocation Form"
                        placeholderTextColor="gray"
                    />

                    <View style={{
                        marginLeft: 'auto', backgroundColor: '#262C55',
                        color: '#fff', paddingHorizontal: 10, alignItems: 'center', flexDirection: 'row',
                        paddingVertical: 5, justifyContent: 'center', borderRadius: 6, marginTop: 10
                    }}>
                        <Text> <AntDesign name="plus" size={24} color="#fff" /></Text>
                        <Text style={{ color: '#fff' }}>&nbsp;Add More Document</Text>
                    </View>
                </View>
                <View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.label}>Location</Text>
                        <TextInput
                            style={styles.inputArea}
                            placeholder=""
                            placeholderTextColor="gray"
                        />
                    </View>

                </View>

                <View style={{ marginTop: 20, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, marginBottom: 15, color: '#011B3399' }}>Inspection Schedule</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.label}>Day</Text>
                            <TextInput
                                style={styles.inputSmall}
                                placeholder=""
                                placeholderTextColor="gray"
                            />
                        </View>
                        <View >
                            <Text style={styles.label}>Time</Text>
                            <TextInput
                                style={styles.inputSmall}
                                placeholder=""
                                placeholderTextColor="gray"
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontWeight: '600', fontSize: 15, marginBottom: 15, color: '#011B3399' }}>Upload images & videos</Text>


                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Text style={styles.smallTextActive}>Front-view</Text>
                        <Text style={styles.smallText}>Video</Text>
                        <Text style={styles.smallText}>Main-view</Text>
                    </View>

                    <View style={styles.imageContainer}>
                        <Image source={require('../../../assets/images/upload.png')} style={{ width: 50, height: 50 }} />
                        <Text style={{ color: '#262C554D', fontSize: 15 }}>Upload</Text>
                    </View>

                    <Text style={styles.label}>Listing Type</Text>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                        placeholderTextColor="gray"
                    />
                </View>


                <View style={styles.buttonContainerActive}>
                    <Text style={styles.buttonActive}>Save Info</Text>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default EditAssetCont

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 40,
        marginTop: 10

    },
    label: {
        fontSize: 15,
        fontWeight: '400',
        color: '#011B3399',

    },
    input: {
        borderColor: '#011B332E',
        borderWidth: 1,
        height: 46,
        width: '100%',
        color: '#000',
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 20,
        backgroundColor: '#011B3308'
    },
    inputArea: {
        borderColor: '#011B332E',
        borderWidth: 1,
        height: 121,
        width: '100%',
        color: '#000',
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 20,
        backgroundColor: '#011B3308'
    },
    inputSmall: {
        borderColor: '#011B332E',
        borderWidth: 1,
        height: 46,
        width: 150,
        color: '#000',
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 10,
        backgroundColor: '#011B3308'
    },
    buttonContainerActive: {
        backgroundColor: "#3D79EF",
        borderColor: '#3D79EF99',
        borderWidth: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        marginTop: 20,
        borderRadius: 8
    },
    buttonActive: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
    },
    smallText: {
        backgroundColor: '#3D79EF0F',
        color: '#3D79EF',
        fontSize: 13,
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    smallTextActive: {
        backgroundColor: '#3D79EF',
        color: '#fff',
        fontSize: 13,
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    imageContainer: {
        backgroundColor: '#011B3308',
        borderWidth: 1,
        borderColor: '#011B332E',
        alignItems: 'center',
        justifyContent: 'center',
        height: 175,
        marginTop: 20,
        borderRadius: 8,
        marginBottom: 40
    }

})