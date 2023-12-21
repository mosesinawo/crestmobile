import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListItem from '../listItem'
import LandData from "../../../assets/data/LandData";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import ListData from '../../../assets/data/ListData';

const LandListHeader = () => {

    const navigation = useNavigation();
    const [active, setActive] = useState("available")

const handleActive = (item ) =>{
    setActive(item)
}

// console.warn(active)

    return (
        <View style={{ marginBottom: 40, marginTop: 20 }}>
            <Pressable onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="arrowleft" size={24} color="#262C55" />
                <Text style={{ color: '#262C55', fontSize: 20, alignItems: 'center', fontWeight: 'bold' }}>
                    Listed Lands</Text>
            </Pressable>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 40, justifyContent: 'space-between' }}>
                <Text onPress={() => handleActive("available")}
                    style={active === 'available' ? styles.headerTextActive : styles.headerText}>Available</Text>
                <Text onPress={() => handleActive("installment")}
                    style={active === 'installment' ? styles.headerTextActive : styles.headerText}>Installment</Text>
                <Text onPress={() => handleActive("sold")}
                    style={active === 'sold' ? styles.headerTextActive : styles.headerText}>Sold</Text>

            </View>
        </View>
    )
}

const LandList = ({ setmodal, setDeletemodal }) => {

 
    const [data, setData] = useState([])

    const active = "installment"
    useEffect(() => {

        if (active === "installment") {
            setData(ListData)
        } else {
            setData(LandData)
        }
    }, [active])



    

    return (
        <View style={styles.container}>
            <FlatList data={data}
                ListHeaderComponent={() =>
                     <LandListHeader/>}
                renderItem={({ item }) => <ListItem item={item} setmodal={setmodal} setDeletemodal={setDeletemodal} />} />

        </View>
    )
}

export default LandList

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop: 30
    },
    headerText: {
        color: '#3D79EF',
        paddingHorizontal: 25,
        paddingVertical: 5,
        backgroundColor: '#3D79EF14',
        borderRadius: 4
    },
    headerTextActive: {
        color: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 5,
        backgroundColor: '#3D79EF',
        borderRadius: 4
    }
})