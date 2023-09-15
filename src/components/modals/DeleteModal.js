import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react'
import styles from './styles';

const DeleteModal = ({deleteModal, setDeletemodal}) => {
    return (
        <View style={deleteModal ? styles.modal : styles.modalHide}>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{
                        color: '#262C55',
                        fontSize: 18,
                        fontWeight: '600'
                    }}>Delete Asset</Text>
                    <Feather name="x" size={24} color="#262C55" onPress={() => setDeletemodal(false)} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.text}>Are you sure you want to delete this asset?</Text>
                    <View style={styles.buttonContainerActive}>
                        <Text style={styles.buttonActive}>No</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.button}>Yes</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default DeleteModal
