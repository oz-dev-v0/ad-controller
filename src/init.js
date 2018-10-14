const AdController = ()=>{
    const Config = {
        MaxProbability  : 100,
    }

    const probability  = (s)=>{
        let rand = Math.random() * Config.MaxProbability
        return rand <= s ? true : false
    }

    const isMobile = ()=>{
        let ua = navigator.userAgent;
        return /iPad|iPhone|iPod|Mobile|Android/.test(navigator.userAgent) && !window.MSStream ? true : false;
    }

    return {
        probability : probability,
        isMobile : isMobile
    }
}