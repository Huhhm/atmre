const apiDef = "http://192.168.1.3:5000/";
const api = {
    loginApi : apiDef + 'api/v1/auth/login',
    getAtms : apiDef + 'api/v1/atms',
    registerApi: apiDef + 'api/v1/auth/register',
};
export default api ;

