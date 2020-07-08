# 每周总结可以写在这里
#### Proxy 
##### 代理 - 拦截Js引擎内部目标的底层对象操作，触发响应特定操作的陷阱函数
```
 let target={};
 let proxy = new Proxy(target,{
     get(target,key){
         return target[key];
     },
     set(target,key,value){
         ....
     }
 })
```