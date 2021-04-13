/*
 * @Author: Cishenn Lee
 * @Date: 2021-04-11 14:06:26
 * @LastEditTime: 2021-04-11 15:18:49
 * @FilePath: \algorithm\vue\axios\request-send.js
 * @Description: 
 */
function Axios(config) {
    this.config = config;
}

Axios.prototype.request = function(config) {
    // console.log('config' + config.method);

    let promise = new Promise.resolve(config);

    // undefined is placeholder
    let chains = [dispatchRequest, undefined];

    let res = promise.then(chains[0], chains[1]);

    return res;
}

function dispatchRequest(config) {

}

function xhrAdapter(config) {

}

let axios = Axios.prototype.request(null);

axios({
    method: 'POST',
    url: 'http://localhost:8080'
}).then(response => {
    console.log(response);
})