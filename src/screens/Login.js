import React, { useEffect, useState } from "react";
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
  ActionSheetIOS
} from "react-native";
import axios from 'axios';
import api from '../apis'
import { useDispatch, useSelector } from "react-redux";
import { _login } from '../reducers/loginReducer';
import Footer from '../components/footer'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignin, setisSignin] = useState('0')
    const [user, setUser] = useState([])
    const userInfo = useSelector(state => state.loginReducer);
    const dispatch = useDispatch();
    


    const _login = () => {
      axios.post(api.login_api, {
        
        email:email,
        password:password,
      
      headers: {
        
      },
    })
    .then(function (response) {
      
     
      const data = response.data
      setUser(response.data.user)
      if(user){
        setisSignin('1')
        console.log(isSignin)
        dispatch({
          type :'LOGIN_SUCCESS',
          email:email,
          password:password,
          isSignin:'1',
          user:data
        })
        navigation.navigate('Home');
      } else {
        Alert.alert('Wrong password or username')
      }
      
    })
      
    }

    const _logout = () => {
      setisSignin('0');
      setEmail('');
      setPassword('');
      navigation.navigate('Login');
  };

    useEffect(() => {
        console.log(isSignin)
      },[isSignin]);
    return (
        <View style={styles.container}>
          <ScrollView>
                <View style={{marginTop:windowHeight*0.2}}>
                    
                {userInfo.isSignin == 1 ? (
                  <View>
                      <Text>You Are Logged In</Text>
                      <Text>{userInfo.user.message}</Text>
                      
                      
                      
                      
                      <Button title="Logout" onPress={_logout}/>
                  </View>
                ) :(
                    
                    <View style={{alignItems:'center'}}>
                        <Text style={{marginTop:10}}>Email</Text>
                        <TextInput 
                            placeholder='Email'
                            label='Email'
                            style={{marginTop:20,width:windowWidth*0.8,borderWidth:1,borderRadius:10,backgroundColor:'#fff',paddingLeft:10}}
                            onChangeText={(email)=> setEmail(email)}
                            value={email}
                        />
                        <Text style={{marginTop:10}}>Password</Text>
                        <TextInput 
                            placeholder='Password'
                            label='Password'
                            secureTextEntry={true}
                            style={{marginTop:20,width:windowWidth*0.8,borderWidth:1,borderRadius:10,backgroundColor:'#fff',paddingLeft:10}}
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                        />
                        <TouchableOpacity onPress={_login}>
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>
                )}
                </View>
                
                </ScrollView>
                {isSignin == 0 ? <Text></Text> : <Footer navigation={navigation} />}
                
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:windowHeight,
    },
    boxshadow:{
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    }
});




