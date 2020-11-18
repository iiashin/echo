## echo
vue-cli+mock+router+mint-ui+axios+vuex
vue练手小项目，一个小小的音乐播放器

## 感谢
[vue2-echo](https://github.com/uncleLian/vue2-echo)
从这个项目里借鉴了很多东西

### 目录结构
├─public
└─src
    ├─api               //请求api
    ├─assets            //存放图片资源
    │  └─img
    ├─components        //页面组成组件
    ├─mock              //数据拦截，模拟生成数据
    ├─pages             //主页面
    ├─router            //路由
    ├─store             //vuex
    ├─util              //封装axios请求

#### 实现功能
1. 播放/暂停音乐；
2. 切换/删除音乐，可拉动进度条
3. 点击音乐可查看信息
4. 播放模式:循环/顺序/随机

#### 项目截图
* 主界面
![img](https://github.com/iiashin/echo/blob/master/recommend.png)
* 播放列表
![img](https://github.com/iiashin/echo/blob/master/list.png)
* 音乐信息
![img](https://github.com/iiashin/echo/blob/master/detail.png)
#### 安装依赖
```
npm install
```

#### 启动项目
```
npm run serve
```




