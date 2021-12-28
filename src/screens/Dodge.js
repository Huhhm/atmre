import React, { useEffect } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import {useDispatch, useSelector} from 'react-redux';
import atmReducer from '../reducers/atmReducer';
import doGetAtm from '../actions/atm'
const DodgeScreen = (props) => {
    const dispatch = useDispatch();
    const dogdata = useSelector(state => state.atmReducer);
    useEffect(() => {
            console.log(dogdata)
      },[]);
    return (
        <View>
        <Button onClick={() => dispatch(doGetAtm())} title="show dog"/>
          <Text>{dogdata.data}</Text>
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