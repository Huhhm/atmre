import React, { useEffect } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import {doGetAtm} from '../actions/atm';
const DodgeScreen = (props) => {
    const dispatch = useDispatch();
    const dogdata = useSelector(state => state.atmReducer);
    const getUse = () => {
        dispatch(doGetAtm());
    }
    
    useEffect(() => {
        getUse();
        console.log(dogdata);
      },[]);
    return (
        <View>
            
          <Text>{dogdata.data.message}</Text>
      </View>
    )
}
export default DodgeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});