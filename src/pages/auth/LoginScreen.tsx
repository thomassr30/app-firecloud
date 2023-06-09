import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

interface Props extends StackScreenProps<any, any>{}

export const LoginScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text
                    style={styles.textTitle}
                >Iniciar Sesión</Text>
            </View>
        </View>
        <View style={styles.containerForm}>
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
            <View>
                <Text
                    style={styles.textForgotPass}
                >
                    ¿Olvidaste tu contraseña?
                </Text>
            </View>

            <TouchableOpacity
                style={styles.button}
            >
                <Text
                    style={styles.titleButton}
                >
                    Ingresar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonRegister}
            >
                <Text
                    style={styles.titleButtonRegister}
                    onPress={() => navigation.navigate('RegisterScreen')}
                >
                    Crear nueva cuenta
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
        marginVertical: 10 * 3
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
        padding: 10 * 2,
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
