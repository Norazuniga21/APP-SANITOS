import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar} from 'react-native'

export default class PostScreen extends React.Component {

    static navigationOptions = {
        header: null
      }
  
      state = {
        name:"",
        email:"",
        password:"",
        errorMessage: null
      };

    render () {
        return (
            <View style={styles.container}>
                
                <View style={styles.form}>

                    <View>
                        <Text style={styles.inputTitle}>Nombre</Text>
                        <TextInput 
                        style={styles.input} 
                        autoCapitalize='none' 
                        onChangeText={name=> this.setState({ name })}
                        value={this.state.name}
                        ></TextInput>
                    </View>

                    <View>
                        <Text style={styles.inputTitle}>Niña</Text>
                        <TextInput 
                        style={styles.input} 
                        autoCapitalize='none' 
                        onChangeText={name=> this.setState({ name })}
                        value={this.state.name}
                        ></TextInput>
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    greeting: {
      marginTop: 32,
      fontSize: 18,
      fontWeight: '400',
      textAlign: 'center',
      color: '#FFF'
    },
    errorMessage: {
      color: '#E9446A',
      height: 72,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 30
    },
    error: {
      color: '#E9446A',
      fontSize: 13,
      fontWeight: '600',
      textAlign: 'center'
    },
    form: {
      marginBottom: 48,
      marginTop: 10,
      marginHorizontal: 30
    },
    inputTitle: {
      color: '#8A8F9E',
      fontSize: 10,
      textTransform: 'uppercase'
    },
    input: {
      borderBottomColor: '#8A8F9E',
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: 40,
      fontSize: 15,
      color: '#1611F3D'
    },
    button: {
      marginHorizontal: 30,
      backgroundColor: '#E9446A',
      borderRadius: 4,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center'
    },
    back: {
      position: 'absolute',
      top: 48,
      left: 32,
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: 'rgba (211, 22, 48, 0.1)',
      alignItems: 'center',
      justifyContent: 'center'
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#E1E2E6',
      marginTop: 48,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });