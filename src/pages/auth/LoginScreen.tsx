import React from 'react'
import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native'

export const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        <View>
            <View>
                <Text>Iniciar Sesión</Text>
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
})
