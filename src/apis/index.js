const apiDef = "http://192.168.0.112:5000/";
const api = {
    loginApi : apiDef + 'api/v1/auth/login',
    getAtms : apiDef + 'api/v1/atms',
    registerApi: apiDef + 'api/v1/auth/register',
};
export default api ;

