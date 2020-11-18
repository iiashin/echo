import axios from "axios";

const instance=axios.create({
    baseURL:'http://localhost:3000/',
    timeout:1000//配置超时时间
})

instance.interceptors.request.use(config=>{
    return config
},error=>{
    Promise.reject(error)
})

instance.interceptors.response.use(response=>{
    const res=response.data
    return Promise.resolve(res)
},error=>{
    //输出错误信息
    return Promise.reject(error)
})

/*
    reuqest方法(统一axios请求)
*/
export const request=async(url='',type='GET',data={})=>{    //默认值，防止data无值
    let requestOptions={
        url:url,
        method:type
    }
    let result;
    type=type.toUpperCase()
    if(type==='Get'){
        requestOptions['data']=data;
    }
    else{
        requestOptions['data']=data
    }
    await instance(requestOptions).then(res=>{
        result=res
    })
    return result   ////async的返回值作为then的参数
}