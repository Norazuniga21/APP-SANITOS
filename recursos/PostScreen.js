import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, Picker} from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'

export default class PostScreen extends React.Component {

      static navigationOptions = {
        header: null
      }

      state = {
        escolaridade: ""
      };

      state = {
        sangre: ""
      };

      state = {
        data1: ""
      };

      changeDate = (valor) => {        
        this.setState({
          valor: data1
        })
      };

      constructor() {
        super();
        this.state = {
          isVisible: false
        };
      };

      handlePicker = () => {
        this.setState({
          isVisible: false
        })
      };

      showPicker = () => {
        this.setState({
          isVisible: true
        })
      };

      hidePicker = () => {
        this.setState({
          isVisible: false
        })
      };

    render () {
        return (
            <View style={styles.container}>
                
                <View style={styles.form}>

                    <View>
                        <Text 
                        style={styles.title1}
                        >Agregar niña/a</Text>
                    </View>

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

                    <View>
                        <Picker
                        style={styles.pickerComponent}
                        selectedValue={this.state.escolaridade}
                        onValueChange={
                          (itemValor, itemIndex) =>
                          this.setState({
                            escolaridade: itemValor
                          })
                        }
                        >
                          <Picker.Item label='Sexo' value=''/>
                          <Picker.Item label='Niña' value='Niña'/>
                          <Picker.Item label='Niño' value='Niño'/>

                        </Picker>
                    </View>

                    <View>
                        <Picker
                        style={styles.pickerComponent}
                        selectedValue={this.state.sangre}
                        onValueChange={
                          (itemValor, itemIndex) =>
                          this.setState({
                            sangre: itemValor
                          })
                        }
                        >
                          <Picker.Item label='Tipo de sangre' value=''/>
                          <Picker.Item label='A positivo' value='A positivo'/>
                          <Picker.Item label='A negativo' value='A negativo'/>
                          <Picker.Item label='B positivo' value='B positivo'/>
                          <Picker.Item label='B negativo' value='B negativo'/>
                          <Picker.Item label='O negativo' value='O negativo'/>
                          <Picker.Item label='O negativo' value='O negativo'/>
                          <Picker.Item label='AB positivo' value='AB positivo'/>
                          <Picker.Item label='AB negativo' value='AB negativo'/>


                        </Picker>
                    </View>

                    <View>
                        <TouchableOpacity>
                        <Text></Text>
                        </TouchableOpacity>

                        <DateTimePicker
                          isVisible={this.state.isVisible}
                          onConfirm={this.handlePicker}
                          onCancel={this.hidePicker}
                        />
                      
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
    title1: {
      textAlign:'center', 
      fontSize: 15, 
      color:'#8A8F9E', 
      marginBottom: 20, 
      marginTop:20,
      textTransform: 'uppercase'
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
      color: '#1611F3D',
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
    },
    pickerComponent: {
      color: '#8A8F9E',
      fontSize: 10,
      textTransform: 'uppercase',
      borderBottomColor: '#8A8F9E',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginTop: 20
    },
    dateComponent: {
      width: 450 ,
      marginTop: 20
    }
  })