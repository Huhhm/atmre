import * as actionTypes from './actionTypes'
{/*
export const getAtm = () => {
    return {
    type: actionTypes.GET_ATM_LOADING
    }
  }
export const getAtmSuccess = (data) => {
    return {
    type:actionTypes.GET_ATM_SUCCESS,
    data:data
    }
}
export const getAtmFail = () => {
    return {
    type:actionTypes.GET_ATM_FAIL
    }
} */}
export const doGetAtm = () => {
    return (
        {
        type: actionTypes.DO_GET_ATM 
        }
    )
  };