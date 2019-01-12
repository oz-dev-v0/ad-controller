module.exports = AdController = ()=>{
    const Config = {
        MaxProbability  : 100
    };

    const probability  = (s)=>{
        let rand = Math.random() * Config.MaxProbability;
        return rand <= s ? true : false;
    };

    const isMobile = ()=>{
        let ua = navigator.userAgent;
        return /iPad|iPhone|iPod|Mobile|Android/.test(navigator.userAgent) && !window.MSStream ? true : false;
    };

    const getParams = () => {
        var query = window.location.search;
        if (!query) {
          return { };
        }
        return (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce((params, param) => {
            let [ key, value ] = param.split('=');
            params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
            return params;
        }, { });
    };

    return {
        probability : probability,
        isMobile : isMobile,
        getParams : getParams
    };
};