import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import React from 'react';
import styles from './styles';

const EditModal = ({ setmodal, modal }) => {
    return (
        <View style={modal ? styles.modal : styles.modalHide}>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{
                        color: '#262C55',
                        fontSize: 18,
                        fontWeight: '600'
                    }}>Boost Asset</Text>
                    <Feather name="x" size={24} color="#262C55" onPress={() => setmodal(false)} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.text}>What type of listing do you want to boost to?</Text>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.button}>Premium Listing</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.button}>Premium Boost Listing</Text>
                    </View>
                </View>

            </View>
        </View>


    )
}

export default EditModal
