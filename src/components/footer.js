import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Footer = ({navigation}) => (
    <View style={{height:50}}>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{width:windowWidth*0.33,alignItems:'center',backgroundColor:'#fff'}} onPress={() => navigation.navigate('Home')}>
            <Icon name="home" size={30} color="#900" />
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:windowWidth*0.33,alignItems:'center',backgroundColor:'#fff'}} onPress={() => navigation.navigate('Dodge')}>
            <Icon name="home" size={30} color="#900" />
                <Text>Dog</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:windowWidth*0.33,alignItems:'center',backgroundColor:'#fff'}} onPress={() => navigation.navigate('Login')}>
            <Icon name="user" size={30} color="#900" />
                <Text>User</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
export default Footer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});