
import { getAtmSuccess,getAtmFail,getAtm } from "../actions/atm";
import * as actionTypes from '../actions/actionTypes'

import {takeEvery, put, call} from 'redux-saga/effects';


function* fetchAtmAsync() {
    try {
      yield put({type:actionTypes.GET_ATM_LOADING});
      const data = yield call(() => {
        return fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json())
        }
      )
      
      yield put({type:actionTypes.GET_ATM_SUCCESS,data});
    } catch (error) {
      yield put({type:actionTypes.GET_ATM_FAIL});
    }
  }

function* mySaga (){
    yield takeEvery(actionTypes.DO_GET_ATM,fetchAtmAsync)
}

export default mySaga;