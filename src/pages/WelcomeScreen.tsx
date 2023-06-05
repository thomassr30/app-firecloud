import React from 'react'
import { 
    Dimensions, 
    ImageBackground, 
    SafeAreaView, 
    View, 
    StyleSheet, 
    Platform, 
    StatusBar,
    Text, 
    TouchableOpacity
} from 'react-native'

const {height} = Dimensions.get('window')

export const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.container}>
            <ImageBackground 
                style={{
                    height: height / 2.5
                }}
                resizeMode='contain'
                source={require('../../assets/cb2sa.png')}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Segunda Compañía
                </Text>

                <Text style={styles.subTitle}>
                    Zapadores Puerto San Antonio
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>
                        Iniciar Sesión
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.textButtonRegister}>
                        Registrarme
                    </Text>
                </TouchableOpacity>
            </View>
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
        marginTop: 100,
    },
    textContainer: {
        paddingHorizontal: 10 * 4,
        paddingTop: 10 * 4
    },
    title: {
        fontSize: 35,
        color: '#239f98',
        fontWeight: 'bold',
    },
    subTitle: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 25
    },
    buttonContainer: {
        marginTop: 20,
        paddingHorizontal: 10 * 2,
        paddingVertical: 10 * 6,
        flexDirection: 'row'
    },
    buttonLogin: {
        backgroundColor: '#008781',
        paddingVertical: 10 * 1.5,
        paddingHorizontal: 10 * 2,
        width: '48%',
        borderRadius: 10
    },
    buttonRegister: {
        paddingVertical: 10 * 1.5,
        paddingHorizontal: 10 * 2,
        width: '48%',
        borderRadius: 10
    },
    textButtonLogin: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 20
    },
    textButtonRegister: {
        color: '#000',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 20
    },
  });
