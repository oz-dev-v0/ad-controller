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

    // Reference by https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    const docCookies = {
        getItem: (sKey) => {
            if (!sKey || !docCookies.hasItem(sKey)) { return null; }
            console.log("docCookie getItem : "+ document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"))
            return unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
        },
        setItem: (sKey, sValue, vEnd, sPath, sDomain, bSecure) => {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return; }
            let sExpires = "";
            if (vEnd) {
                switch (vEnd.constructor) {
                    case Number:
                    sExpires = vEnd === Infinity ? "; expires=Tue, 19 Jan 2038 03:14:07 GMT" : "; max-age=" + vEnd;
                    break;
                    case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                    case Date:
                    sExpires = "; expires=" + vEnd.toGMTString();
                    break;
                }
            }
            document.cookie = escape(sKey) + "=" + escape(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        },
        removeItem: (sKey, sPath) => {
            if (!sKey || !docCookies.hasItem(sKey)) { return; }
            document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sPath ? "; path=" + sPath : "");
        },
        hasItem: (sKey) => {
            return (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
        },
        keys: () => { /* optional method: you can safely remove it! */
            let aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
            for (let nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = unescape(aKeys[nIdx]); }
            return aKeys;
        }
    };
    
    const cache = {
        getCookie : (k) => {
            let r = docCookies.getItem(k);
            return r;
        },
        getLocalStorage : (k) => {
            let r = localStorage.getItem(k);
            return r;
        },
        getItem : (k) => {
            // Get cookie
            let r = docCookies.getItem(k);
            // Get localstorage
            if( !r ){
            let r = localStorage.getItem(k);
            }
            return r;
        },
        setCookie : (k, v) => {
            docCookies.setItem(k,v,Infinity,"/");
        },
        setLocalStorage : (k, v) => {
            localStorage.setItem(k,v);
        },
        setItem : (k, v) => {
            // Set cookie || localStorage
            localStorage.setItem(k,v);
            docCookies.setItem(k,v,Infinity,"/");
        },
        removeCookie : (k) => {
            docCookies.removeItem(k,"/");
        },
        removeLocalStorage : (k) => {
            localStorage.removeItem(k);
        },
        removeItem : (k) => {
            // Remove cookie || localStorage
            localStorage.removeItem(k);
            docCookies.removeItem(k,"/");
        }
    };

    return {
        probability : probability,
        isMobile : isMobile,
        getParams : getParams,
        cache : cache
    };
};