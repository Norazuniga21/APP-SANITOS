import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation} from 'react-native'

import * as firebase from 'firebase'

//VISTA HOME PRINCIPAL
export default class HomeScreen extends React.Component {

    state = {
      email: "",
      displayName: ""
    }

    componentDidMount() {
      const {email, displayName} = firebase.auth().currentUser;

      this.setState({ email, displayName });
    }

    signOutUser = () => {
      firebase.auth().signOut();
    };

    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <Text>Hola {this.state.email}! </Text>

                <TouchableOpacity 
                style={{ marginTop: 32}}
                onPress={this.signOutUser }
                >
                    <Text style={{ color:'#414959', fontSize:13}}>
                      Salir
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
  });
  