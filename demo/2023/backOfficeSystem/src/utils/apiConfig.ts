const REACT_APP_PROXY_URL=process.env.REACT_APP_PROXY_URL;
const apiConfig = { 
    API_URL: 'https://api-test.1kmxc.com/',
    DING_SIGNATURE_URL: 'https://api-mapic.1kmxc.com/ding/jsApiConfig/getSignature',
    
    PARTNER_APP:'166143202'
}
if (REACT_APP_PROXY_URL=="pro") {
    //生产环境
    apiConfig.API_URL= "https://api.1kmxc.com/";
} else if(REACT_APP_PROXY_URL=="dev") {
    //测试环境
} else {//本地跑的服务
    
}
export default apiConfig;