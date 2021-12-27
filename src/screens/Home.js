import React, { useEffect , useReducer, useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    SafeAreaView,
    ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import Footer from '../components/footer';
import api from '../apis'

const HomeScreen = ({ route, navigation }) => {
    
    const userInfo = useSelector(state => state.loginReducer);
    const [atm,setatm] = useState([])
    const [fsclient,setfsclient] = useState([])
    const token = userInfo.user.PRIVATE_TOKEN
    const get_atms = () => {
        axios.get (api.get_atms,{
            headers:{
                "Authorization" : `Bearer ${token}`
                
            }
        })
        .then(function(response){ 
            
            setatm(response.data.atm)
            setfsclient(response.data)
            
        })
        .catch(function(error){
            console.log(error)
        })
    }
    useEffect(() => {
        
        get_atms()
    })
    return(
    <SafeAreaView style={styles.container}>
        
        <ScrollView>
        <View style={{flexDirection:'row',marginTop:20}}>
        {atm.map((data) => {
            return(
            <View style={{flex:1,alignItems:'center'}} key={data.id}>
                <Icon name="bank" size={70} color="#000" />
                <Text style={{color:'red',fontSize:30,fontWeight:'bold'}}>{data.status}</Text>
                <Text style={{marginTop:20,fontSize:20}}>{data.name}</Text>
                <View>
                <Text>Current Client:</Text>
                <Text style={{fontWeight:'bold'}}>{data.client}</Text>
                </View>
                <Text style={{marginTop:10}}>{data.transaction}</Text>
               
            </View>
            )
        })
        }
         
         
        </View>
        <View>
            <Text>{fsclient.processedClient}{userInfo.isSignin}</Text>
        </View>
        </ScrollView>
        <Footer navigation={navigation} />
    </SafeAreaView>
    )}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});