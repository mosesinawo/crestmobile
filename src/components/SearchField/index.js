import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchListItem from '../SearchListItem'
import ListData from '../../../assets/data/ListData';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const SearchFieldHeader = () => {

    const navigation = useNavigation();
    return (
        <View style={{ marginBottom: 40, marginTop: 20 }}>
            <Pressable onPress={() => navigation.navigate("Lands")} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign name="arrowleft" size={24} color="#262C55" />
                <Text  style={{ color: '#262C55', fontSize: 20, alignItems: 'center', fontWeight: 'bold' }}>
                    Search for Lands</Text>

            </Pressable>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 40 }}>
                <Text style={styles.headerText}>Land</Text>
                <Text style={styles.headerText}>300sqm</Text>
                <Text style={styles.headerText}>500,000 - 3,000,000</Text>

            </View>
        </View>
    )
}

const SearchField = () => {
    return (
        <View style={styles.container} >
            <FlatList data={ListData}
                ListHeaderComponent={() => <SearchFieldHeader />}
                renderItem={({ item }) => <SearchListItem item={item} />}
            />

        </View>
    )
}

export default SearchField

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop:30
    },
    headerText: {
        color: '#3D79EF',
        backgroundColor: '#EFF4FE',
        paddingHorizontal: 15,
        paddingVertical: 7,
    }
})