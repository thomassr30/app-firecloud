import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Platform, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'

interface Props extends StackScreenProps<any, any>{}

export const RegisterScreen = ({navigation}: Props) => {

  const [focused, setFocused] = useState<boolean>(false)

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text
                    style={styles.textTitle}
                >Crear Nueva Cuenta</Text>
            </View>
        </View>
        <View style={styles.containerForm}>
            <TextInput 
                placeholder='Nombre'
                placeholderTextColor={'#000'}
                style={styles.input}
                keyboardType='default'
                autoCapitalize='words'
                autoCorrect={false}
            />
            <TextInput 
                placeholder='Apellido'
                placeholderTextColor={'#000'}
                style={styles.input}
                keyboardType='default'
                autoCapitalize='words'
                autoCorrect={false}
            />
            <TextInput 
                placeholder='Correo'
                placeholderTextColor={'#000'}
                style={styles.input}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
            />

            <TextInput 
                placeholder='Contraseña'
                placeholderTextColor={'#000'}
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.button}
            >
                <Text
                    style={styles.titleButton}
                >
                    Crear Cuenta
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonRegister}
            >
                <Text
                    style={styles.titleButtonRegister}
                    onPress={() => navigation.navigate('LoginScreen')}
                >
                    Volver
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
      padding: 10 * 2,
      marginTop: 20
  },
  textTitle: {
      fontSize: 30,
      color: '#008781',
      fontWeight: '700',
  },
  containerForm: {
      marginVertical: 10 ,
      marginHorizontal: 10 * 2
  },
  input: {
      fontSize: 14,
      padding: 10 * 2,
      paddingLeft: 10,
      backgroundColor: '#f1f4ff',
      borderRadius: 10,
      marginBottom: 10 * 2 
  },
  textForgotPass: {
      fontSize: 14,
      color: '#008781',
      alignSelf: 'flex-end',
      fontWeight: '700'
  },
  button: {
      padding: 15,
      backgroundColor: '#008781',
      borderRadius: 10,
      marginVertical: 10 * 2,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 20
      },
      shadowOpacity: 0.5,
      shadowRadius: 10
  },
  titleButton: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20
  },
  buttonRegister: {
      padding: 10,
      borderRadius: 10,
      marginVertical: 10
  },
  titleButtonRegister: {
      color: 'gray',
      textAlign: 'center',
      fontSize: 20
  }
})

