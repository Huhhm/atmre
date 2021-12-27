import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import axios from 'axios';
import api from '../apis';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const _register = async () => {
    await axios.post(api.registerApi, {
       email:email,
       password: password,
       header: {}
     })
       .then(function (response) {
         const user = response.data;
         if(user == 'email already exists !' ) {
          Alert.alert('User already exist !')
         } else {
          Alert.alert('Register success')
          navigation.navigate('Login')
         }
        
       }).catch (er => {
         console.log(er)
       })
       
   };


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{marginTop: windowHeight * 0.2}}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                marginTop: 10,
                fontFamily: 'Lato',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Register
            </Text>
            <TextInput
              placeholder="Email"
              label="Email"
              style={{
                marginTop: 20,
                width: windowWidth * 0.8,
                borderWidth: 1,
                borderRadius: 25,
                backgroundColor: '#fff',
                paddingLeft: 10,
              }}
              onChangeText={email => setEmail(email)}
              value={email}
            />

            <TextInput
              placeholder="Password"
              label="Password"
              secureTextEntry={true}
              style={{
                marginTop: 20,
                width: windowWidth * 0.8,
                borderWidth: 1,
                borderRadius: 25,
                backgroundColor: '#fff',
                paddingLeft: 10,
              }}
              onChangeText={password => setPassword(password)}
              value={password}
            />
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: '#1E90FF',
                width: windowWidth * 0.5,
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 25,
              }}
              onPress={_register}>
              <Text style={{fontFamily: 'Lato', fontSize: 18}}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
