import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import React from 'react'
import { useNavigation } from '@react-navigation/native';

const EditAsset = () => {

  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Pressable onPress={() => navigation.navigate("Lands")} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name="arrowleft" size={24} color="#262C55" />
          <Text style={{ color: '#262C55', fontSize: 20, alignItems: 'center', fontWeight: 'bold' }}>
            Edit Assets</Text>

        </Pressable>
        <View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.label}>Asset Category</Text>
            <TextInput
              style={styles.input}
              placeholder="Land"
              placeholderTextColor="gray"
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>Size</Text>
            <TextInput
              style={styles.input}
              placeholder="Size"
              placeholderTextColor="gray"
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>Features</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="gray"
            />
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="gray"
            />
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="gray"
            />
          </View>
          <View style={{
            marginLeft: 'auto', backgroundColor: '#262C55',
            color: '#fff', paddingHorizontal: 10, alignItems: 'center', flexDirection: 'row',
            paddingVertical: 5, justifyContent: 'center', borderRadius: 6, marginTop: 10
          }}>
            <Text> <AntDesign name="plus" size={24} color="#fff" /></Text>
            <Text style={{ color: '#fff' }}>&nbsp;Add More Features</Text>
          </View>
        </View>
        <View>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="gray"
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>Area</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="gray"
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
          <View>
            <Text style={styles.label}>Longitude</Text>
            <TextInput
              style={styles.inputSmall}
              placeholder=""
              placeholderTextColor="gray"
            />
          </View>
          <View >
            <Text style={styles.label}>Latitude</Text>
            <TextInput
              style={styles.inputSmall}
              placeholder=""
              placeholderTextColor="gray"
            />
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="gray"
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>Initial Deposit</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="gray"
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>Payment Plan</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="gray"
          />
        </View>
        <Pressable style={styles.buttonContainerActive} onPress={() => navigation.navigate("EditAssetCont")}>
          <Text style={styles.buttonActive}>Continue</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  )
}

export default EditAsset

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical:40,
    marginTopTop:20
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
    marginTop: 10,
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
  }

})