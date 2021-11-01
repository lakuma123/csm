export const SERVICES = {
    ENV:                'dev',
    HOST:                                    "",
    GET_SSIM_PATH:                            "",
    GET_CLASSMAPPING_PATH:                    "",
    GET_PERMANENTITEMS_PATH:                  "",
}

export function urlBuilder(section){
    switch(section){
        case 'GET_SSIM':
            return `${SERVICES.HOST}${SERVICES.GET_SSIM_PATH}`;
            case 'GET_CLASSMAPPING':
            return `${SERVICES.HOST}${SERVICES.GET_CLASSMAPPNG_PATH}`;
            case 'GET_PERMANENTITEMS':
            return `${SERVICES.HOST}${SERVICES.GET_PERMANENTITEMS_PATH}`;
        default:
            return;
    }
}

--
 import { SERVICES, urlBuilder } from "./config";
 export const rester = {
     getSsimData: () => {
         const url = urlBuilder('GET_SSIM');
         return executeRequest(url, GET);    
     },
     getClassMappingData: () => {
         const url = urlBuilder('GET_CLASSMAPPING')
         return executeRequest(url, GET);
     },
     getPetmanentData: () => {
         const url = urlBuider('GET_PERMANENTITEMS')
         return executeRequest(url, GET);
     }
 }
 const executeRequest = (url, method, payload= {}) => {
let body = {
    method: method,
    Credentials: 'include',
    headers: new Headers( {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    })
}
if(method === POST || method === DELETE){
    body.body = JSON.stringify(payload);
}

return fetch(url,body).then(response => response.json())
 }

 const GET = 'GET';
 const POST = 'POST';
 const DELETE = 'DELETE'
