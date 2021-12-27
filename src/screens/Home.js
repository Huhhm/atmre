import React, {useEffect, useReducer, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import Footer from '../components/footer';
import api from '../apis';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({route, navigation}) => {
  const userInfo = useSelector(state => state.loginReducer);
  const [isLoading,setLoading] = useState(true);
  const [atm, setAtm] = useState([]);
  const [client, setClient] = useState([]);
  const [processedClient,setProcessedClient] = useState([])
  const token = userInfo.user.PRIVATE_TOKEN;
  const get_atms = async () => {
    await axios
      .get(api.getAtms, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setAtm(response.data.atm);
        setClient(response.data.queue);
        setProcessedClient(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
  };
  useEffect(() => {
    get_atms();
  });
  if (isLoading) { 
    return (<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size="large" />
          </View>)
  } else {
  return (
    
    <SafeAreaView style={styles.container}>
     
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            paddingTop: 20,
            paddingBottom: 20,
            marginLeft: 10,
            marginRight: 10,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}>
          {atm.map(data => {
            return (
              <View style={{flex: 1, alignItems: 'center'}} key={data.id}>
                <Icon name="bank" size={70} color="#000" />
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      color: 'red',
                      alignItems: 'center',
                      fontSize: 25,
                      fontWeight: 'bold',
                      fontFamily: 'Lato',
                    }}>
                    {data.status}
                  </Text>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      alignItems: 'flex-start',
                      fontFamily: 'Lato',
                      alignSelf: 'flex-start',
                    }}>
                    {data.name}
                  </Text>
                  <View>
                    <Text>Current Client:</Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        alignItems: 'flex-start',
                        fontFamily: 'Lato',
                      }}>
                      {data.client}
                    </Text>
                  </View>
                  <Text style={{marginTop: 10}}>{data.transaction}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{backgroundcolor: '#fff'}}>
          <ScrollView horizontal={true}>
            {client.map(data => {
              return (
                <View
                  style={{
                    alignItems:'center',
                    marginBottom: 20,
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingLeft:15,
                    paddingRight:15,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 5,
                  }}
                  key={data.name}>
                  <Icon name="user" size={40} color="#000" />
                  <Text style={{fontFamily: 'Lato',color:'#1E90FF', fontSize: 15,marginTop:15}}>
                    {data.name}
                  </Text>
                  <Text style={{fontWeight: 'bold', fontSize: 13,marginTop:15}}>
                    {data.transaction}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View>
          
          <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            paddingTop: 20,
            paddingBottom: 20,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 30,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}>
            <Text style={{paddingLeft:7,paddingRight:7}}>{processedClient.processedClient}</Text>
          </View>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
      
    </SafeAreaView>
  );
  }
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxSahdow: {
    marginTop: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
