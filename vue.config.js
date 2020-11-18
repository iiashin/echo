module.exports={
    lintOnSave: false,   //关闭自动检查
    devServer:{
        open:true,
        port:10086,
        hot:true,
        contentBase:'public',   //指定托管目录
        host:'0.0.0.0'
    }
}