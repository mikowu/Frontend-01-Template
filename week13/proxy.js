
    let handlers=new Map();
    let usedReactivities=[];
    let object={
        a:1,
        b:2
    }
    let reactivities= new Map();
    
    function reactive(obj){
        if(reactivities.has(obj)){
            return reactivities.get(obj);
        }

        let proxy= new Proxy(obj,{
            get(obj,prop){
                usedReactivities.push([obj,prop]);
                if(typeof obj[prop] === "object")
                    return reactive(obj[prop])
                return obj[prop]
            },
            set(obj,prop,val){
                obj[prop]=val
                if(handlers.get(obj))
                    if(handlers.get(obj).get(prop))
                        for(let handler of handlers.get(obj).get(prop))
                            handler();
                return obj[prop];
            }
        })

        reactivities.set(obj,proxy);
        return proxy;
    }
    function effect(handler){
        usedReactivities=[];
        handler();
        for(let usedReactivity of usedReactivities){
            let [obj,prop]=usedReactivity;
            console.log([obj,prop]);
            if(!handlers.has(obj)){
                handlers.set(obj,new Map())
            }
            if(!handlers.get(obj).has(prop)){
                handlers.get(obj).set(prop,[])
            }
            handlers.get(obj).get(prop).push(handler);
        }
        
    }
    let dummy;

    let proxy=reactive(object)

    effect(() => dummy = proxy.a.x)

    console.log(dummy);
    // proxy.a=2
    proxy.a={x:4}
    console.log(dummy);
