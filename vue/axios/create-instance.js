function interceptorManager(config) {
    this.config = config;
}
function Axios(config, interceptor) {
    this.config = config;
    this.interceptor = {
        request: new interceptorManager(config),
        response: new interceptorManager(config),
    };
}

Axios.prototype.request=function (config) {
    console.log('Ajax请求类型' + config.method);
}

Axios.prototype.get = function (config) {
    return Axios.prototype.request({ method: 'GET' });
}

Axios.prototype.post = function (config) {
    return Axios.prototype.request({ method: 'POST' });
}

function createInstance(config) {
    let context = new Axios(config);

    let instance = Axios.prototype.request.bind(context);

    Object.keys(context).forEach(k => {
        instance[k] = context[k];
    });

    Object.keys(Axios.prototype).forEach(k => {
        instance[k] = Axios.prototype[k].bind(context);
    });

    return instance;
}

let axios = createInstance();
axios.get({ method: 'GET'})