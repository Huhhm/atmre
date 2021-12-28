import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActionSheetIOS,
} from 'react-native';
import axios from 'axios';
import api from '../apis';
import {useDispatch, useSelector} from 'react-redux';
import {_login} from '../reducers/loginReducer';
import Footer from '../components/footer';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('Fred@gmail.com');
  const [password, setPassword] = useState('123456');
  const [isSignin, setisSignin] = useState('0');
  //const [user, setUser] = useState([]);
  const userInfo = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();

  const _login = async () => {
   await axios.post(api.loginApi, {
      email:email,
      password: password,
      header: {}
    })
      .then(function (response) {
        const data = response.data;
        if (data.user) {
          setisSignin('1');
         
          dispatch({
            type: 'LOGIN_SUCCESS',
            email: email,
            password: password,
            user: data,
          });
          navigation.navigate('Home');
        } else {
          Alert.alert('Wrong password or username');
        }
      }).catch (er => {
        console.log(er)
      })
      
  };

  const _logout = () => {
    setisSignin('0');
    setEmail('');
    setPassword('');
    console.log(isSignin);
    navigation.reset({index:0,routes:[{name:'Login'}]});
  };

  useEffect(() => {
    
  });
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{marginTop: windowHeight * 0.2}}>
          {isSignin == 1 ? (
            <View>
              <Text>You Are Logged In</Text>
              <Text>{userInfo.user.message}</Text>

              <Button title="Logout" onPress={_logout} />
            </View>
          ) : (
            <View style={{alignItems: 'center'}}>
              <Text style={{marginTop: 10,fontFamily:"Lato",fontSize:30,fontWeight:'bold'}}>Login</Text>
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
              
              <TouchableOpacity style={{marginTop:20,backgroundColor:'#1E90FF',width:windowWidth*0.5,alignItems:'center',paddingTop:10,paddingBottom:10,borderRadius:25}} onPress={_login}>
                <Text style={{fontFamily: "Lato",fontSize:18}}>Login</Text>
              </TouchableOpacity>
              <Text style={{fontFamily:'Lato',marginTop:15,fontWeight:'bold'}}>Does`nt have an account yet ? Register here</Text>
              <TouchableOpacity style={{marginTop:20,backgroundColor:'#1E90FF',width:windowWidth*0.5,alignItems:'center',paddingTop:10,paddingBottom:10,borderRadius:25}} onPress={() => navigation.navigate('Register')}>
                <Text style={{fontFamily: "Lato",fontSize:18}}>Register</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
      {isSignin == 0 ? <Text></Text> : <Footer navigation={navigation} />}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
  },

});
