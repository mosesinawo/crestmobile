import { Image, StyleSheet, Text, View } from 'react-native';
import ListData from '../../../assets/data/ListData';
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


const ListItem = ({item, setmodal, setDeletemodal}) => {


    return (
        <View style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.row1}>
                <View style={styles.row2}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.line}></Text>
                    <Text style={styles.lightText}> {item.size}</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginLeft:'auto',}}>
                    <MaterialCommunityIcons style={{marginRight:10}} name="pencil-outline" size={25} color="#262C5580" onPress={() => setmodal(true)} />
                    <EvilIcons name="trash" size={27} color="#D13852" onPress={() => setDeletemodal(true)} />
                </View>

            </View>
            <View style={styles.row3}>
                <Text style={styles.mediumText}>&#x20A6;{item.total}</Text>
                <Text style={styles.line}></Text>
                <Text style={styles.mediumText}>&#x20A6; {item.initialPrice}</Text>
                <Text style={styles.lightText2}> Intial Desposit</Text>
            </View>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        marginBottom: 60,
        justifyContent: 'center',

    },
    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,

    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    row3: {
        flexDirection: 'row',
        marginTop: 20,
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
        color: "#262C55",
        fontSize: 20,
        fontWeight: '900',
    },
    lightText: {
        color: '#333',
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
        fontSize: 16
    }

})