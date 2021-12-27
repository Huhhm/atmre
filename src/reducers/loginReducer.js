//import {GET_USERS_SUCCESS} from '../actions/user';
export const _login = () =>  {
    type:'LOGIN_SUCCESS'
    
};


const loginReducer  = ( state =  {email:'', password:'', isSignin:'0', user:[] } , action) => {
        switch (action.type){
            case 'LOGIN_SUCCESS':
                return {
                    
                    isSignin:action.isSignin,
                    email:action.email,
                    password:action.password,
                    user:action.user
                }
            default:
                return state;
        }
};

export default loginReducer;